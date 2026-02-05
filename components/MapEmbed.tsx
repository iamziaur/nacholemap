
import React, { memo } from 'react';

const MapEmbed: React.FC = memo(() => {
  return (
    <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-sm border border-gray-200 dark:border-slate-800 overflow-hidden">
      <div className="relative w-full h-[500px] md:h-[600px]">
        <iframe 
          src="https://www.google.com/maps/d/u/1/embed?mid=11AMDOLBbJnHchlVOATCDWqTQ6vevFoU&ehbc=2E312F" 
          width="100%" 
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          title="নাচোল ভোট কেন্দ্র মানচিত্র"
        ></iframe>
      </div>

      <div className="p-4 bg-gray-50 dark:bg-slate-800 flex flex-col sm:flex-row justify-between items-center gap-3">
        <p className="text-[11px] text-gray-500 dark:text-slate-400 flex items-center gap-2">
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full"></span>
            তথ্যসূত্র: <span className="font-bold">বাংলাদেশ নির্বাচন কমিশন</span>
        </p>
        <a 
          href="https://www.google.com/maps/d/u/1/viewer?mid=11AMDOLBbJnHchlVOATCDWqTQ6vevFoU" 
          target="_blank" 
          rel="noreferrer"
          className="bg-blue-700 dark:bg-blue-600 text-white px-5 py-2 rounded-xl text-xs font-bold hover:bg-blue-800 transition-all shadow-sm"
        >
          বড় মানচিত্রে দেখুন
        </a>
      </div>
    </div>
  );
});

export default MapEmbed;
