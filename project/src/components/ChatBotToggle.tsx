import React from 'react';
import { MessageCircle } from 'lucide-react';

interface ChatBotToggleProps {
  isOpen: boolean;
  onToggle: () => void;
}

const ChatBotToggle: React.FC<ChatBotToggleProps> = ({ isOpen, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className={`fixed bottom-4 right-4 p-4 rounded-full shadow-lg transition-all duration-300 z-40 ${
        isOpen ? 'scale-0 opacity-0' : 'scale-100 opacity-100 bg-blue-600 text-white hover:bg-blue-700'
      }`}
    >
      <MessageCircle size={24} />
    </button>
  );
};

export default ChatBotToggle; 