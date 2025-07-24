import { MessageCircle, X } from "lucide-react";
import { useState } from "react";

const FloatingKakaoTalk = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleKakaoTalkClick = () => {
    window.open('https://open.kakao.com/o/sY3KDXig', '_blank');
  };

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-6 right-6 z-50 group">
      {/* Floating Banner */}
      <div className="relative bg-yellow-400 text-black rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105 cursor-pointer overflow-hidden">
        {/* Close Button */}
        <button
          onClick={handleClose}
          className="absolute top-1 right-1 w-5 h-5 bg-black/20 hover:bg-black/30 rounded-full flex items-center justify-center transition-colors z-10 md:opacity-0 group-hover:opacity-100"
          aria-label="배너 닫기"
        >
          <X className="w-3 h-3 text-white" />
        </button>

        {/* Banner Content */}
        <div 
          onClick={handleKakaoTalkClick}
          className="flex items-center space-x-3 p-4 pr-8"
        >
          {/* KakaoTalk Icon */}
          <div className="relative">
            <div className="w-12 h-12 bg-yellow-500 rounded-xl flex items-center justify-center shadow-lg">
              <MessageCircle className="w-7 h-7 text-black fill-current" />
            </div>
            {/* Notification Dot */}
            <div className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full flex items-center justify-center">
              <span className="text-xs text-white font-bold">!</span>
            </div>
          </div>

          {/* Text Content */}
          <div className="flex flex-col">
            <div className="font-bold text-sm leading-tight">
              💬 카카오톡 상담
            </div>
            <div className="text-xs opacity-80 leading-tight">
              신용카드현금화 무료상담
            </div>
            <div className="text-xs font-semibold text-black/70">
              👆 클릭하세요!
            </div>
          </div>
        </div>

        {/* Animated Background Effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-yellow-300/50 to-yellow-500/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        
        {/* Pulse Animation */}
        <div className="absolute inset-0 bg-yellow-400 rounded-2xl animate-pulse opacity-30 pointer-events-none" />
      </div>

      {/* Mobile Optimized Version */}
      <style jsx>{`
        @media (max-width: 768px) {
          .floating-banner {
            bottom: 20px;
            right: 16px;
            max-width: calc(100vw - 32px);
          }
        }
      `}</style>
    </div>
  );
};

export default FloatingKakaoTalk;