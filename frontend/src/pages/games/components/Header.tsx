import { Progress } from "@/components/ui/progress";
import { X } from "lucide-react";
import { Link } from "react-router-dom";

export default function Header({ index }: { index: number }) {
  return (
    <header className="mx-auto flex w-full items-center justify-between gap-x-7 pt-[20px] lg:pt-[50px]">
      <Link to="/games">
        <X className="cursor-pointer text-slate-500 transition hover:text-bee" />
      </Link>
      <Progress value={index} />
    </header>
  );
}
