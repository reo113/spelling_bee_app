import { useContext } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { Link, redirect } from "react-router-dom";

// Icons
import {
  LogOut,
  Settings,
  User,
  LogIn,
  NotebookText,
  Gamepad2,
} from "lucide-react";

// UI
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function CustomDropdown() {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    redirect("/");
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar className="h-12 w-12 cursor-pointer border-2 border-bee">
          <AvatarImage
            src="https://api.dicebear.com/8.x/bottts-neutral/svg?seed=Bella"
            alt="Avatar"
          />
          <AvatarFallback>AV</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>My Account</DropdownMenuLabel>
        {/* <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
          </DropdownMenuItem>
        </DropdownMenuGroup> */}
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="/games" className="w-full">
              <div className="flex w-full flex-row items-center">
                <Gamepad2 className="mr-2 h-4 w-4" />
                <span>Game Hub</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <Link to="/history" className="w-full">
              <div className="flex w-full flex-row items-center">
                <NotebookText className="mr-2 h-4 w-4" />
                <span>History</span>
              </div>
            </Link>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            {currentUser ? (
              <div
                onClick={(e) => handleLogout(e)}
                className="flex w-full cursor-pointer flex-row items-center"
              >
                <LogOut className="mr-2 h-4 w-4" />
                <span>Log out</span>
              </div>
            ) : (
              <Link to="/login" className="w-full">
                <div className="flex w-full flex-row items-center">
                  <LogIn className="mr-2 h-4 w-4" />
                  <span>Log in</span>
                </div>
              </Link>
            )}
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
