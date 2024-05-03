import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "@/contexts/AuthContext";

import { Button } from "@/components/ui/button";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Heart, Gem, ArrowRight } from "lucide-react";

function Modal({ game, hideModal }) {
  const { currentUser } = useContext(AuthContext);

  const points = game.points;
  const lives = game.lives;

  const hearts = [];

  for (let i = 0; i < 3; i++) {
    hearts.push(<Heart key={i} className="text-red-600" />);
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-600 bg-opacity-50">
      <div className="flex min-h-[300px] w-full max-w-sm flex-col justify-between rounded-lg bg-white p-5 shadow-lg sm:min-h-[350px] sm:max-w-md">
        <div className="">
          <span className="text-2xl font-bold">Game Summary</span>
          <div className="justify-content-center mt-2 flex flex-row items-center gap-x-2">
            <span className="text-xl">Final score: {points}</span>
          </div>
          <div className="justify-content-center mt-2 flex flex-row items-center gap-x-2">
            <span className="text-xl">{lives} lives: </span>
            {hearts}
          </div>
        </div>
        {currentUser === null ? (
          <Alert>
            <Gem className="h-5 w-5" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can view game history with a valid account.
            </AlertDescription>
            <Link to="/register">
              <Button variant="outline" className="px-4 py-4">
                Sign Up <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Alert>
        ) : (
          <Alert>
            <Gem className="h-5 w-5" />
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can view your previous games.
            </AlertDescription>
            <Link to="/history">
              <Button variant="outline" className="px-4 py-4">
                Game History <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </Alert>
        )}
        <Button
          onClick={hideModal}
          variant="primary"
          className="flex h-[50px] w-full items-center justify-center rounded-xl text-[16px] font-bold uppercase"
        >
          Close
        </Button>
      </div>
    </div>
  );
}
export default Modal;
