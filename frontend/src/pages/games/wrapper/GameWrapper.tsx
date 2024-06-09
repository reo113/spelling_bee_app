import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useNavigate } from "react-router-dom";

import AudioGame from "../components/AudioGame";
import DefinitionGame from "../components/DefinitionGame";
import SentenceGame from "../components/SentenceGame";
import Summary from "../components/Summary";

import { createResponse } from "../api/createResponse";

import {
  DefinitionGameClass,
  AudioGameClass,
  SentenceGameClass,
} from "../factory/gameClass";

interface GameWrapperProps {
  game: DefinitionGameClass | AudioGameClass | SentenceGameClass | null;
  gameType: string | undefined;
}

export default function GameWrapper({ game, gameType }: GameWrapperProps) {
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const [currentQuestion, setCurrentQuestion] = useState(
    game?.getGameState().question,
  );
  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => setIsModalVisible(true);

  const hideModal = () => {
    setIsModalVisible(false);
    navigate("/games");
  };

  const handleAnswer = async (answer: string, currentQuestion) => {
    const isCorrect = answer === currentQuestion.answer.word;
    game?.answerQuestion(isCorrect);

    if (currentUser) {
      const data = {
        questionId: currentQuestion.id,
        userId: currentUser.id,
        isCorrect: isCorrect,
        response: answer,
      };

      const responseData = JSON.stringify(data);

      await createResponse(responseData);
    }

    if (game?.getGameState().gameOver) {
      showModal();
    } else {
      setCurrentQuestion(game?.getGameState().question);
    }
  };

  useEffect(() => {
    setCurrentQuestion(game?.getGameState().question);
  }, [game]);

  return (
    <div className="relative h-screen w-full">
      <div
        className={`transition-opacity duration-300 ${isModalVisible ? "opacity-50" : "opacity-100"}`}
      >
        <div className="fixed left-0 top-0 -z-10 h-full w-full">
          <div className="absolute top-0 z-[-2] h-screen w-screen bg-gray-100 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(228,165,7,0.3),rgba(255,255,255,0))]"></div>
        </div>

        {gameType === "definition" && (
          <DefinitionGame
            game={game}
            handleAnswer={handleAnswer}
            currentQuestion={currentQuestion}
          />
        )}

        {gameType === "audio" && (
          <AudioGame
            game={game}
            handleAnswer={handleAnswer}
            currentQuestion={currentQuestion}
          />
        )}

        {gameType === "sentence" && (
          <SentenceGame
            game={game}
            handleAnswer={handleAnswer}
            currentQuestion={currentQuestion}
          />
        )}
      </div>

      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Summary game={game} hideModal={hideModal} />
        </div>
      )}
    </div>
  );
}
