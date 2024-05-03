import { useEffect, useState } from "react";
import Header from "../components/Header";
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

const GameWrapper = ({ game, gameType, onGameOver }) => {
  const [currentQuestion, setCurrentQuestion] = useState(
    game.getGameState().question
  );
  const navigate = useNavigate();
  console.log(currentQuestion);
  const handleAnswer = (answer, currentQuestion) => {
    game.answerQuestion(answer === currentQuestion.answer.word);
    if (game.getGameState().gameOver) {
      onGameOver();
      alert(`Game Over! Your final score is ${game.points}`);
      navigate("/games");
    } else {
      setCurrentQuestion(game.getGameState().question);
    }

    console.log("handle answer is done");
  };

  useEffect(() => {
    setCurrentQuestion(game.getGameState().question);
  }, [game]);

  return (
    <div>
      {gameType === "definition" && (
        <div>
          <h1>{gameType.toUpperCase()} Game</h1>
          <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
          <div>Question: {currentQuestion.answer.definition}</div>
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
      )}
      {gameType === "audio" && (
        <div>
          <h1>{gameType.toUpperCase()} Game</h1>
          <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
          <div>Question: {currentQuestion.answer.word}</div>
          <button onClick={() => game.playAudio()}>Play Audio</button>
          <ul>
            {/* {currentQuestion.words.map((word, index) => (
              <li key={index}>
                <Button variant={"outline"} className="mb-4" onClick={() => handleAnswer(word, currentQuestion)}>
                  {word}
                </Button>
              </li>
            ))} */}
          </ul>
        </div>
      )}
      {gameType === "sentence" && (
        <div>
          <h1>{gameType.toUpperCase()} Game</h1>
          <Header points={game.getGameState().points} userId={null} lives={game.getGameState().lives} />
          <div>Question: {currentQuestion.answer.definition}</div>
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
      )}
    </div>
  );
};

export default GameWrapper;
