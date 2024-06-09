import { useState } from "react";

import { Button } from "@/components/ui/button";
import Header from "../components/Header";

import { Volume2 } from "lucide-react";

import { useTranslation } from "react-i18next";

export default function AudioGame({ game, handleAnswer, currentQuestion }) {
  const { t } = useTranslation("common");

  const [audioInput, setAudioInput] = useState("");

  const handleChange = (e) => {
    setAudioInput(e.target.value);
    console.log("audio input", audioInput);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleAnswer(audioInput, currentQuestion);
    setAudioInput("");
  };

  return (
    <div className="container mx-auto py-12 sm:py-24">
      <div className="w-full pt-12 text-center">
        <span className="text-4xl font-bold">{t("games.audio.title")}</span>
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
  );
}
