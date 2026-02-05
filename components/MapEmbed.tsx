
import React, { memo } from 'react';

const MapEmbed: React.FC = memo(() => {
  const targetLink = "https://www.google.com/maps/d/u/1/embed?mid=11AMDOLBbJnHchlVOATCDWqTQ6vevFoU&ehbc=2E312F";

  return (
    <div className="relative group">
      <a 
        href={targetLink}
        target="_blank" 
        rel="noreferrer"
        className="block bg-white dark:bg-slate-900 rounded-3xl shadow-xl border-2 border-gray-200 dark:border-slate-800 overflow-hidden hover:border-blue-600 dark:hover:border-blue-500 transition-all cursor-pointer relative"
      >
        {/* Absolute High-Priority Click Overlay */}
        <div className="absolute inset-0 z-50 bg-transparent group-hover:bg-blue-600/5 transition-colors cursor-pointer"></div>
        
        <div className="relative w-full h-[500px] md:h-[600px]">
          {/* Iframe with pointer-events disabled to let the link capture clicks */}
          <iframe 
            src="https://www.google.com/maps/d/embed?mid=11AMDOLBbJnHchlVOATCDWqTQ6vevFoU&ehbc=2E312F" 
            width="100%" 
            height="100%"
            style={{ border: 0, pointerEvents: 'none' }}
            title="নাচোল ভোট কেন্দ্র মানচিত্র"
            className="z-10"
          ></iframe>
          
          {/* Floating Tooltip Indicator */}
          <div className="absolute top-6 right-6 z-[60] bg-blue-700 text-white px-4 py-2 rounded-2xl text-xs font-black shadow-2xl opacity-0 group-hover:opacity-100 transition-all transform translate-y-2 group-hover:translate-y-0 flex items-center gap-2">
            <span>সম্পূর্ণ ম্যাপ দেখুন</span>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
            </svg>
          </div>
        </div>

        <div className="p-5 bg-gray-50 dark:bg-slate-800/50 border-t-2 border-gray-100 dark:border-slate-800 flex flex-col sm:flex-row justify-between items-center gap-4 relative z-30">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center text-blue-700 dark:text-blue-400">
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"></path>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"></path>
              </svg>
            </div>
            <p className="text-xs md:text-sm text-gray-600 dark:text-slate-300 font-black leading-tight">
                মানচিত্রের যে কোন জায়গায় ক্লিক করে <br/>
                <span className="text-blue-700 dark:text-blue-400">গুগল ম্যাপসে বিস্তারিত তথ্য দেখুন</span>
            </p>
          </div>
          
          <div className="bg-blue-700 dark:bg-blue-600 text-white px-8 py-3 rounded-2xl text-sm font-black group-hover:bg-blue-800 transition-all shadow-lg shadow-blue-700/20 active:scale-95">
            বড় মানচিত্রে দেখুন
          </div>
        </div>
      </a>
    </div>
  );
});

export default MapEmbed;
