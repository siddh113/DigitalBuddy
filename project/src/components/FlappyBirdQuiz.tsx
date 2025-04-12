import React, { useState, useEffect, useRef } from 'react';
import { QuizQuestion, getQuizQuestions } from '../data/lessonData';

interface FlappyBirdQuizProps {
  moduleTitle: string;
  quizNumber: number;
  onComplete: (score: number) => void;
  onBack: () => void;
  courseId: string;
}

const FlappyBirdQuiz: React.FC<FlappyBirdQuizProps> = ({ 
  moduleTitle, 
  quizNumber, 
  onComplete, 
  onBack, 
  courseId 
}) => {
  // Game mechanics state
  const [gameActive, setGameActive] = useState<boolean>(false);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [score, setScore] = useState<number>(0);
  const [birdPosition, setBirdPosition] = useState<number>(250);
  const [birdVelocity, setBirdVelocity] = useState<number>(0);
  const [gravity, setGravity] = useState<number>(0.5);
  const [pipes, setPipes] = useState<Array<{x: number, y: number, passed?: boolean}>>([]);
  const [speed, setSpeed] = useState<number>(2.5);
  const [showSuccess, setShowSuccess] = useState<boolean>(false);
  
  // Quiz state
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [showQuestion, setShowQuestion] = useState<boolean>(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  
  // Game canvas reference
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const gameLoopRef = useRef<number>(0);
  
  // Load quiz questions
  useEffect(() => {
    const quizQuestions = getQuizQuestions(courseId, moduleTitle, quizNumber);
    setQuestions(quizQuestions);
  }, [courseId, moduleTitle, quizNumber]);
  
  // Initialize game
  const startGame = () => {
    if (questions.length === 0) {
      // No questions available
      onBack();
      return;
    }
    
    setGameActive(true);
    setGameOver(false);
    setScore(0);
    setBirdPosition(250);
    setBirdVelocity(0);
    setPipes([]);
    setShowQuestion(false);
    setSelectedAnswer(null);
    setCurrentQuestionIndex(0);
    setShowSuccess(false);
  };
  
  // Game rendering
  useEffect(() => {
    if (!gameActive) return;
    
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    // Check if all questions have been answered already
    if (currentQuestionIndex >= questions.length && questions.length > 0) {
      handleSuccessfulCompletion();
      return;
    }
    
    const renderGame = () => {
      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Draw background
      ctx.fillStyle = '#87CEEB';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Draw bird
      ctx.fillStyle = '#FFD700';
      ctx.beginPath();
      ctx.arc(100, birdPosition, 15, 0, Math.PI * 2);
      ctx.fill();
      
      // Draw pipes
      ctx.fillStyle = '#32CD32';
      pipes.forEach(pipe => {
        // Upper pipe
        ctx.fillRect(pipe.x, 0, 50, pipe.y);
        
        // Lower pipe
        ctx.fillRect(pipe.x, pipe.y + 180, 50, canvas.height - pipe.y - 180);
      });
      
      // Draw score and question progress
      ctx.fillStyle = 'white';
      ctx.font = '24px Arial';
      ctx.fillText(`Score: ${score}`, 20, 30);
      
      // // Draw question progress indicator
      // const nextQuestionAt = Math.ceil((score + 1) / 2) * 2;
      // const pipesUntilQuestion = nextQuestionAt - (score + 1);
      // if (currentQuestionIndex < questions.length) {
      //   ctx.fillText(`Next question in: ${pipesUntilQuestion + 1} pipe${pipesUntilQuestion !== 0 ? 's' : ''}`, 20, 70);
      // } else {
      //   ctx.fillText(`All questions answered!`, 20, 70);
      // }
    };
    
    renderGame();
    
    // Game loop
    const gameLoop = () => {
      // Update bird position
      setBirdPosition(prevPos => prevPos + birdVelocity);
      setBirdVelocity(prevVel => prevVel + gravity);
      
      // Update pipes
      setPipes(prevPipes => {
        // Move pipes
        const updatedPipes = prevPipes.map(pipe => ({
          ...pipe,
          x: pipe.x - speed
        }));
        
        // Remove pipes that are off screen
        const filteredPipes = updatedPipes.filter(pipe => pipe.x > -50);
        
        // Generate new pipe
        if (prevPipes.length === 0 || prevPipes[prevPipes.length - 1].x < canvas.width - 300) {
          const newPipe = {
            x: canvas.width,
            y: Math.floor(Math.random() * (canvas.height - 300)) + 50,
            passed: false
          };
          
          return [...filteredPipes, newPipe];
        }
        
        return filteredPipes;
      });
      
      // Collision detection
      if (birdPosition < 0 || birdPosition > canvas.height) {
        endGame();
        return;
      }
      
      // Check for pipe collisions and scoring
      pipes.forEach(pipe => {
        // Pipe collision detection
        if (
          100 + 15 > pipe.x && 
          100 - 15 < pipe.x + 50 &&
          (birdPosition - 15 < pipe.y || birdPosition + 15 > pipe.y + 180)
        ) {
          endGame();
          return;
        }
        
        // Score point when passing pipe
        if (pipe.x + 50 < 100 - 15 && !pipe.passed) {
          pipe.passed = true;
          setScore(prevScore => prevScore + 1);
          
          // Show question after 2 pipes instead of 3
          if ((score + 1) % 2 === 0 && currentQuestionIndex < questions.length) {
            setShowQuestion(true);
            setGameActive(false);
          } else if (currentQuestionIndex >= questions.length) {
            // All questions have been answered, show success message then navigate back
            cancelAnimationFrame(gameLoopRef.current);
            handleSuccessfulCompletion();
          }
        }
      });
      
      gameLoopRef.current = requestAnimationFrame(gameLoop);
    };
    
    gameLoopRef.current = requestAnimationFrame(gameLoop);
    
    return () => {
      cancelAnimationFrame(gameLoopRef.current);
    };
  }, [gameActive, birdPosition, birdVelocity, pipes, gravity, score, speed, currentQuestionIndex, questions.length]);
  
  // Flap on space key or click
  useEffect(() => {
    if (!gameActive) return;
    
    const handleFlap = () => {
      setBirdVelocity(-8);
    };
    
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.code === 'Space' || e.key === ' ') {
        handleFlap();
      }
    };
    
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [gameActive]);
  
  // End game
  const endGame = () => {
    setGameActive(false);
    setGameOver(true);
    cancelAnimationFrame(gameLoopRef.current);
    // Don't call onComplete when the game ends due to collision or wrong answer
    // This prevents marking the quiz as completed
  };
  
  // Handle completion with success
  const handleSuccessfulCompletion = () => {
    setGameActive(false);
    setShowSuccess(true);
    setTimeout(() => {
      onComplete(score); // Only mark as complete when all questions are answered correctly
      onBack();
    }, 3000); // Increased to 3 seconds for better visibility
  };
  
  // Answer question
  const handleAnswer = (answerIndex: number) => {
    setSelectedAnswer(answerIndex);
    
    // Check if answer is correct
    const currentQuestion = questions[currentQuestionIndex];
    const isCorrect = answerIndex === currentQuestion.correctAnswer;
    
    if (isCorrect) {
      // Move to next question
      const nextQuestionIndex = currentQuestionIndex + 1;
      setCurrentQuestionIndex(nextQuestionIndex);
      
      // Check if all questions have been answered
      if (nextQuestionIndex >= questions.length) {
        // All questions answered correctly, show success message then navigate back
        handleSuccessfulCompletion();
        return;
      }
      
      // Continue game with next question
      setShowQuestion(false);
      setSelectedAnswer(null);
      setGameActive(true);
    } else {
      // Wrong answer, end game
      endGame();
    }
  };
  
  // Render success screen
  if (showSuccess) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 animate-fade-in">
        <div className="text-center mb-6">
          <div className="text-6xl mb-6">🎉</div>
          <h2 className="text-3xl font-bold mb-4 text-green-600">Congratulations!</h2>
          <p className="text-xl mb-4">You've successfully answered all questions!</p>
          <p className="text-lg mb-6">Final Score: {score}</p>
        </div>
        
        <div className="bg-green-100 p-6 rounded-lg mb-6 animate-pulse border-2 border-green-300">
          <p className="text-green-800 font-semibold text-xl">
            Quiz Completed Successfully!
          </p>
          <p className="text-green-700 mt-2">
            You've mastered this module.
          </p>
        </div>
        
        <div className="mt-6 text-gray-600">
          <p>Returning to dashboard in a few seconds...</p>
        </div>
      </div>
    );
  }
  
  // Render game over screen
  if (gameOver) {
    const totalQuestions = questions.length;
    const answeredQuestions = currentQuestionIndex;
    const remainingQuestions = totalQuestions - answeredQuestions;
    
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 animate-fade-in">
        <h2 className="text-2xl font-bold mb-4 text-red-600">Game Over!</h2>
        <p className="text-xl mb-4">Your Score: {score}</p>
        
        <div className="mb-6">
          <div className="bg-amber-100 p-4 rounded-lg mb-4 border border-amber-300">
            <p className="text-amber-800 font-semibold">
              <span className="text-lg">⚠️</span> Quiz Not Completed
            </p>
            <p className="text-amber-700 mt-2">
              You answered {answeredQuestions} of {totalQuestions} questions.
              {remainingQuestions > 0 && ` ${remainingQuestions} questions remaining.`}
            </p>
          </div>
          
          <p className="text-gray-600 mt-4">
            To complete the quiz, you need to answer all questions correctly without hitting the pipes.
          </p>
        </div>
        
        <div className="flex gap-4 justify-center">
          <button
            onClick={startGame}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600"
          >
            Try Again
          </button>
          <button
            onClick={onBack}
            className="bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200"
          >
            Back to Dashboard
          </button>
        </div>
      </div>
    );
  }
  
  // Render question screen
  if (showQuestion && currentQuestionIndex < questions.length) {
    const currentQuestion = questions[currentQuestionIndex];
    
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg">
        <h2 className="text-xl font-semibold mb-2">Question {currentQuestionIndex + 1} of {questions.length}</h2>
        <div className="w-full bg-gray-200 h-2 rounded-full mb-6">
          <div 
            className="bg-blue-500 h-2 rounded-full"
            style={{ width: `${((currentQuestionIndex) / questions.length) * 100}%` }}
          ></div>
        </div>
        <p className="text-lg mb-6">{currentQuestion.question}</p>
        
        <div className="space-y-4">
          {currentQuestion.options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-4 text-left rounded-lg border ${
                selectedAnswer === index ? 'bg-blue-50 border-blue-500' : 'border-gray-200 hover:bg-gray-50'
              }`}
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
        
        <div className="mt-6 text-center text-gray-600">
          <p>Answer correctly to continue the game!</p>
        </div>
      </div>
    );
  }
  
  // Render start screen or game
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <h2 className="text-2xl font-bold mb-4">Flappy Bird Quiz</h2>
      
      {!gameActive && !gameOver ? (
        <div className="text-center">
          <p className="mb-6">Press spacebar or click on the screen to make the bird flap. Avoid the pipes!</p>
          <p className="mb-6">After passing through 2 pipes, you'll be asked a question. Answer correctly to continue.</p>
          <p className="mb-6">Wrong answers or hitting pipes will end the game without completing the quiz.</p>
          
          <button
            onClick={startGame}
            className="bg-blue-500 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-600"
          >
            Start Game
          </button>
        </div>
      ) : (
        <div className="flex flex-col items-center">
          <canvas 
            ref={canvasRef}
            width={800}
            height={500}
            onClick={() => setBirdVelocity(-8)}
            className="border border-gray-200 rounded-lg"
          />
        </div>
      )}
      
      <div className="mt-6 flex justify-center">
        <button
          onClick={onBack}
          className="bg-gray-100 text-gray-700 py-2 px-4 rounded-lg font-semibold hover:bg-gray-200"
        >
          Back to Dashboard
        </button>
      </div>
    </div>
  );
};

export default FlappyBirdQuiz; 