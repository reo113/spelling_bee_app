import { Button } from "@/components/ui/button";
import Header from "../components/Header";

import { useTranslation } from "react-i18next";

export default function SentenceGame({ game, handleAnswer, currentQuestion }) {
  const { t } = useTranslation("common");

  return (
    <div className="container mx-auto py-12 sm:py-24">
      <div className="w-full pt-12 text-center">
        <span className="text-4xl font-bold">{t("games.sentence.title")}</span>
      </div>

      <Header index={game.getGameState().index} />

      <div className="my-12 flex items-center justify-center">
        <div className="flex items-center space-x-2 rounded-lg p-3">
          <div className="flex flex-row space-x-2 text-xl font-semibold">
            <span className="">Score: {game.getGameState().points}</span>
          </div>
          {Array.from({ length: game.getGameState().lives }).map((_, idx) => (
            <span key={idx} className="text-red-500">
              ❤️
            </span>
          ))}
        </div>
      </div>

      <div className="flex flex-col space-y-8 rounded-lg">
        <p className="text-center text-4xl">{currentQuestion.answer.example}</p>
        <ul className="flex flex-col justify-center sm:flex-row">
          {currentQuestion.words.map((word: string, index: number) => (
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
  );
}
