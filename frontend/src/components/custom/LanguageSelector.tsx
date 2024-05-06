import { useState } from "react";
import { useTranslation } from "react-i18next";

import languages from "@/translations/languages";

import { Check, ChevronDown, ChevronUp } from "lucide-react";

export default function LanguageSelector() {
  const [isOpen, setIsOpen] = useState(false);

  const [t, i18n] = useTranslation("common");

  const toggleIsOpen = () => {
    setIsOpen(!isOpen);
  };

  const switchLanguage = (languageCode: string) => {
    i18n.changeLanguage(languageCode);
  };

  return (
    <div
      className="relative flex h-[50px] w-[220px] cursor-pointer items-center justify-center rounded-md border-2 border-darkbee bg-bee px-4 py-4 sm:text-sm"
      onClick={() => toggleIsOpen()}
    >
      <div className="flex w-full flex-row items-center justify-between">
        {languages[i18n.languages[0]]}
        {isOpen ? (
          <ChevronUp className="h-4 w-4" />
        ) : (
          <ChevronDown className="h-4 w-4" />
        )}
      </div>
      {isOpen && (
        <div className="absolute left-0 top-14 flex w-[220px] flex-col gap-y-2 rounded-md border-2 border-darkbee bg-bee px-4 py-4">
          <button
            className="flex w-full flex-row items-center gap-x-2 rounded-md px-2 py-2 hover:bg-gray-200"
            onClick={() => switchLanguage("en")}
          >
            {i18n.languages[0] === "en" ? <Check className="h-4 w-4" /> : <></>}
            <span className="">English</span>
          </button>
          <button
            className="flex w-full flex-row items-center gap-x-2 rounded-md px-2 py-2 hover:bg-gray-200"
            onClick={() => switchLanguage("es")}
          >
            {i18n.languages[0] === "es" ? <Check className="h-4 w-4" /> : <></>}
            <span className="">Spanish</span>
          </button>
        </div>
      )}
    </div>
  );
}
