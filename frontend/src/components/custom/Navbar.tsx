import { useContext } from "react";
import { Link } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

// UI
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import CustomDropdown from "./CustomDropdown";

export default function Navbar() {
  const { currentUser } = useContext(AuthContext);

  return (
    <div className="sm:px-18 md:px-26 mx-auto flex w-full items-center justify-between bg-white bg-none px-4 py-6 shadow-md lg:px-48 xl:px-64">
      {/* Image and Spelling Bee Text Group */}
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
      <div className="flex items-center justify-center gap-x-4">
        {/* Language Selector Dropdown */}
        <div className="hidden sm:block">
          <Select>
            <SelectTrigger className="border-beedark w-[180px] bg-bee py-6 ring-0 focus:ring-0 focus:ring-offset-0">
              <SelectValue placeholder="Language" />
            </SelectTrigger>
            <SelectContent className="border-beedark bg-bee">
              <SelectItem value="english">English</SelectItem>
              <SelectItem value="spanish">Spanish</SelectItem>
              <SelectItem value="french">French</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {currentUser === null ? (
          <Link to="/login">
            <Button variant="outline" className="px-6 py-6">
              Log In
            </Button>
          </Link>
        ) : (
          <CustomDropdown />
        )}
      </div>
    </div>
  );
}
