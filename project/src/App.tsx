import React, { useState } from 'react';
import { Monitor, Brain, Mail, ArrowRight, Check, BookOpen, Trophy } from 'lucide-react';
import Dashboard from './components/Dashboard';

function App() {
  const [selectedPaths, setSelectedPaths] = useState<string[]>([]);
  const [showDashboard, setShowDashboard] = useState(false);

  const learningPaths = [
    {
      id: 'microsoft',
      title: 'Microsoft Office Kit',
      description: 'Learn Word, Excel, and PowerPoint for your daily tasks',
      icon: Monitor,
      color: 'bg-blue-500 hover:bg-blue-600',
      image: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?auto=format&fit=crop&q=80&w=800',
      modules: [
        {
          title: 'Microsoft Word Basics',
          lessons: [
            'Introduction to Word Interface',
            'Basic Text Formatting',
            'Working with Documents',
            'Quiz 1',
            'Inserting Images and Tables',
            'Page Layout and Margins',
            'Working with Templates',
            'Quiz 2',
          ]
        },
        {
          title: 'Excel Fundamentals',
          lessons: [
            'Getting Started with Excel',
            'Basic Formulas',
            'Cell Formatting',
            'Quiz 1',
            'Working with Data',
            'Charts and Graphs',
            'Basic Functions',
            'Quiz 2',
          ]
        },
        {
          title: 'PowerPoint Essentials',
          lessons: [
            'Creating Your First Presentation',
            'Slide Design Basics',
            'Adding Content',
            'Quiz 1',
            'Animations and Transitions',
            'Presenting Tips',
            'Advanced Features',
            'Quiz 2',
          ]
        }
      ]
    },
    {
      id: 'ai',
      title: 'AI Tools',
      description: 'Master prompt engineering and AI basics',
      icon: Brain,
      color: 'bg-purple-500 hover:bg-purple-600',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800',
      modules: [
        {
          title: 'Introduction to AI',
          lessons: [
            'What is Artificial Intelligence',
            'Types of AI Tools',
            'Basic AI Concepts',
            'Quiz 1',
            'AI Safety and Ethics',
            'Popular AI Platforms',
            'AI in Daily Life',
            'Quiz 2',
          ]
        },
        {
          title: 'Prompt Engineering',
          lessons: [
            'Understanding Prompts',
            'Writing Effective Prompts',
            'Context and Details',
            'Quiz 1',
            'Advanced Prompt Techniques',
            'Common Mistakes',
            'Best Practices',
            'Quiz 2',
          ]
        }
      ]
    },
    {
      id: 'mail',
      title: 'Email & Meetings',
      description: 'Handle emails and video calls like a pro',
      icon: Mail,
      color: 'bg-green-500 hover:bg-green-600',
      image: 'https://images.unsplash.com/photo-1557200134-90327ee9fafa?auto=format&fit=crop&q=80&w=800',
      modules: [
        {
          title: 'Email Management',
          lessons: [
            'Email Basics',
            'Writing Professional Emails',
            'Email Organization',
            'Quiz 1',
            'Managing Inbox',
            'Email Security',
            'Email Etiquette',
            'Quiz 2',
          ]
        },
        {
          title: 'Virtual Meetings',
          lessons: [
            'Getting Started with Google Meet',
            'Meeting Controls',
            'Screen Sharing',
            'Quiz 1',
            'Virtual Meeting Etiquette',
            'Scheduling Meetings',
            'Advanced Features',
            'Quiz 2',
          ]
        }
      ]
    },
  ];

  const togglePath = (pathId: string) => {
    setSelectedPaths(prev => 
      prev.includes(pathId)
        ? prev.filter(id => id !== pathId)
        : [...prev, pathId]
    );
  };

  const handleBeginJourney = () => {
    if (selectedPaths.length > 0) {
      setShowDashboard(true);
    }
  };

  if (showDashboard) {
    const selectedCourses = learningPaths.filter(path => selectedPaths.includes(path.id));
    return <Dashboard courses={selectedCourses} />;
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-purple-50 py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-4">
          What would you like to learn today?
        </h1>
        <p className="text-xl text-center text-gray-600 mb-4">
          Choose your learning adventures! Select one or more options to get started.
        </p>
        <p className="text-lg text-center text-blue-600 mb-12">
          {selectedPaths.length === 0 ? (
            "Click on any course to select it"
          ) : (
            `${selectedPaths.length} course${selectedPaths.length > 1 ? 's' : ''} selected`
          )}
        </p>

        <div className="grid md:grid-cols-3 gap-8">
          {learningPaths.map((path) => (
            <div
              key={path.id}
              className={`relative rounded-2xl overflow-hidden transition-all duration-300 transform hover:scale-105 cursor-pointer ${
                selectedPaths.includes(path.id) ? 'ring-4 ring-blue-400' : ''
              }`}
              onClick={() => togglePath(path.id)}
            >
              <div className="absolute inset-0">
                <img
                  src={path.image}
                  alt={path.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              </div>

              <div className="relative p-6 h-full flex flex-col min-h-[320px]">
                <div className={`p-3 rounded-full ${path.color} w-fit`}>
                  <path.icon className="w-8 h-8 text-white" />
                </div>

                <h2 className="text-2xl font-bold text-white mt-4 mb-2">
                  {path.title}
                </h2>
                <p className="text-gray-200 mb-6">{path.description}</p>

                <div className="mt-auto flex items-center">
                  <button
                    className={`${path.color} text-white px-6 py-3 rounded-lg flex items-center gap-2 transition-all duration-300`}
                  >
                    {selectedPaths.includes(path.id) ? (
                      <>
                        Selected <Check className="w-5 h-5" />
                      </>
                    ) : (
                      <>
                        Select Course <BookOpen className="w-5 h-5" />
                      </>
                    )}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {selectedPaths.length > 0 && (
          <div className="mt-12 text-center">
            <button 
              onClick={handleBeginJourney}
              className="bg-gradient-to-r from-blue-500 to-purple-500 text-white px-8 py-4 rounded-lg text-xl font-semibold hover:from-blue-600 hover:to-purple-600 transition-all duration-300 flex items-center gap-2 mx-auto"
            >
              Begin Your Journey <ArrowRight className="w-6 h-6" />
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default App;