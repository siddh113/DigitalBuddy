import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, Send, X, Minimize2, Maximize2, HelpCircle, Trash2, ArrowLeft } from 'lucide-react';

interface ChatBotProps {
  isOpen: boolean;
  onToggle: () => void;
}

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

const ChatBot: React.FC<ChatBotProps> = ({ isOpen, onToggle }) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: 'Hi there! I\'m your Digital Buddy Assistant. How can I help you with digital literacy or questions about this learning platform?',
      sender: 'bot',
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState('');
  const [isMinimized, setIsMinimized] = useState(false);
  const [showSuggestions, setShowSuggestions] = useState(true);
  const [showClearConfirm, setShowClearConfirm] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const suggestedQuestions = [
    "What can you help me with?",
    "Tell me about digital literacy",
    "How do I stay safe online?",
    "What courses are available?",
    "How do I spot fake news?",
    "Tips for online shopping",
    "What is a digital footprint?",
    "Help with video conferences",
  ];

  // Auto-scroll to bottom of messages
  useEffect(() => {
    if (messagesEndRef.current && isOpen && !isMinimized) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen, isMinimized]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const generateBotResponse = (query: string): string => {
    // Simple response logic - in a real app, you would connect to an AI API
    query = query.toLowerCase();
    
    if (query.includes('hello') || query.includes('hi')) {
      return 'Hello! How can I help you today?';
    } else if (query.includes('microsoft') || query.includes('office') || query.includes('word') || query.includes('excel') || query.includes('powerpoint')) {
      return 'Our Microsoft Office module covers Word, Excel, and PowerPoint basics. You can learn document creation, spreadsheet formulas, and presentation design.';
    } else if (query.includes('ai') || query.includes('artificial intelligence')) {
      return 'Our AI Tools module helps you understand AI concepts and teaches you effective prompt engineering techniques.';
    } else if (query.includes('email') || query.includes('meeting')) {
      return 'The Email & Meetings module covers professional email writing, organization, and virtual meeting etiquette.';
    } else if (query.includes('quiz') || query.includes('game')) {
      return 'Our platform includes interactive quizzes to test your knowledge. You can even try the Flappy Bird game mode by toggling the Game Quiz Mode option!';
    } else if (query.includes('learn') || query.includes('course')) {
      return 'We offer courses on Microsoft Office, AI Tools, and Email & Meetings. Each course has multiple modules with lessons and quizzes.';
    } else if (query.includes('digital literacy')) {
      return 'Digital literacy refers to the skills needed to navigate digital tools effectively. Our courses cover software use, AI understanding, and communication tools to help improve your digital literacy.';
    } else if (query.includes('how to')) {
      return 'To learn a specific skill, select a course from the dashboard, then choose a module and lesson that addresses your needs. Complete lessons and quizzes to track your progress!';
    } else if (query.includes('password') || query.includes('secure') || query.includes('security')) {
      return 'For online security: use strong, unique passwords; enable two-factor authentication; avoid suspicious links; and keep your software updated. Our platform can help you learn more about digital security practices.';
    } else if (query.includes('online shopping') || query.includes('e-commerce') || query.includes('buy online')) {
      return 'When shopping online: only use secure websites (look for https), research the seller, use credit cards for purchases, keep receipts, and be wary of deals that seem too good to be true.';
    } else if (query.includes('download') || query.includes('installing') || query.includes('software')) {
      return 'When downloading software: only use official sources, check reviews, be careful with free programs that may contain malware, and always scan downloads with antivirus software before installing.';
    } else if (query.includes('wifi') || query.includes('wireless') || query.includes('network')) {
      return 'For WiFi security: use strong passwords, enable encryption (WPA3 if available), rename your network to not reveal personal info, and consider using a VPN when on public networks.';
    } else if (query.includes('smartphone') || query.includes('mobile') || query.includes('phone') || query.includes('app')) {
      return 'For smartphone safety: review app permissions, only download from official app stores, keep your device updated, use screen locks, and be careful about what information your apps can access.';
    } else if (query.includes('cloud') || query.includes('backup') || query.includes('storage')) {
      return 'Cloud storage helps keep your files accessible and backed up. It\'s good practice to use cloud services for important documents, but be mindful of what sensitive information you store and use strong passwords.';
    } else if (query.includes('phishing') || query.includes('scam') || query.includes('fraud')) {
      return 'Phishing attempts try to steal your information through fake emails or websites. Always verify the sender, don\'t click suspicious links, check website URLs carefully, and never share sensitive information through unsolicited requests.';
    } else if (query.includes('computer') || query.includes('basic') || query.includes('beginner')) {
      return 'For computer basics, we recommend starting with our Microsoft Office module. It covers fundamental skills like document creation, data management, and presentation design that are essential for beginners.';
    } else if (query.includes('internet') || query.includes('web') || query.includes('browse') || query.includes('browsing')) {
      return 'Internet navigation includes using browsers, search engines, and understanding web addresses. Our platform can help you learn safe browsing practices and how to find reliable information online.';
    } else if (query.includes('privacy') || query.includes('data')) {
      return 'To protect your privacy online: review app permissions, use private browsing when needed, adjust social media privacy settings, and be mindful of what personal information you share online.';
    } else if (query.includes('social media') || query.includes('facebook') || query.includes('instagram') || query.includes('twitter')) {
      return 'Social media literacy includes understanding privacy settings, recognizing misinformation, and managing your digital footprint. Always think before posting and be respectful in online interactions.';
    } else if (query.includes('file') || query.includes('folder') || query.includes('save') || query.includes('organize')) {
      return 'File organization is essential for digital efficiency. Create a logical folder structure, use descriptive file names, regularly back up important files, and consider cloud storage for accessibility across devices.';
    } else if (query.includes('help') || query.includes('assistance') || query.includes('support')) {
      return 'I\'m here to help with digital literacy questions! You can ask about our courses, computer basics, online safety, or specific software. What would you like to learn about?';
    } else if (query.includes('what can you do') || query.includes('capabilities')) {
      return 'I can answer questions about digital literacy, our learning platform, Microsoft Office tools, email and meetings, AI concepts, online safety, computer basics, and more. How can I assist you today?';
    } else if (query.includes('fake news') || query.includes('misinformation') || query.includes('fact check')) {
      return 'To identify misinformation: check multiple sources, look for author credentials, verify with fact-checking websites, be skeptical of emotional claims, and check publication dates. Digital literacy includes developing critical thinking skills for online content.';
    } else if (query.includes('digital footprint') || query.includes('online presence') || query.includes('reputation')) {
      return 'Your digital footprint is everything you leave online - social media, comments, accounts, and more. Regularly review privacy settings, search yourself online, be mindful of what you post, and consider how your digital presence might affect future opportunities.';
    } else if (query.includes('screen time') || query.includes('digital wellbeing') || query.includes('addiction')) {
      return 'For healthy digital habits: set screen time limits, take regular breaks, use night mode in evenings, keep devices out of bedrooms, and find non-digital activities you enjoy. Balance is key to digital wellbeing.';
    } else if (query.includes('cyberbullying') || query.includes('harassment') || query.includes('trolls')) {
      return 'If experiencing online harassment: don\'t respond to provocations, save evidence, use platform reporting tools, block problematic accounts, and reach out for support. Everyone deserves respectful online interactions.';
    } else if (query.includes('video conference') || query.includes('zoom') || query.includes('teams') || query.includes('virtual meeting')) {
      return 'For effective video meetings: test your setup beforehand, use appropriate lighting, mute when not speaking, be on time, dress appropriately, minimize distractions, and use chat features for questions. Our Email & Meetings module covers these skills in detail.';
    } else if (query.includes('keyboard shortcuts') || query.includes('productivity tips')) {
      return 'Keyboard shortcuts can save time and boost productivity. Some essential ones include Ctrl+C (copy), Ctrl+V (paste), Ctrl+Z (undo), Ctrl+F (find), and Alt+Tab (switch applications). Our courses cover more productivity tips for different software.';
    } else {
      return 'I\'m not sure about that. Could you try rephrasing your question about digital literacy or our learning platform?';
    }
  };

  const handleSendMessage = (text = inputValue) => {
    if (text.trim() === '') return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text,
      sender: 'user',
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    setInputValue('');
    setShowSuggestions(false);

    // Simulate bot response
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        text: generateBotResponse(userMessage.text),
        sender: 'bot',
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botResponse]);
      
      // Show suggestions again after bot responds
      if (messages.length < 5) {
        setShowSuggestions(true);
      }
    }, 600);
  };

  const handleSuggestedQuestion = (question: string) => {
    handleSendMessage(question);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized);
  };

  const clearChat = () => {
    setShowClearConfirm(true);
  };

  const confirmClearChat = () => {
    // Reset to just the initial welcome message
    setMessages([
      {
        id: Date.now().toString(),
        text: 'Hi there! I\'m your Digital Buddy Assistant. How can I help you with digital literacy or questions about this learning platform?',
        sender: 'bot',
        timestamp: new Date(),
      }
    ]);
    // Show suggestions again
    setShowSuggestions(true);
    // Hide confirmation dialog
    setShowClearConfirm(false);
  };

  const cancelClearChat = () => {
    setShowClearConfirm(false);
  };

  // Navigate back to courses page
  const navigateToCourses = () => {
    // This will reset the selected lesson state in the Dashboard component
    if (window.confirm('Navigate back to the courses dashboard?')) {
      // Use window.history to go back
      window.location.href = '/'; // This will take user back to the root page with courses
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className={`fixed bottom-4 right-4 bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 z-50 ${
        isMinimized ? 'w-64 h-12' : 'w-96 h-[500px]'
      }`}
    >
      {/* Chat Header */}
      <div className="bg-blue-600 text-white p-3 flex justify-between items-center">
        <div className="flex items-center gap-2">
          <MessageCircle size={20} />
          <h3 className="font-medium">Digital Buddy Assistant</h3>
        </div>
        <div className="flex items-center gap-2">
          <button 
            onClick={navigateToCourses} 
            className="text-white hover:text-blue-200 transition-colors" 
            title="Back to Courses"
          >
            <ArrowLeft size={18} />
          </button>
          <button 
            onClick={clearChat} 
            className="text-white hover:text-blue-200 transition-colors" 
            title="Clear chat"
          >
            <Trash2 size={18} />
          </button>
          <button onClick={toggleMinimize} className="text-white hover:text-blue-200 transition-colors">
            {isMinimized ? <Maximize2 size={18} /> : <Minimize2 size={18} />}
          </button>
          <button onClick={onToggle} className="text-white hover:text-blue-200 transition-colors">
            <X size={18} />
          </button>
        </div>
      </div>

      {/* Chat Messages */}
      {!isMinimized && (
        <div className="flex flex-col h-[calc(100%-48px)]">
          <div className="flex-1 p-4 overflow-y-auto">
            {messages.map(message => (
              <div
                key={message.id}
                className={`mb-4 ${
                  message.sender === 'user' ? 'ml-auto' : 'mr-auto'
                }`}
              >
                <div
                  className={`max-w-[80%] p-3 rounded-lg ${
                    message.sender === 'user'
                      ? 'bg-blue-500 text-white rounded-br-none ml-auto'
                      : 'bg-gray-100 text-gray-800 rounded-bl-none'
                  }`}
                >
                  {message.text}
                </div>
                <div
                  className={`text-xs mt-1 text-gray-500 ${
                    message.sender === 'user' ? 'text-right' : 'text-left'
                  }`}
                >
                  {message.timestamp.toLocaleTimeString([], { 
                    hour: '2-digit', 
                    minute: '2-digit' 
                  })}
                </div>
              </div>
            ))}
            
            {/* Clear Chat Confirmation */}
            {showClearConfirm && (
              <div className="bg-white border border-gray-200 shadow-md rounded-lg p-4 mb-4">
                <p className="text-sm text-gray-700 mb-3">Are you sure you want to clear the chat history?</p>
                <div className="flex justify-end gap-2">
                  <button 
                    onClick={cancelClearChat}
                    className="px-3 py-1 text-sm text-gray-600 bg-gray-100 hover:bg-gray-200 rounded"
                  >
                    Cancel
                  </button>
                  <button 
                    onClick={confirmClearChat}
                    className="px-3 py-1 text-sm text-white bg-red-500 hover:bg-red-600 rounded"
                  >
                    Clear
                  </button>
                </div>
              </div>
            )}
            
            {/* Suggested Questions */}
            {showSuggestions && messages.length < 6 && (
              <div className="mt-4 mb-2">
                <p className="text-xs text-gray-500 mb-2 flex items-center gap-1">
                  <HelpCircle size={12} />
                  Suggested questions:
                </p>
                <div className="flex flex-wrap gap-2">
                  {suggestedQuestions.map((question, index) => (
                    <button
                      key={index}
                      onClick={() => handleSuggestedQuestion(question)}
                      className="text-xs bg-blue-50 text-blue-600 px-3 py-2 rounded-full hover:bg-blue-100 transition-colors"
                    >
                      {question}
                    </button>
                  ))}
                </div>
              </div>
            )}
            
            <div ref={messagesEndRef} />
          </div>

          {/* Back to Courses Button */}
          <div className="px-4 py-2 border-t">
            <button
              onClick={navigateToCourses}
              className="w-full bg-gray-100 text-gray-700 py-2 rounded-lg font-medium hover:bg-gray-200 flex items-center justify-center gap-2 transition-colors"
            >
              <ArrowLeft size={16} />
              Back to Courses Dashboard
            </button>
          </div>

          {/* Chat Input */}
          <div className="p-4 border-t">
            <div className="flex items-center gap-2">
              <input
                type="text"
                placeholder="Ask me about digital literacy..."
                value={inputValue}
                onChange={handleInputChange}
                onKeyPress={handleKeyPress}
                className="flex-1 border border-gray-300 rounded-lg py-2 px-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <button
                onClick={() => handleSendMessage()}
                disabled={inputValue.trim() === ''}
                className={`p-2 rounded-lg ${
                  inputValue.trim() === ''
                    ? 'bg-gray-200 text-gray-400'
                    : 'bg-blue-500 text-white hover:bg-blue-600'
                }`}
              >
                <Send size={20} />
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatBot; 