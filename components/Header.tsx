
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [isDark, setIsDark] = useState(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme');
      return savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches);
    }
    return false;
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (isDark) {
      root.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      root.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [isDark]);

  return (
    <header className="bg-white dark:bg-slate-900 border-b-2 border-green-600 shadow-sm transition-all duration-300 relative">
      {/* Top Banner */}
      <div className="bg-green-600 text-white py-1.5 text-center text-[10px] font-bold tracking-widest uppercase">
        গণপ্রজাতন্ত্রী বাংলাদেশ সরকার
      </div>
      
      <div className="container mx-auto px-4 py-6 md:py-8 flex flex-col items-center relative">
        
        {/* Theme Toggle - Positioned better for mobile */}
        <div className="w-full flex justify-end mb-2 md:absolute md:right-4 md:top-8">
          <button 
            onClick={() => setIsDark(!isDark)}
            className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-yellow-400 hover:bg-slate-200 dark:hover:bg-slate-700 transition-all duration-300 shadow-sm border border-slate-200 dark:border-slate-700 z-50"
            aria-label="Toggle Theme"
          >
            {isDark ? (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" />
                </svg>
                <span className="text-xs font-bold">লাইট</span>
              </>
            ) : (
              <>
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
                </svg>
                <span className="text-xs font-bold text-slate-600">নাইট</span>
              </>
            )}
          </button>
        </div>

        {/* Main Title Content */}
        <h1 className="text-xl md:text-3xl font-bold text-green-900 dark:text-green-500 mb-2 text-center transition-colors">
          ত্রয়োদশ জাতীয় সংসদ নির্বাচন ২০২৬
        </h1>
        
        <div className="flex flex-col items-center gap-2">
          <div className="text-[10px] md:text-xs font-bold text-red-600 dark:text-red-400 border border-red-200 dark:border-red-900/50 px-3 py-0.5 rounded-full bg-red-50 dark:bg-red-900/20">
            অবাধ, সুষ্ঠ ও নিরপেক্ষ নির্বাচন আমাদের অঙ্গীকার
          </div>
          <div className="text-3xl md:text-5xl font-black text-blue-900 dark:text-blue-400 tracking-tight transition-colors mt-2 text-center">
             নাচোল থানা, চাঁপাইনবাবগঞ্জ
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
