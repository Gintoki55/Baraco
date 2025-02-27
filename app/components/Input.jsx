"use client";

import { ChevronDownIcon } from "@heroicons/react/24/solid";
import { useSelectedLanguage } from "../context/SelectedLanguageContext"; // استيراد السياق

export default function InputJsx({ style, iconStyle }) {
  const { selectedLanguage, setSelectedLanguage, languages } = useSelectedLanguage();

  return (
    <div className="relative sm:w-40 w-20">
      <div className="relative">
        <select
          value={selectedLanguage}
          onChange={(e) => setSelectedLanguage(e.target.value)}
          className={`appearance-none w-full bg-transparent border text-lg font-medium rounded-md py-2 pl-3 pr-10 shadow-sm cursor-pointer focus:ring-2 focus:outline-none ${style}`}
          aria-label="Select Language"
        >
          {languages.map((language, index) => (
            <option key={index} value={language.name} className="text-black">
              {language.flag} {language.name}
            </option>
          ))}
        </select>
        <ChevronDownIcon className={`absolute top-1/2 right-3 w-5 h-5 transform -translate-y-1/2 pointer-events-none ${iconStyle}`} />
      </div>
    </div>
  );
}
