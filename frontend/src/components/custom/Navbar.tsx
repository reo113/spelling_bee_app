import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

// UI
import { Button } from "@/components/ui/button";
import LanguageSelector from "./LanguageSelector";
import CustomDropdown from "./CustomDropdown";

import { useTranslation } from "react-i18next";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);

  const { t } = useTranslation("common");

  return (
    <div className="sm:px-18 md:px-26 mx-auto flex w-full items-center justify-between bg-none px-4 py-6 lg:px-48 xl:px-64">
      {/* Image and Spelling Bee Text Group */}
      <Link to="/">
        <div className="flex items-center">
          <img
            src="/logo.svg"
            alt="Spelling Bee Logo"
            className="h-8 w-16 sm:h-16 sm:w-32"
          />
          <span className="text-xl font-bold sm:text-2xl md:text-3xl">
            Spelling Bee App
          </span>
        </div>
      </Link>
      <div className="flex items-center justify-center gap-x-4">
        {/* Language Selector Dropdown */}
        <div className="hidden sm:block">
          <LanguageSelector />
        </div>

        {currentUser === null ? (
          <Link to="/login">
            <Button variant="outline" className="px-6 py-6">
              {t("app.login")}
            </Button>
          </Link>
        ) : (
          <CustomDropdown />
        )}
      </div>
    </div>
  );
}
