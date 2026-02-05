
import React, { useState, useEffect } from 'react';

interface LoginPageProps {
  onLoginSuccess: () => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLoginSuccess }) => {
  const [password, setPassword] = useState('');
  const [attempts, setAttempts] = useState(0);
  const [error, setError] = useState('');
  const CORRECT_PASSWORD = 'mrm2022';
  const MAX_ATTEMPTS = 5;

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (password === CORRECT_PASSWORD) {
      localStorage.setItem('isLoggedIn', 'true');
      onLoginSuccess();
    } else {
      const newAttempts = attempts + 1;
      setAttempts(newAttempts);
      setPassword('');
      
      if (newAttempts >= MAX_ATTEMPTS) {
        setError('আপনি ৫ বার ভুল পাসওয়ার্ড দিয়েছেন। সহায়তার জন্য নিচের নম্বরে যোগাযোগ করুন।');
      } else {
        setError(`ভুল পাসওয়ার্ড! আর ${MAX_ATTEMPTS - newAttempts} বার চেষ্টা করতে পারবেন।`);
      }
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-slate-950 px-4">
      <div className="max-w-md w-full bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border-2 border-blue-100 dark:border-slate-800 p-8 transition-all">
        <div className="text-center mb-8">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-100 dark:bg-blue-900/30 rounded-full mb-4">
            <svg className="w-10 h-10 text-blue-700 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
            </svg>
          </div>
          <h2 className="text-2xl font-black text-gray-900 dark:text-white uppercase tracking-tight">প্রবেশাধিকার সংরক্ষিত</h2>
          <p className="text-sm text-gray-500 dark:text-slate-400 font-bold mt-2">সঠিক পাসওয়ার্ড দিয়ে ম্যাপে প্রবেশ করুন</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label className="block text-xs font-black text-gray-700 dark:text-slate-300 uppercase mb-2 ml-1">পাসওয়ার্ড প্রদান করুন</label>
            <input
              type="text"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              disabled={attempts >= MAX_ATTEMPTS}
              className="w-full px-5 py-4 rounded-2xl border-2 border-gray-200 dark:border-slate-800 bg-gray-50 dark:bg-slate-950 focus:border-blue-700 dark:focus:border-blue-500 outline-none text-center text-xl font-black tracking-widest text-blue-900 dark:text-blue-400 transition-all disabled:opacity-50"
              placeholder="••••••••"
              autoFocus
            />
          </div>

          {error && (
            <div className="bg-red-50 dark:bg-red-900/20 border-2 border-red-100 dark:border-red-900/30 p-4 rounded-2xl flex items-start gap-3 animate-pulse">
              <svg className="w-5 h-5 text-red-600 shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
              </svg>
              <p className="text-sm font-bold text-red-700 dark:text-red-400 leading-tight">{error}</p>
            </div>
          )}

          {attempts < MAX_ATTEMPTS ? (
            <button
              type="submit"
              className="w-full bg-blue-800 hover:bg-blue-900 text-white py-4 rounded-2xl font-black text-lg shadow-xl shadow-blue-900/20 transition-all active:scale-95"
            >
              প্রবেশ করুন
            </button>
          ) : (
            <div className="grid grid-cols-1 gap-3">
              <a 
                href="tel:+8801320125652" 
                className="flex items-center justify-center gap-3 bg-red-700 hover:bg-red-800 text-white py-4 rounded-2xl font-black transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"></path></svg>
                ডিউটি অফিসার (নাচোল থানা)
              </a>
              <a 
                href="tel:+8801792219012" 
                className="flex items-center justify-center gap-3 bg-slate-800 hover:bg-slate-900 text-white py-4 rounded-2xl font-black transition-all shadow-lg"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"></path></svg>
                কারিগরী সহায়তা (জিয়াউর রহমান)
              </a>
            </div>
          )}
        </form>

        <div className="mt-8 pt-6 border-t border-gray-100 dark:border-slate-800 text-center">
          <p className="text-[10px] text-gray-400 font-bold uppercase tracking-widest">
            বাংলাদেশ পুলিশ ও নির্বাচন কমিশন কর্তৃক সংরক্ষিত
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
