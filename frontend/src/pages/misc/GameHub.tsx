import StartGame from "@/games/components/StartGame";

const GameHub = () => {
  return (
    <div>
      <div className="container">
        <h1>Game hub</h1>
        <p>Welcome to the Game Selection</p>
        <StartGame />
      </div>
    </div>
  );
};

export default GameHub;
