import React, { useEffect } from 'react';
import { Trophy, Share2 } from 'lucide-react';
import { FacebookShareButton, TwitterShareButton, LinkedinShareButton } from 'react-share';
import confetti from 'confetti-js';

interface ModuleCompletionProps {
  moduleTitle: string;
  onClose: () => void;
}

const ModuleCompletion: React.FC<ModuleCompletionProps> = ({ moduleTitle, onClose }) => {
  useEffect(() => {
    const confettiSettings = { target: 'confetti-canvas', max: 150 };
    const confettiInstance = new confetti.create('confetti-canvas', confettiSettings);
    confettiInstance.render();

    return () => confettiInstance.clear();
  }, []);

  const shareUrl = window.location.href;
  const shareTitle = `I just completed the ${moduleTitle} module on Digital Buddy! 🎓`;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <canvas id="confetti-canvas" className="fixed inset-0 pointer-events-none"></canvas>
      
      <div className="bg-white p-8 rounded-xl shadow-2xl max-w-lg w-full mx-4 relative z-10">
        <Trophy className="w-20 h-20 text-yellow-500 mx-auto mb-6" />
        
        <h2 className="text-3xl font-bold text-center mb-4">
          Congratulations! 🎉
        </h2>
        
        <p className="text-xl text-center text-gray-700 mb-6">
          You've completed the {moduleTitle} module!
        </p>

        <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg mb-6">
          <p className="text-center text-yellow-800">
            You've earned the {moduleTitle} Master Badge!
          </p>
        </div>

        <div className="flex justify-center gap-4 mb-6">
          <FacebookShareButton url={shareUrl} quote={shareTitle}>
            <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Facebook
            </button>
          </FacebookShareButton>
          
          <TwitterShareButton url={shareUrl} title={shareTitle}>
            <button className="bg-sky-500 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Share2 className="w-4 h-4" /> Twitter
            </button>
          </TwitterShareButton>
          
          <LinkedinShareButton url={shareUrl} title={shareTitle}>
            <button className="bg-blue-700 text-white px-4 py-2 rounded-lg flex items-center gap-2">
              <Share2 className="w-4 h-4" /> LinkedIn
            </button>
          </LinkedinShareButton>
        </div>

        <button
          onClick={onClose}
          className="w-full bg-green-500 text-white py-3 rounded-lg font-semibold hover:bg-green-600"
        >
          Continue Learning
        </button>
      </div>
    </div>
  );
};

export default ModuleCompletion;