import { useState, useEffect, useRef, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { getRandomWordsWithDef } from "../../../../../backend/apis/dict/wordnik.tsx";

const removeHtmlTags = (text: string) => {
  return text.replace(/<[^>]*>/g, "");
};

const DefGameScreen = () => {
  const [correctWord, setCorrectWord] = useState("");
  const [correctDefinition, setCorrectDefinition] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(false);

  useEffect(() => {
    if (!fetchRef.current) {
      const fetchWords = async () => {
        const data = await getRandomWordsWithDef();
        console.log("data", data);
        const wordEntries = Object.entries(data);
        const randomIndex = Math.floor(Math.random() * wordEntries.length);
        const [word, definition] = wordEntries[randomIndex];
        setCorrectWord(word);
        setCorrectDefinition(removeHtmlTags(definition));
        const shuffledOptions = [...wordEntries]
          .sort(() => 0.5 - Math.random())
          .slice(0, 3)
          .map((entry) => entry[0]);
        if (!shuffledOptions.includes(word)) {
          shuffledOptions[Math.floor(Math.random() * shuffledOptions.length)] =
            word; // Ensure the correct word is one of the options
        }
        setOptions(shuffledOptions);
        fetchRef.current = true;
      };
      fetchWords();
    }
  }, []);

  const handleWordClick = (word: SetStateAction<string>) => {
    console.log("word", word);
    setSelectedWord(word);
  };

  return (
    <Card className="max-w-lg mx-auto my-8 shadow-lg bg-themeWhite">
      <CardHeader className="bg-themeBlack text-white">
        <CardTitle>What's the Correct word?</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-themeBlack">
        <div
          className={`flex items-center space-x-4 rounded-md border p-4 ${
            selectedWord === correctWord ? "bg-themeYellow" : "bg-gray-100"
          }`}
        >
          <div>
            <p
              className={`text-sm font-medium leading-none ${
                selectedWord === correctWord
                  ? "text-themeBlack"
                  : "text-gray-900"
              }`}
            >
              {correctDefinition}
            </p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="flex flex-wrap gap-3 p-4 bg-themeWhite">
        {options.map((word, index) => (
          <Button
            key={index}
            className="m-2 p-1 rounded bg-themeBlack text-white hover:bg-opacity-90"
            onClick={() => handleWordClick(word)}
          >
            {word}
          </Button>
        ))}
      </CardFooter>
    </Card>
  );
};

export default DefGameScreen;
