
import React, { memo } from 'react';

const MapEmbed: React.FC = memo(() => {
  const targetLink = "https://www.google.com/maps/d/u/1/embed?mid=11AMDOLBbJnHchlVOATCDWqTQ6vevFoU&ehbc=2E312F";

  return (
    <div className="relative group">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1.5 bg-blue-700 rounded-full"></div>
        <h3 className="text-lg font-black text-gray-900 dark:text-slate-100 uppercase tracking-tight">ভোট কেন্দ্র মানচিত্র</h3>
      </div>

      <a 
        href={targetLink}
        target="_blank" 
        rel="noreferrer"
        className="relative block w-full h-[400px] md:h-[500px] bg-slate-100 dark:bg-slate-900 rounded-[32px] overflow-hidden border-2 border-dashed border-blue-200 dark:border-slate-800 hover:border-blue-500 transition-all group/card shadow-2xl shadow-blue-900/5"
      >
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-10 dark:opacity-20 pointer-events-none" 
             style={{ backgroundImage: 'radial-gradient(#1e40af 1px, transparent 1px)', backgroundSize: '20px 20px' }}>
        </div>

        {/* Central UI Elements */}
        <div className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center">
          <div className="relative mb-6">
            {/* Animated Pulses */}
            <div className="absolute inset-0 bg-blue-500/20 rounded-full animate-ping"></div>
            <div className="absolute inset-0 bg-blue-500/10 rounded-full animate-pulse scale-150"></div>
            
            {/* Map Icon Container */}
            <div className="relative bg-white dark:bg-slate-800 w-24 h-24 rounded-3xl shadow-2xl flex items-center justify-center border-2 border-blue-50 dark:border-slate-700 group-hover/card:scale-110 transition-transform duration-500">
              <svg className="w-12 h-12 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
              </svg>
            </div>
          </div>

          <h4 className="text-xl md:text-2xl font-black text-gray-900 dark:text-white mb-2 leading-tight">
            নাচোল থানা ভোট কেন্দ্র মানচিত্র
          </h4>
          <p className="text-sm md:text-base text-gray-600 dark:text-slate-400 font-bold max-w-sm mb-8">
            গুগল ম্যাপসে বিস্তারিত কেন্দ্র দেখতে নিচের বাটনে ক্লিক করুন
          </p>

          <div className="inline-flex items-center gap-3 bg-blue-700 text-white px-8 py-4 rounded-2xl text-lg font-black shadow-xl shadow-blue-700/20 group-hover/card:bg-blue-800 transition-all active:scale-95">
            <span> ম্যাপটি খুলুন</span>
            <svg className="w-6 h-6 animate-bounce-x" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M14 5l7 7m0 0l-7 7m7-7H3"></path>
            </svg>
          </div>
        </div>

        {/* Footer info inside the card */}
        <div className="absolute bottom-6 left-0 right-0 px-6 flex justify-between items-center opacity-60">
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 dark:text-blue-400">Interactive Map Preview</span>
            <span className="text-[10px] font-black uppercase tracking-widest text-blue-900 dark:text-blue-400">Google My Maps</span>
        </div>
      </a>

      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50% { transform: translateX(5px); }
        }
        .animate-bounce-x {
          animation: bounce-x 1s infinite;
        }
      `}</style>
    </div>
  );
});

export default MapEmbed;
