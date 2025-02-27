"use client";

import { createContext, useContext, useState } from "react";
// import { useRouter } from "next/navigation";

const languages = [
  { code: "en", name: "English", flag: "🇬🇧" },
  // { code: "ar", name: "العربية", flag: "🇸🇦" },
];

const SelectedLanguageContext = createContext();

export function SelectedLanguageProvider({ children }) {
  // const router = useRouter();
  const [selectedLanguage, setSelectedLanguage] = useState(languages[0].code);

  const changeLanguage = (code) => {
    setSelectedLanguage(code);
    // router.push(`/${code}`);
  };

  return (
    <SelectedLanguageContext.Provider value={{ selectedLanguage, changeLanguage, languages }}>
      {children}
    </SelectedLanguageContext.Provider>
  );
}

export function useSelectedLanguage() {
  return useContext(SelectedLanguageContext);
}
