import { Button } from "@/components/ui/button";
import { AuthContext } from "@/contexts/AuthContext";
import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Summary from "../components/Summary";

import { useTranslation } from "react-i18next";

import { Volume2 } from "lucide-react";

const GameWrapper = ({ game, gameType, onGameOver }) => {
  const { t } = useTranslation("common");

  const [currentQuestion, setCurrentQuestion] = useState(
    game.getGameState().question,
  );
  const { currentUser } = useContext(AuthContext);

  const [audioInput, setAudioInput] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);
  const navigate = useNavigate();

  const showModal = () => setIsModalVisible(true);

  const hideModal = () => {
    setIsModalVisible(false);
    navigate("/games");
  };

  const handleChange = (e) => {
    setAudioInput(e.target.value);
    console.log("audio input", audioInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("submitting");
    handleAnswer(audioInput, currentQuestion);
    setAudioInput("");
    console.log("submitted");
  };

  const submitResponse = async (response) => {
    fetch("/api/v1/response", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(response),
    })
      .then((res) => res.text())
      .then((data) => console.log(data))
      .catch((err) => console.error("Error submitting answer:", err));
  };

  const handleAnswer = (answer, currentQuestion) => {
    console.log("handle answer is called");
    const isCorrect = answer === currentQuestion.answer.word;
    game.answerQuestion(isCorrect);
    if (currentUser) {
      submitResponse({
        response: answer,
        questionId: currentQuestion.id,
        userId: currentUser.id,
        isCorrect: isCorrect,
      });
    }
    if (game.getGameState().gameOver) {
      showModal();
    } else {
      setCurrentQuestion(game.getGameState().question);
    }

    console.log("handle answer is done");
  };

  useEffect(() => {
    setCurrentQuestion(game.getGameState().question);
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
          <div className="container mx-auto py-12 sm:py-24">
            <div className="w-full pt-12 text-center">
              <span className="text-4xl font-bold">
                {t("games.definition.title")}
              </span>
            </div>

            <Header index={game.getGameState().index} />

            <div className="my-12 flex items-center justify-center">
              <div className="flex items-center space-x-2 rounded-lg p-3">
                <div className="flex flex-row space-x-2 text-xl font-semibold">
                  <span className="">Score: {game.getGameState().points}</span>
                </div>
                {Array.from({ length: game.getGameState().lives }).map(
                  (_, idx) => (
                    <span key={idx} className="text-red-500">
                      ❤️
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-8 rounded-lg">
              <p className="text-center text-4xl">
                {currentQuestion.answer.definition}
              </p>
              <ul className="flex flex-col justify-center sm:flex-row">
                {currentQuestion.words.map((word, index) => (
                  <li key={index} className="m-2">
                    <Button
                      variant="primary"
                      className="px-8 py-8 text-xl"
                      onClick={() => handleAnswer(word, currentQuestion)}
                    >
                      {word}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}

        {gameType === "audio" && (
          <div className="container mx-auto py-12 sm:py-24">
            <div className="w-full pt-12 text-center">
              <span className="text-4xl font-bold">
                {t("games.audio.title")}
              </span>
            </div>

            <Header index={game.getGameState().index} />

            <div className="my-12 flex items-center justify-center">
              <div className="flex items-center space-x-2 rounded-lg p-3">
                <div className="flex flex-row space-x-2 text-xl font-semibold">
                  <span className="">Score: {game.getGameState().points}</span>
                </div>
                {Array.from({ length: game.getGameState().lives }).map(
                  (_, idx) => (
                    <span key={idx} className="text-red-500">
                      ❤️
                    </span>
                  ),
                )}
              </div>
            </div>

            <form
              onSubmit={handleSubmit}
              className="mx-auto mb-6 w-full max-w-md rounded-lg bg-white p-6 shadow-md"
            >
              <div className="flex flex-col items-center space-y-4">
                <Button
                  type="button"
                  variant="primary"
                  className="flex items-center justify-center rounded bg-bee px-12 py-12 text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    game.playAudio();
                  }}
                >
                  <Volume2 className="h-12 w-12" />
                </Button>
                <input
                  type="text"
                  placeholder="Type the word you heard"
                  value={audioInput}
                  onChange={handleChange}
                  className="border-xl block w-full cursor-text rounded-xl border-2 border-dusk p-6 text-2xl focus:border-bee focus:outline-none active:outline-none"
                />
                <Button
                  type="submit"
                  variant="primary"
                  className="w-full px-8 py-8 text-xl"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}

        {gameType === "sentence" && (
          <div className="container mx-auto py-12 sm:py-24">
            <div className="w-full pt-12 text-center">
              <span className="text-4xl font-bold">
                {t("games.sentence.title")}
              </span>
            </div>

            <Header index={game.getGameState().index} />

            <div className="my-12 flex items-center justify-center">
              <div className="flex items-center space-x-2 rounded-lg p-3">
                <div className="flex flex-row space-x-2 text-xl font-semibold">
                  <span className="">Score: {game.getGameState().points}</span>
                </div>
                {Array.from({ length: game.getGameState().lives }).map(
                  (_, idx) => (
                    <span key={idx} className="text-red-500">
                      ❤️
                    </span>
                  ),
                )}
              </div>
            </div>

            <div className="flex flex-col space-y-8 rounded-lg">
              <p className="text-center text-4xl">
                {currentQuestion.answer.example}
              </p>
              <ul className="flex flex-col justify-center sm:flex-row">
                {currentQuestion.words.map((word, index) => (
                  <li key={index} className="m-2">
                    <Button
                      variant="primary"
                      // className="rounded border-bee bg-none px-8 py-8 transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
                      className="px-8 py-8 text-xl"
                      onClick={() => handleAnswer(word, currentQuestion)}
                    >
                      {word}
                    </Button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
      {isModalVisible && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <Summary game={game} hideModal={hideModal} />
        </div>
      )}
    </div>
  );
};

export default GameWrapper;
