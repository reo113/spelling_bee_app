import { useState, useEffect, useRef, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { fetchWordsWithDefinitions } from "../../../../backend/apis/dict/wordnik";
const removeHtmlTags = (text: string) => {
  return text.replace(/<[^>]*>/g, "");
};
const DefGameScreen = () => {
  const [correctWord, setCorrectWord] = useState("");
  const [correctDefinition, setCorrectDefinition] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  

  useEffect(() => {
    if (!fetchRef.current) {
      const fetchWords = async () => {
        const words = await fetchWordsWithDefinitions();
        const randomIndex = Math.floor(Math.random() * words.length);
        setCorrectWord(words[randomIndex].word);
        setCorrectDefinition(removeHtmlTags(words[randomIndex].definitions[0].text));
        setCurrentIndex(0);
        setCurrentGame(words);
        fetchRef.current = true;
       




       
      };
      fetchWords();
    }
  }, []);

  const handleWordClick = (word: SetStateAction<string>) => {
    console.log("word", word);
    setSelectedWord(word);
    setCurrentIndex((prev) => prev + 1);
  };

  return (
    <Card className="max-w-lg mx-auto my-8 shadow-lg bg-themeWhite">
      <CardHeader className="bg-themeBlack text-white">
        <CardTitle>What's the Definition?</CardTitle>
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
        
     
      </CardFooter>
    </Card>
  );
};

export default DefGameScreen;
