import { useState } from "react";
import { useTranslation } from "react-i18next";

// import {
//   Select,
//   SelectContent,
//   SelectItem,
//   SelectTrigger,
//   SelectValue,
// } from "@/components/ui/select";
// import { Button } from "../ui/button";

import languages from "@/translations/languages";

import { ChevronDown, ChevronUp } from "lucide-react";

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
    // <Select>
    //   <SelectTrigger className="border-beedark min-w-[200px] bg-bee py-6 ring-0 focus:ring-0 focus:ring-offset-0">
    //     <SelectValue placeholder={t("language-selector.label")} />
    //   </SelectTrigger>
    //   <SelectContent className="border-beedark bg-bee">
    //     <SelectItem value="en">
    //       <button
    //         className="h-full w-full"
    //         onClick={() => i18n.changeLanguage("en")}
    //       >
    //         {t("language-selector.languages.en")}
    //       </button>
    //     </SelectItem>
    //     <SelectItem value="es" onClick={() => i18n.changeLanguage("en")}>
    //       <button
    //         className="h-full w-full"
    //         onClick={() => i18n.changeLanguage("en")}
    //       >
    //         Spanish
    //       </button>
    //     </SelectItem>
    //   </SelectContent>
    // </Select>
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
            className="w-full rounded-md px-2 py-2 hover:bg-gray-200"
            onClick={() => switchLanguage("en")}
          >
            English
          </button>
          <button
            className="w-full rounded-md px-2 py-2 hover:bg-gray-200"
            onClick={() => switchLanguage("es")}
          >
            Spanish
          </button>
        </div>
      )}
    </div>
  );
}
