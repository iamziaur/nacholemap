import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import MapEmbed from './components/MapEmbed';
import SearchBox from './components/SearchBox';
import LoginPage from './components/LoginPage';

const App: React.FC = () => {
  const [selectedCenter, setSelectedCenter] = useState<any>(null);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean | null>(null);

  useEffect(() => {
    // Check if user is already logged in
    const loginStatus = localStorage.getItem('isLoggedIn');
    setIsLoggedIn(loginStatus === 'true');
  }, []);

  const emergencyContacts = [
    { title: "জেলা প্রশাসক", desc: "জেলা রিটার্নিং অফিসার", tel: "+8801318320100", color: "blue", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
    { title: "পুলিশ সুপার", desc: "চাঁপাইনবাবগঞ্জ জেলা", tel: "+8801320125500", color: "indigo", icon: "M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" },
    { title: "মোঃ আছলাম আলী", desc: "ওসি, নাচোল থানা", tel: "০১৩২০-১২৫৬৭৩", color: "emerald", icon: "M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" },
    { title: "পুলিশ কন্ট্রোল রুম", desc: "জেলা কার্যালয়", tel: "+8801320126498", color: "amber", icon: "M8.111 16.404a5.5 5.5 0 017.778 0M12 20h.01m-7.08-7.071a10 10 0 0114.142 0M2 9.428a15 15 0 0120 0" },
    { title: "ডিউটি অফিসার", desc: "নাচোল থানা", tel: "+8801320125652", color: "slate", icon: "M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" },
    { title: "ফায়ার সার্ভিস", desc: "নাচোল স্টেশন", tel: "০১৯০১০২২৩১৫", color: "red", icon: "M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.99 7.99 0 0120 13a7.99 7.99 0 01-2.343 5.657z" }
  ];

  // While loading login status, show nothing or a loader
  if (isLoggedIn === null) return null;

  // Show Login Page if not logged in
  if (!isLoggedIn) {
    return <LoginPage onLoginSuccess={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-slate-950 flex flex-col transition-colors duration-300 animate-in fade-in duration-500">
      <Header />

      <main className="flex-grow container mx-auto px-4 py-6 max-w-5xl">
        
        {/* Search Section */}
        <div className="mt-[-20px] mb-12">
           <SearchBox onSelectCenter={setSelectedCenter} />
           
           {selectedCenter && (
             <div className="bg-blue-700 dark:bg-blue-800 text-white p-6 rounded-2xl shadow-xl border-2 border-blue-500 mb-8 animate-in zoom-in duration-300">
               <div className="flex items-start justify-between mb-4">
                 <div>
                   <span className="text-[10px] font-black uppercase bg-white/20 px-2 py-0.5 rounded mb-2 inline-block">নির্বাচিত তথ্য</span>
                   <h3 className="text-2xl md:text-3xl font-black leading-tight">{selectedCenter.name}</h3>
                   <p className="text-base opacity-95 font-medium">{selectedCenter.area}, নাচোল, চাঁপাইনবাবগঞ্জ</p>
                 </div>
                 <button 
                   onClick={() => setSelectedCenter(null)}
                   className="p-2 bg-white/20 hover:bg-white/30 rounded-xl transition-colors"
                 >
                   <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path></svg>
                 </button>
               </div>
               
               <div className="bg-white/10 p-4 rounded-xl border border-white/20 backdrop-blur-md flex gap-4">
                 <div className="bg-yellow-400 text-blue-900 p-1.5 rounded-full shrink-0 h-fit">
                   <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd"></path></svg>
                 </div>
                 <p className="text-sm md:text-base font-bold leading-relaxed">
                   ইউনিয়নভিত্তিক বিস্তারিত তথ্য দেখতে বাম পাশের মেনু বাটনটি ব্যবহার করুন।
                 </p>
               </div>
             </div>
           )}
        </div>

        {/* Authorities Section */}
        <section className="mb-10">
          <div className="flex items-center gap-2 mb-5">
            <div className="h-6 w-1.5 bg-blue-800 dark:bg-blue-600 rounded-full"></div>
            <h3 className="text-lg font-black text-gray-900 dark:text-slate-100 uppercase tracking-wide">সংশ্লিষ্ট কর্তৃপক্ষ</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {[
              { role: "সার্বিক দিকনির্দেশনায়", name: "গৌতম কুমার বিশ্বাস", title: "পুলিশ সুপার, চাঁপাইনবাবগঞ্জ", tel: "+8801320125500" },
              { role: "তত্ত্বাবধানে", name: "জনাব মোঃ হাসান তারেক", title: "অতিরিক্ত পুলিশ সুপার", tel: "+8801320125549" },
              { role: "মানচিত্র বাস্তবায়ন", name: "মোঃ আছলাম আলী", title: "অফিসার ইনচার্জ, নাচোল থানা", tel: "+8801320125673", green: true }
            ].map((person, idx) => (
              <div key={idx} className="bg-white dark:bg-slate-900 p-5 rounded-2xl shadow-md border-2 border-gray-200 dark:border-slate-800 flex flex-col items-center hover:border-blue-400 transition-all">
                <span className={`text-[10px] font-black uppercase px-3 py-1 rounded-full mb-3 ${person.green ? 'bg-green-100 text-green-800' : 'bg-blue-100 text-blue-800'}`}>{person.role}</span>
                <h4 className="text-lg font-black text-gray-900 dark:text-slate-100">{person.name}</h4>
                <p className="text-gray-700 dark:text-slate-400 text-xs text-center mb-4 font-medium">{person.title}</p>
                <a href={`tel:${person.tel}`} className={`mt-auto w-full py-2.5 text-white text-xs font-black rounded-xl text-center shadow-lg transition-transform active:scale-95 ${person.green ? 'bg-green-700 hover:bg-green-800' : 'bg-blue-800 hover:bg-blue-900'}`}>কল করুন</a>
              </div>
            ))}
          </div>
        </section>

        {/* Map Instructions Section */}
        <section className="mb-10 bg-amber-100 dark:bg-amber-900/10 border-2 border-amber-300 dark:border-amber-900/30 rounded-2xl p-6 shadow-sm">
          <h3 className="text-xl font-black text-amber-950 dark:text-amber-400 mb-6 flex items-center gap-3">
            <span className="text-2xl">🗺️</span> ম্যাপ ব্যবহারের সংক্ষিপ্ত নির্দেশনা
          </h3>
          
          <div className="space-y-6">
            <div className="flex gap-4 items-start">
              <span className="text-xl bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/20">🖥️</span>
              <div>
                <h4 className="text-base font-black text-gray-900 dark:text-slate-100 mb-1">ম্যাপ বড় করে দেখতে:</h4>
                <p className="text-sm md:text-base text-gray-800 dark:text-slate-300 font-bold leading-snug">
                  ডান পাশের ফুলস্ক্রিন বাটন <span className="inline-flex items-center bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 px-1.5 rounded font-black text-xs">[ ⛶ ]</span> চাপুন।
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/20">🗺️</span>
              <div>
                <h4 className="text-base font-black text-gray-900 dark:text-slate-100 mb-1">ইউনিয়ন খুঁজতে:</h4>
                <p className="text-sm md:text-base text-gray-800 dark:text-slate-300 font-bold leading-snug">
                  ম্যাপের বাম পাশে থাকা মেনু বাটন <span className="inline-flex items-center bg-white dark:bg-slate-800 border-2 border-gray-300 dark:border-slate-700 px-1.5 rounded font-black text-xs">[ ◧ ]</span> চাপুন, তারপর ইউনিয়ন নির্বাচন করুন।
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <span className="text-xl bg-white dark:bg-slate-800 p-2 rounded-xl shadow-sm border border-amber-200 dark:border-amber-900/20">🔍</span>
              <div>
                <h4 className="text-base font-black text-gray-900 dark:text-slate-100 mb-1">ভোট/কেন্দ্র স্পষ্ট দেখতে:</h4>
                <p className="text-sm md:text-base text-gray-800 dark:text-slate-300 font-bold leading-snug">
                  ম্যাপের উপর জুম ইন (Zoom In) করুন।
                </p>
              </div>
            </div>

            <div className="pt-4 border-t border-amber-200 dark:border-amber-900/20">
              <p className="text-xs md:text-sm text-amber-900 dark:text-amber-500 font-black flex items-center gap-2">
                <span>✨</span> মোবাইল ও কম্পিউটার—দুই জায়গাতেই একইভাবে কাজ করবে।
              </p>
            </div>
          </div>
        </section>

        <section className="mb-12">
          <MapEmbed />
        </section>

        {/* Emergency Contacts Section */}
        <section className="mb-12">
          <div className="flex items-center gap-3 mb-8">
            <div className="h-6 w-1.5 bg-red-700 rounded-full"></div>
            <h3 className="text-lg font-black text-gray-900 dark:text-slate-100 uppercase tracking-tight">জরুরি যোগাযোগ নম্বর</h3>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {emergencyContacts.map((item, i) => (
              <div key={i} className="bg-white dark:bg-slate-900 p-5 rounded-2xl border-2 border-gray-200 dark:border-slate-800 flex items-center gap-5 transition-all hover:border-red-500 shadow-lg hover:shadow-red-500/10">
                <div className={`bg-gray-100 dark:bg-slate-800 p-3 rounded-xl text-gray-900 dark:text-slate-200 shadow-inner`}>
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={item.icon}></path></svg>
                </div>
                <div className="flex-grow">
                  <h4 className="text-sm font-black text-gray-900 dark:text-slate-100">{item.title}</h4>
                  <p className="text-[10px] text-gray-700 dark:text-slate-400 font-bold">{item.desc}</p>
                  <a href={`tel:${item.tel.replace(/[^0-9+]/g, '')}`} className="text-sm font-black text-blue-800 dark:text-blue-400 mt-1 block tracking-tight hover:underline underline-offset-4">{item.tel}</a>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Police Banner */}
        <section className="bg-white dark:bg-slate-900 p-6 rounded-2xl border-2 border-blue-100 dark:border-slate-800 mb-12 flex flex-col md:flex-row items-center gap-6 shadow-sm">
          <img 
            loading="lazy"
            src="https://upload.wikimedia.org/wikipedia/commons/7/75/Bangladesh_Police_Emblem.svg" 
            alt="Police Emblem" 
            className="h-16 w-auto drop-shadow-md"
          />
          <div className="text-center md:text-left">
            <h3 className="text-base font-black text-blue-900 dark:text-blue-400 mb-1.5 uppercase tracking-widest">বাংলাদেশ পুলিশ এর অঙ্গীকার</h3>
            <p className="text-sm text-gray-800 dark:text-slate-300 italic font-bold leading-relaxed">
              "একটি অবাধ, সুষ্ঠ ও নিরপেক্ষ নির্বাচন আয়োজনের জন্য বাংলাদেশ পুলিশ দৃঢ়প্রতিজ্ঞ। আসুন, আমরা সবাই মিলে একটি সুন্দর ও শান্তিপূর্ণ পরিবেশ বজায় রাখি।"
            </p>
          </div>
        </section>
      </main> 

      <footer className="bg-white dark:bg-slate-900 border-t border-gray-100 dark:border-slate-800 py-10 transition-colors shadow-[0_-4px_20px_rgba(0,0,0,0.03)]">
        <div className="container mx-auto px-4 text-center">
          <p className="text-lg md:text-2xl font-black text-gray-900 dark:text-slate-100 mb-4 tracking-tight">
            © ২০২৬ নাচোল থানা ভোট সেন্টার - বাংলাদেশ পুলিশ ও নির্বাচন কমিশন
          </p>
          <div className="h-0.5 w-16 bg-blue-600/20 mx-auto mb-6 rounded-full"></div>
          
          <div className="flex flex-col items-center opacity-[0.15] hover:opacity-100 transition-opacity">
            <p className="text-[7px] text-gray-400 dark:text-slate-600 font-medium tracking-[0.2em] uppercase">
              কারিগরী সহযোগীতায়: <a href="tel:+8801792219012" className="hover:text-blue-500 transition-colors">মোঃ জিয়াউর রহমান</a>
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default App;
