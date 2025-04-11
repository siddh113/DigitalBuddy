import React, { useState } from 'react';
import { BookOpen, CheckCircle, Circle, Trophy, ArrowLeft, Award } from 'lucide-react';
import Quiz from './Quiz';
import LessonContent from './LessonContent';
import ModuleCompletion from './ModuleCompletion';

interface Module {
  title: string;
  lessons: string[];
}

interface Course {
  id: string;
  title: string;
  icon: React.ElementType;
  color: string;
  modules: Module[];
}

interface DashboardProps {
  courses: Course[];
}

const Dashboard: React.FC<DashboardProps> = ({ courses }) => {
  const [completedLessons, setCompletedLessons] = useState<string[]>([]);
  const [selectedLesson, setSelectedLesson] = useState<{
    courseId: string;
    moduleTitle: string;
    lesson: string;
  } | null>(null);
  const [showModuleCompletion, setShowModuleCompletion] = useState<string | null>(null);

  const isModuleCompleted = (courseId: string, moduleTitle: string) => {
    const course = courses.find(c => c.id === courseId);
    const module = course?.modules.find(m => m.title === moduleTitle);
    
    if (!module) return false;

    const moduleLessons = module.lessons.map(
      lesson => `${courseId}-${moduleTitle}-${lesson}`
    );
    
    return moduleLessons.every(lesson => completedLessons.includes(lesson));
  };

  // All lessons are now unlocked
  const isLessonUnlocked = () => true;

  const handleLessonComplete = () => {
    if (selectedLesson) {
      const lessonId = `${selectedLesson.courseId}-${selectedLesson.moduleTitle}-${selectedLesson.lesson}`;
      if (!completedLessons.includes(lessonId)) {
        setCompletedLessons(prev => [...prev, lessonId]);
      }

      // Check if module is completed
      if (isModuleCompleted(selectedLesson.courseId, selectedLesson.moduleTitle)) {
        setShowModuleCompletion(selectedLesson.moduleTitle);
      }

      setSelectedLesson(null);
    }
  };

  const handleQuizComplete = (score: number) => {
    if (selectedLesson && score >= 2) { // Pass threshold
      handleLessonComplete();
    }
  };

  const calculateProgress = (courseId: string) => {
    const courseLessons = courses
      .find(c => c.id === courseId)
      ?.modules.reduce((acc, module) => acc + module.lessons.length, 0) || 0;
    
    const completedCourseLessons = completedLessons.filter(lesson => 
      lesson.startsWith(courseId)
    ).length;

    return (completedCourseLessons / courseLessons) * 100;
  };

  const getLessonContent = (lesson: string) => {
    return `This is the content for ${lesson}. Here you'll learn all about this topic through interactive content, examples, and exercises.`;
  };

  if (selectedLesson) {
    const isQuiz = selectedLesson.lesson.toLowerCase().includes('quiz');
    
    return (
      <div className="min-h-screen bg-gray-50 p-6">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => setSelectedLesson(null)}
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800 mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Back to Dashboard
          </button>
          
          {isQuiz ? (
            <Quiz 
              moduleTitle={selectedLesson.moduleTitle}
              quizNumber={parseInt(selectedLesson.lesson.split(' ')[1])}
              onComplete={handleQuizComplete}
              onBack={() => setSelectedLesson(null)}
            />
          ) : (
            <LessonContent
              lesson={selectedLesson.lesson}
              content={getLessonContent(selectedLesson.lesson)}
              onComplete={handleLessonComplete}
              onBack={() => setSelectedLesson(null)}
            />
          )}
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">Digital Buddy</h1>
        <p className="text-xl text-gray-600 mb-8">Your personalized learning journey</p>
        
        <div className="grid gap-8">
          {courses.map(course => {
            const progress = calculateProgress(course.id);
            const Icon = course.icon;
            
            return (
              <div key={course.id} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-full ${course.color}`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <h2 className="text-2xl font-semibold text-gray-800">{course.title}</h2>
                </div>

                <div className="mb-6">
                  <div className="flex justify-between text-sm text-gray-600 mb-2">
                    <span>Progress</span>
                    <span>{Math.round(progress)}%</span>
                  </div>
                  <div className="w-full h-2 bg-gray-200 rounded-full">
                    <div 
                      className="h-full bg-green-500 rounded-full transition-all duration-300"
                      style={{ width: `${progress}%` }}
                    ></div>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {course.modules.map((module, moduleIndex) => {
                    const moduleCompleted = isModuleCompleted(course.id, module.title);
                    
                    return (
                      <div 
                        key={moduleIndex} 
                        className={`border rounded-lg p-4 ${
                          moduleCompleted ? 'bg-green-50' : ''
                        }`}
                      >
                        <div className="flex items-center justify-between mb-4">
                          <div className="flex items-center gap-2">
                            <h3 className="font-semibold text-lg text-gray-800">
                              {module.title}
                            </h3>
                            {moduleCompleted && (
                              <CheckCircle className="w-4 h-4 text-green-500" />
                            )}
                          </div>
                          {moduleCompleted && (
                            <div className="flex items-center gap-1 bg-yellow-100 px-2 py-1 rounded-full">
                              <Award className="w-4 h-4 text-yellow-600" />
                              <span className="text-xs font-medium text-yellow-800">Module Badge</span>
                            </div>
                          )}
                        </div>
                        <ul className="space-y-3">
                          {module.lessons.map((lesson, lessonIndex) => {
                            const lessonId = `${course.id}-${module.title}-${lesson}`;
                            const isCompleted = completedLessons.includes(lessonId);
                            const isQuiz = lesson.toLowerCase().includes('quiz');

                            return (
                              <li 
                                key={lessonIndex}
                                className="flex items-center gap-3 cursor-pointer hover:bg-gray-50 p-2 rounded-lg transition-colors duration-200"
                                onClick={() => setSelectedLesson({
                                  courseId: course.id,
                                  moduleTitle: module.title,
                                  lesson
                                })}
                              >
                                {isCompleted ? (
                                  <CheckCircle className="w-5 h-5 text-green-500" />
                                ) : (
                                  <Circle className="w-5 h-5 text-gray-300" />
                                )}
                                <span className={`text-sm ${isCompleted ? 'text-gray-400 line-through' : 'text-gray-700'}`}>
                                  {isQuiz ? (
                                    <div className="flex items-center gap-2">
                                      <Trophy className="w-4 h-4 text-yellow-500" />
                                      {lesson}
                                    </div>
                                  ) : (
                                    lesson
                                  )}
                                </span>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {showModuleCompletion && (
        <ModuleCompletion
          moduleTitle={showModuleCompletion}
          onClose={() => setShowModuleCompletion(null)}
        />
      )}
    </div>
  );
};

export default Dashboard;