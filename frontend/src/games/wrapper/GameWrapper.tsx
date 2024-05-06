import { useEffect, useState, useContext } from "react";
import Header from "../components/Header";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useNavigate } from "react-router-dom";
import Summary from "../components/Summary";
import { AuthContext } from "@/contexts/AuthContext";

const GameWrapper = ({ game, gameType, onGameOver }) => {
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
        reponse: answer,
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
    <div className=" relative h-screen">
      <div
        className={`transition-opacity duration-300 ${isModalVisible ? "opacity-50" : "opacity-100"}`}
      >
        {gameType === "definition" && (
          <div className="container mx-auto p-5">
            <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
              {gameType.toUpperCase()} Game
            </h1>
            <Header
              points={game.getGameState().points}
              userId={null}
              lives={game.getGameState().lives}
            />
            <div className="mb-4 flex items-center justify-center">
              <div className="mt-4 flex items-center space-x-2 rounded-lg bg-blue-200 p-3 shadow">
                <div className="text-lg font-semibold text-gray-800">
                  Score:{" "}
                  <span className="text-green-600">
                    {game.getGameState().points}
                  </span>
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
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Question:</h2>
              <p className="mb-5 text-lg text-gray-600">
                {currentQuestion.answer.definition}
              </p>
              <ul className="flex flex-wrap justify-center">
                {currentQuestion.words.map((word, index) => (
                  <li key={index} className="m-2">
                    <Button
                      variant="outline"
                      className="rounded border-yellow-500 px-4 py-2 text-yellow-500 transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
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
          <div className="container mx-auto p-5">
            <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
              {gameType.toUpperCase()} Game
            </h1>
            <Header
              points={game.getGameState().points}
              userId={null}
              lives={game.getGameState().lives}
            />
            <div className="mb-4 flex items-center justify-center">
              <div className="mb-4 mt-4 flex items-center space-x-2 rounded-lg bg-blue-200 p-3 shadow">
                <div className="text-lg font-semibold text-gray-800">
                  Score:{" "}
                  <span className="text-green-600">
                    {game.getGameState().points}
                  </span>
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
                  className="flex h-20 w-20 items-center justify-center rounded bg-black text-2xl font-bold text-white"
                  onClick={(e) => {
                    e.stopPropagation();
                    game.playAudio();
                  }}
                >
                  🔊
                </Button>
                <Input
                  type="text"
                  placeholder="Type the word you heard"
                  value={audioInput}
                  onChange={handleChange}
                  className="w-full rounded border border-gray-300 p-2"
                />
                <Button
                  type="submit"
                  className="w-32 rounded bg-yellow-500 px-4 py-2 font-bold text-white hover:bg-yellow-700"
                >
                  Submit
                </Button>
              </div>
            </form>
          </div>
        )}

        {gameType === "sentence" && (
          <div className="container mx-auto p-5">
            <h1 className="mb-6 text-center text-3xl font-bold text-gray-800">
              {gameType.toUpperCase()} Game
            </h1>
            <Header
              points={game.getGameState().points}
              userId={null}
              lives={game.getGameState().lives}
            />
            <div className="mb-4 flex items-center justify-center">
              <div className="mt-4 flex items-center space-x-2 rounded-lg bg-blue-200 p-3 shadow">
                <div className="text-lg font-semibold text-gray-800">
                  Score:{" "}
                  <span className="text-green-600">
                    {game.getGameState().points}
                  </span>
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
            <div className="mb-6 rounded-lg bg-white p-6 shadow-md">
              <h2 className="mb-4 text-xl font-semibold">Question:</h2>
              <p className="mb-5 text-lg text-gray-600">
                {currentQuestion.answer.example}
              </p>
              <ul className="flex flex-wrap justify-center">
                {currentQuestion.words.map((word, index) => (
                  <li key={index} className="m-2">
                    <Button
                      variant="outline"
                      className="rounded border-yellow-500 px-4 py-2 text-yellow-500 transition-colors duration-300 ease-in-out hover:bg-yellow-500 hover:text-white"
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
