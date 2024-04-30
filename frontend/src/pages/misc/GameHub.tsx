import { redirect } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthContext";
import { Link } from "react-router-dom";
import { useContext } from "react";

const GameHub = () => {
  const { currentUser, logout } = useContext(AuthContext);

  const handleLogout = (e) => {
    e.preventDefault();
    logout();
    redirect("/");
  };

  return (
    <div>
      <div className="container">
        <h1>Game Hub</h1>
        <p>Welcome to the Game Selection</p>
        <ul>
          <li>
            <Link to="/game/definition">Play Definition Game</Link>
          </li>
          <li>
            <Link to="/game/audio">Play Audio Game</Link>
          </li>
          <li>
            <Link to="/game/sentence">Play Sentence Game</Link>
          </li>
        </ul>
        {currentUser ? (
          <Button
            onClick={handleLogout}
            className="mx-4 transition-all duration-300 hover:text-accent dark:text-white dark:hover:text-accent"
          >
            <span className="ml-2">Log Out</span>
          </Button>
        ) : (
          <Link
            to="/login"
            className="mx-4 transition-all duration-300 hover:text-accent dark:text-white dark:hover:text-accent"
          >
            <span className="ml-2">Log In</span>
          </Link>
        )}
      </div>
    </div>
  );
};

export default GameHub;
