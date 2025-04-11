import React from 'react';
import { BookOpen, CheckCircle, ArrowLeft } from 'lucide-react';

interface LessonContentProps {
  lesson: string;
  content: string;
  onComplete: () => void;
  onBack: () => void;
}

const LessonContent: React.FC<LessonContentProps> = ({ lesson, content, onComplete, onBack }) => {
  return (
    <div className="bg-white p-8 rounded-xl shadow-lg">
      <div className="flex items-center gap-3 mb-6">
        <BookOpen className="w-6 h-6 text-blue-500" />
        <h2 className="text-2xl font-semibold">{lesson}</h2>
      </div>

      <div className="prose max-w-none mb-8">
        <div 
          className="bg-gray-50 p-6 rounded-lg mb-6"
          dangerouslySetInnerHTML={{ __html: content }}
        />
      </div>

      <div className="flex gap-4">
        <button
          onClick={onBack}
          className="flex-1 bg-gray-100 text-gray-700 py-3 rounded-lg font-semibold hover:bg-gray-200 flex items-center justify-center gap-2"
        >
          <ArrowLeft className="w-5 h-5" />
          Back
        </button>
        <button
          onClick={onComplete}
          className="flex-1 bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600 flex items-center justify-center gap-2"
        >
          <CheckCircle className="w-5 h-5" />
          Mark as Complete
        </button>
      </div>
    </div>
  );
};

export default LessonContent