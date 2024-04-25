import { FiVolume2 } from "react-icons/fi";
import { useState, useEffect, useRef, SetStateAction } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getRandomWordsWithAudio } from "../../../../../backend/apis/dict/wordnik.tsx";
import { Input } from "../../ui/input.tsx";

const AudioGameScreen = () => {
  const [words, setWords] = useState({});
  const [correctWord, setCorrectWord] = useState("");
  const [selectedWord, setSelectedWord] = useState("");
  const [options, setOptions] = useState([]);
  const fetchRef = useRef(false);
  const audioRef = useRef("");

  useEffect(() => {
    if (!fetchRef.current) {
      const fetchWords = async () => {
        const data = await getRandomWordsWithAudio();
        console.log("data", data);
        setWords(data);
        const wordEntries = Object.entries(data);
        const randomIndex = Math.floor(Math.random() * wordEntries.length);
        const [word, audio] = wordEntries[randomIndex];
        setCorrectWord(word);
        audioRef.current = audio;
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

  // const handleWordInput = (word: SetStateAction<string>) => {
  //   console.log("word", word);
  //   setSelectedWord(word);
  // };
  const handleAudioClick = () => {
    const audio = new Audio(audioRef.current);
    audio.play();
  };
  return (
    <Card className="mx-auto my-8 max-w-lg bg-themeWhite shadow-lg">
      <CardHeader className="bg-themeBlack text-white">
        <CardTitle>Spell the Word!</CardTitle>
      </CardHeader>
      <CardContent className="p-4 text-themeBlack">
        <Button onClick={handleAudioClick}>
          <FiVolume2 className="mr-2" />
        </Button>
        <audio src={audioRef.current} />
      </CardContent>
      <CardFooter className="flex w-full max-w-sm items-center space-x-2 bg-themeWhite">
        <Input type="email" placeholder="spell it out" />
        {/* <Button onClick={() => handleWordInput(word)} type="submit">
          enter
        </Button> */}
      </CardFooter>
    </Card>
  );
};

export default AudioGameScreen;
