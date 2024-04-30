import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button } from '@/components/ui/button';

const GameWrapper = ({ game, gameType, onGameOver }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    game.getGameState().question
  );
  
  const handleAnswer = (answer, currentQuestion) => {
    game.answerQuestion(answer === currentQuestion.answer.word);
    if (game.getGameState().gameOver) {
      onGameOver();
      alert(`Game Over! Your final score is ${game.points}`);
    } else {
      setCurrentQuestion(game.getGameState().question);
    }

    console.log("handle answer is done");
  };

  console.log("data", currentQuestion);
  useEffect(() => {
    setCurrentQuestion(game.getGameState().question);
  }, [game]);

  return (
    <div>
      <h1>{gameType.toUpperCase()} Game</h1>
      <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
      <div>Question: {currentQuestion.answer.definition}</div>
      {gameType === "audio" && (
        <button onClick={() => game.playAudio()}>Play Audio</button>
      )}
      <ul>
        {currentQuestion.words.map((word, index) => (
          <li key={index}>
            <Button variant={"outline"} className="mb-4" onClick={() => handleAnswer(word, currentQuestion)}>
              {word}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameWrapper;
