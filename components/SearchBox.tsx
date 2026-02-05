
import React, { useState } from 'react';

// Comprehensive list of centers for Nachole Upazila
const NACHOLE_CENTERS = [
  // কসবা ইউনিয়ন (Kasba Union)
  { name: '১২৮ কানপাড়া কাজলা উচ্চ বিদ্যালয়, কানপাড়া', area: 'কসবা ইউনিয়ন' },
  { name: '১২৯ কাজলা সরকারি প্রাথমিক বিদ্যালয়, কানপাড়া', area: 'কসবা ইউনিয়ন' },
  { name: '১৩০ আঝইর সরকারি প্রাথমিক বিদ্যালয়, আঝইর', area: 'কসবা ইউনিয়ন' },
  { name: '১৩১ যাদুপুর সরকারি প্রাথমিক বিদ্যলয়, যাদুপুর', area: 'কসবা ইউনিয়ন' },
  { name: '১৩২ উজিরপুর সরকারি প্রাথমিক বিদ্যালয়, উজিরপুর', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৩ কালইর সরকারি প্রাথমিক বিদ্যালয়, কালইর', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৪ এলাইপুর সরকারি প্রাথমিক বিদ্যালয়, এলাইপুর', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৫ গোলাবাড়ী উচ্চ বিদ্যালয়, গোলাবাড়ী', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৬ খান্দুরা সরকারি প্রাথমিক বিদ্যালয়, খান্দুরা', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৭ সোনামাসনা সরকারি প্রাথমিক বিদ্যালয়, সোনামাসনা', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৮ সাতকান্দ্রি সরকারি প্রাথমিক বিদ্যালয়, সাতকান্দ্রি', area: 'কসবা ইউনিয়ন' },
  { name: '১৩৯ সব্দলপুর দারুস সালাম দাখিল মাদ্রাসা, সব্দলপুর', area: 'কসবা ইউনিয়ন' },
  { name: '১৪০ সোনাইচন্ডী উচ্চ বিদ্যালয়, সোনাইচন্ডী', area: 'কসবা ইউনিয়ন' },

  // ফতেপুর ইউনিয়ন (Fatepur Union)
  { name: '১৪১ খোলসী দ্বি-মুখী উচ্চ বিদ্যালয়, খোলসী', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪২ মল্লিকপুর সরকারি প্রাথমিক বিদ্যালয়, মল্লিকপুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৩ ফতেপুর সরকারি প্রাথমিক বিদ্যালয়, ফতেপুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৪ মিড়কাডাংগা সরকারি প্রাথমিক বিদ্যালয়, মিড়কাডাংগা', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৫ সানপুর সরকারি প্রাথমিক বিদ্যালয়, সানপুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৬ পাহাড়পুর উচ্চ বিদ্যালয়, পাহাড়পুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৭ ফুলবাড়ী সরকারি প্রাথমিক বিদ্যালয়, ফুলবাড়ী', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৮ টাকাহারা সরকারি প্রাথমিক বিদ্যালয়, টাকাহারা', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৪৯ মাধবপুর উচ্চ বিদ্যালয়, মাধবপুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৫০ মির্জাপুর উচ্চ বিদ্যালয়, মির্জাপুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৫১ আলিশাপুর দাখিল মাদ্রাসা, আলিশাপুর', area: 'ফতেপুর ইউনিয়ন' },
  { name: '১৫২ বড়পুকুর বিষ্ণুপুর সরকারি প্রাথমিক বিদ্যালয়, বিষ্ণুপুর', area: 'ফতেপুর ইউনিয়ন' },

  // নাচোল পৌরসভা (Nachole Municipality)
  { name: '১৫৩ নাচোল পাইলট উচ্চ বিদ্যালয়, নাচোল বাজার', area: 'নাচোল পৌরসভা' },
  { name: '১৫৪ নাচোল (১) সরকারি প্রাথমিক বিদ্যালয়, নাচোল বাজার', area: 'নাচোল পৌরসভা' },
  { name: '১৫৫ মুन्সি হযরত আলী উচ্চ বিদ্যালয়, শ্রীরামপুর', area: 'নাচোল পৌরসভা' },
  { name: '১৫৭ নাচোল খুরশেদ মোল্লা সরকারি উচ্চ বালিকা বিদ্যালয়', area: 'নাচোল পৌরসভা' },
  { name: '১৫৯ মাক্তাপুর উচ্চ বিদ্যালয়, মাক্তাপুর', area: 'নাচোল পৌরসভা' },

  // নাচোল ইউনিয়ন (Nachole Union)
  { name: '১৬১ দেওপাড়া খেসবা সরকারি প্রাথমিক বিদ্যালয়, খেসবা', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬২ ঘিওন ভুলানাথ সরকারি প্রাথমিক বিদ্যালয়, ঘিওন', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬৩ ভেরেন্ডী উচ্চ বিদ্যালয়, ভেরেন্ডী', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬৪ হুলাশপুর সরকারি প্রাথমিক বিদ্যালয়, হুলাসপুর', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬৫ সমসপুর দাখিল মাদ্রাসা, সমসপুর', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬৬ বাঘরাইল সরকারি প্রাথমিক বিদ্যালয়', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬৭ পীরপুর উচ্চ বিদ্যালয়', area: 'নাচোল ইউনিয়ন' },
  { name: '১৬৯ নাসিরাবাদ দুলাহার সরকারি প্রাথমিক বিদ্যালয়', area: 'নাচোল ইউনিয়ন' },
  { name: '১৭০ রাজবাড়ী উচ্চ বিদ্যালয়, মহাম্মদপুর', area: 'নাচোল ইউনিয়ন' },

  // নেজামপুর ইউনিয়ন (Nezampur Union)
  { name: '১৭৩ লক্ষীপুর সরকারি প্রাথমিক বিদ্যালয়', area: 'নেজামপুর ইউনিয়ন' },
  { name: '১৭৪ বহরইল সরকারি প্রাথমিক বিদ্যালয়, বহরইল', area: 'নেজামপুর ইউনিয়ন' },
  { name: '১৭৮ নেজামপুর বিনোদবিহারী সরকারি প্রাথমিক বিদ্যালয়', area: 'নেজামপুর ইউনিয়ন' },
  { name: '১৮০ বাইপুর উচ্চ বিদ্যালয়, বাইপুর', area: 'নেজামপুর ইউনিয়ন' },
  { name: '১৮২ হাটবাকইল সরকারি প্রাথমিক বিদ্যালয়, বাকইল', area: 'নেজামপুর ইউনিয়ন' },
  { name: '১৮৪ দোগাছী বরেন্দ্র উচ্চ বিদ্যালয় ও কলেজ', area: 'নেজামপুর ইউনিয়ন' },
];

interface SearchBoxProps {
  onSelectCenter: (center: any) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({ onSelectCenter }) => {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<any[]>([]);

  const handleSearch = (val: string) => {
    setQuery(val);
    if (val.trim().length > 1) {
      const filtered = NACHOLE_CENTERS.filter(c => 
        c.name.toLowerCase().includes(val.toLowerCase()) || 
        c.area.toLowerCase().includes(val.toLowerCase())
      );
      setResults(filtered);
    } else {
      setResults([]);
    }
  };

  return (
    <div className="relative w-full max-w-xl mx-auto mb-8 z-50">
      <div className="relative group">
        <input
          type="text"
          value={query}
          onChange={(e) => handleSearch(e.target.value)}
          placeholder="কেন্দ্রের নাম বা নম্বর দিয়ে সার্চ করুন..."
          className="w-full pl-14 pr-4 py-5 rounded-2xl border-2 border-gray-300 dark:border-slate-800 bg-white dark:bg-slate-900 focus:border-blue-700 dark:focus:border-blue-500 focus:ring-4 focus:ring-blue-500/10 transition-all text-sm md:text-base font-bold shadow-xl dark:text-white outline-none placeholder:text-gray-400"
        />
        <div className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500 group-focus-within:text-blue-700 transition-colors">
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
          </svg>
        </div>
      </div>

      {/* Results Dropdown */}
      {results.length > 0 && (
        <div className="absolute w-full mt-3 bg-white dark:bg-slate-900 border-2 border-gray-200 dark:border-slate-800 rounded-2xl shadow-2xl z-[100] overflow-hidden animate-in fade-in slide-in-from-top-2 duration-200">
          <div className="p-2 max-h-[400px] overflow-y-auto custom-scrollbar">
            {results.map((center, i) => (
              <button
                key={i}
                onClick={() => {
                  onSelectCenter(center);
                  setResults([]);
                  setQuery(center.name);
                }}
                className="w-full text-left p-4 hover:bg-blue-50 dark:hover:bg-blue-900/30 rounded-xl transition-colors flex items-center justify-between group border-b border-gray-100 dark:border-slate-800 last:border-0"
              >
                <div>
                  <h4 className="font-black text-gray-900 dark:text-slate-100 text-sm md:text-base leading-tight">{center.name}</h4>
                  <p className="text-[11px] font-black text-blue-700 dark:text-blue-400 mt-1 uppercase tracking-wider">{center.area}</p>
                </div>
                <svg className="w-6 h-6 text-blue-700 opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7"></path>
                </svg>
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default SearchBox;
