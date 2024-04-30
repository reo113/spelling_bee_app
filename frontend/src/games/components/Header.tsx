import { Progress } from "@/components/ui/progress"
import { X } from 'lucide-react';

const Header = ({lives,userId,points}) => {
  return (
    <header className="lg:pt-[50px] pt-[20px] px-10 flex gap-x-7
    items-center justify-between max-w-[1140px] mx-auto w-full">
     <X onClick={()=>{}}
        className="text-slate-500 hover:opacity-75 transition cursor-pointer">
        X
    </X>
    <Progress value={points}/>
    <div className="text-rose-500 flex items-center font bold">
      
    </div>
    </header>
  )
}

export default Header