import React, { useState, useEffect } from 'react';
import { Trophy, Share2, ArrowLeft, Award, Star } from 'lucide-react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import confetti from 'confetti-js';

interface Question {
  question: string;
  options: string[];
  correctAnswer: number;
}

interface QuizProps {
  moduleTitle: string;
  quizNumber: number;
  onComplete: (score: number) => void;
  onBack: () => void;
}

const Quiz: React.FC<QuizProps> = ({ moduleTitle, quizNumber, onComplete, onBack }) => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showResults, setShowResults] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showCongratulations, setShowCongratulations] = useState(false);
  const [animateScore, setAnimateScore] = useState(false);

  useEffect(() => {
    if (showCongratulations) {
      const confettiSettings = {
        target: 'confetti-canvas',
        max: 150,
        size: 2,
        animate: true,
        props: ['circle', 'square', 'triangle', 'line'],
        colors: [[165, 104, 246], [230, 61, 135], [0, 199, 228], [253, 214, 126]],
        clock: 25,
        rotate: true,
        start_from_edge: true,
        respawn: true
      };
      const confettiInstance = new confetti.create('confetti-canvas', confettiSettings);
      confettiInstance.render();

      return () => confettiInstance.clear();
    }
  }, [showCongratulations]);

  const questions: Question[] = [
    {
      question: "Sample Question 1 for " + moduleTitle,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 0
    },
    {
      question: "Sample Question 2 for " + moduleTitle,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 1
    },
    {
      question: "Sample Question 3 for " + moduleTitle,
      options: ["Option 1", "Option 2", "Option 3", "Option 4"],
      correctAnswer: 2
    }
  ];

  const handleAnswer = (selectedOption: number) => {
    setSelectedAnswer(selectedOption);
    if (selectedOption === questions[currentQuestion].correctAnswer) {
      setAnimateScore(true);
      setTimeout(() => setAnimateScore(false), 1000);
    }
  };

  const handleNext = () => {
    if (selectedAnswer === questions[currentQuestion].correctAnswer) {
      setScore(score + 1);
    }

    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
      setSelectedAnswer(null);
    } else {
      setShowResults(true);
      if (score >= questions.length * 0.7) {
        setShowCongratulations(true);
      }
      onComplete(score);
    }
  };

  const shareUrl = window.location.href;
  const shareTitle = `I just completed ${moduleTitle} Quiz ${quizNumber} on Digital Buddy! 🎉`;

  if (showCongratulations) {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <canvas id="confetti-canvas" className="fixed inset-0 pointer-events-none"></canvas>
        <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4 relative z-10 transform transition-all duration-500 scale-100 animate-fade-in">
          <div className="relative">
            <Trophy className="w-24 h-24 text-yellow-500 mx-auto mb-6 animate-bounce" />
            <div className="absolute top-0 left-1/2 -translate-x-1/2">
              <Star className="w-8 h-8 text-yellow-400 animate-ping" />
            </div>
          </div>
          <h2 className="text-3xl font-bold text-center mb-4 animate-slide-up">
            Congratulations! 🎉
          </h2>
          <p className="text-xl text-center text-gray-700 mb-6 animate-fade-in">
            You've mastered the {moduleTitle} Quiz {quizNumber}!
          </p>
          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6 transform transition-all duration-500 hover:scale-105">
            <div className="flex items-center justify-center gap-2">
              <Award className="w-6 h-6 text-yellow-600 animate-pulse" />
              <p className="text-center text-yellow-800 font-semibold">
                Quiz Master Badge Earned!
              </p>
            </div>
          </div>
          <div className="flex justify-center gap-4 mb-6">
            <FacebookShareButton url={shareUrl} quote={shareTitle}>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:bg-blue-700">
                <Share2 className="w-4 h-4" /> Share
              </button>
            </FacebookShareButton>
            <TwitterShareButton url={shareUrl} title={shareTitle}>
              <button className="bg-sky-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:bg-sky-600">
                <Share2 className="w-4 h-4" /> Tweet
              </button>
            </TwitterShareButton>
            <LinkedinShareButton url={shareUrl} title={shareTitle}>
              <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-110 hover:bg-blue-800">
                <Share2 className="w-4 h-4" /> Post
              </button>
            </LinkedinShareButton>
          </div>
          <button
            onClick={onBack}
            className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 transform transition-all duration-300 hover:scale-105"
          >
            Continue Learning
          </button>
        </div>
      </div>
    );
  }

  if (showResults) {
    return (
      <div className="bg-white p-8 rounded-xl shadow-lg text-center transform transition-all duration-500 animate-fade-in">
        <Trophy className="w-16 h-16 text-yellow-500 mx-auto mb-4 animate-bounce" />
        <h2 className="text-2xl font-bold mb-4">Quiz Completed!</h2>
        <p className="text-xl mb-4">Your Score: {score}/{questions.length}</p>
        
        {score >= questions.length * 0.7 && (
          <div className="mb-6 animate-slide-up">
            <div className="bg-yellow-100 p-4 rounded-lg mb-4">
              <p className="text-yellow-800 font-semibold">
                🎉 Congratulations! You've earned a badge!
              </p>
            </div>
            <div className="flex justify-center gap-4 mt-4">
              <FacebookShareButton url={shareUrl} quote={shareTitle}>
                <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
                  <Share2 className="w-4 h-4" /> Share
                </button>
              </FacebookShareButton>
              <TwitterShareButton url={shareUrl} title={shareTitle}>
                <button className="bg-sky-500 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
                  <Share2 className="w-4 h-4" /> Tweet
                </button>
              </TwitterShareButton>
              <LinkedinShareButton url={shareUrl} title={shareTitle}>
                <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2 transform transition-all duration-300 hover:scale-110">
                  <Share2 className="w-4 h-4" /> Post
                </button>
              </LinkedinShareButton>
            </div>
          </div>
        )}
        
        <button
          onClick={onBack}
          className="w-full bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 flex items-center justify-center gap-2 mt-6 transform transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Back to Dashboard
        </button>
      </div>
    );
  }

  return (
    <div className="bg-white p-8 rounded-xl shadow-lg transform transition-all duration-500">
      <div className="mb-8">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-xl font-semibold">Question {currentQuestion + 1}/{questions.length}</h3>
          <span className={`text-gray-600 transform transition-all duration-300 ${animateScore ? 'scale-150 text-green-500' : ''}`}>
            Score: {score}
          </span>
        </div>
        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-blue-500 rounded-full transition-all duration-700 ease-in-out"
            style={{ width: `${((currentQuestion) / questions.length) * 100}%` }}
          ></div>
        </div>
      </div>

      <div className="mb-8">
        <h4 className="text-lg font-medium mb-4">{questions[currentQuestion].question}</h4>
        <div className="space-y-3">
          {questions[currentQuestion].options.map((option, index) => (
            <button
              key={index}
              className={`w-full p-4 text-left rounded-lg transition-all duration-300 transform ${
                selectedAnswer === index
                  ? 'bg-blue-100 border-blue-500 scale-105'
                  : 'bg-gray-50 hover:bg-gray-100 hover:scale-102'
              } border-2 ${
                selectedAnswer === index ? 'border-blue-500' : 'border-transparent'
              }`}
              onClick={() => handleAnswer(index)}
            >
              {option}
            </button>
          ))}
        </div>
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 flex items-center justify-center gap-2 transform transition-all duration-300 hover:scale-105"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          className={`flex-1 py-3 rounded-lg font-semibold transform transition-all duration-300 ${
            selectedAnswer !== null
              ? 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105'
              : 'bg-gray-200 text-gray-500 cursor-not-allowed'
          }`}
          onClick={handleNext}
          disabled={selectedAnswer === null}
        >
          {currentQuestion === questions.length - 1 ? 'Finish Quiz' : 'Next Question'}
        </button>
      </div>
    </div>
  );
};

export default Quiz;