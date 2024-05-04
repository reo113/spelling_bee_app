import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

const Header = ({ lives, userId, index }) => {
  return (
    <header
      className="mx-auto flex w-full max-w-[1140px] items-center
    justify-between gap-x-7 px-10 pt-[20px] lg:pt-[50px]"
    >
      <Link to="/games">
        <X className="cursor-pointer text-slate-500 transition hover:text-bee" />
      </Link>
      <Progress value={index} />
      <div className="font bold flex items-center text-rose-500"></div>
    </header>
  );
};

export default Header;
