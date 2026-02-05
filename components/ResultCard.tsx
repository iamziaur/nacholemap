
import React from 'react';
import { SearchResult } from '../types';

interface ResultCardProps {
  result: SearchResult;
}

const ResultCard: React.FC<ResultCardProps> = ({ result }) => {
  // Simple markdown renderer for the response text
  const formattedText = result.text.split('\n').map((line, i) => {
    if (line.startsWith('* ')) {
      return <li key={i} className="mb-1">{line.substring(2)}</li>;
    }
    if (line.startsWith('### ')) {
      return <h4 key={i} className="font-bold text-lg mt-4 mb-2">{line.substring(4)}</h4>;
    }
    if (line.trim() === '') return <br key={i} />;
    return <p key={i} className="mb-2 leading-relaxed">{line}</p>;
  });

  return (
    <div className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden flex flex-col">
      <div className="p-6">
        <div className="prose prose-green max-w-none text-gray-700">
          {formattedText}
        </div>
      </div>

      {result.sources.length > 0 && (
        <div className="bg-slate-50 border-t border-gray-100 p-6">
          <h4 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            গুগল ম্যাপস থেকে পাওয়া লোকেশন
          </h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {result.sources.map((source, index) => (
              <a
                key={index}
                href={source.uri}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between p-3 bg-white border border-gray-200 rounded-xl hover:border-green-500 hover:shadow-md transition-all group"
              >
                <div className="flex flex-col">
                  <span className="text-sm font-semibold text-gray-800 line-clamp-1">{source.title}</span>
                  <span className="text-xs text-green-600 font-medium">ম্যাপে দেখুন →</span>
                </div>
                <div className="bg-green-50 p-2 rounded-lg group-hover:bg-green-600 group-hover:text-white transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"></path>
                  </svg>
                </div>
              </a>
            ))}
          </div>
        </div>
      )}
      
      <div className="bg-blue-50 px-6 py-4 flex items-center gap-3">
        <div className="bg-blue-500 text-white p-1 rounded-full">
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        </div>
        <p className="text-xs text-blue-700 font-medium">
          এটি একটি এআই মডেল দ্বারা তৈরি ফলাফল। চূড়ান্ত তথ্যের জন্য আপনার নিকটস্থ নির্বাচনী অফিসের সাথে যোগাযোগ করুন।
        </p>
      </div>
    </div>
  );
};

export default ResultCard;
