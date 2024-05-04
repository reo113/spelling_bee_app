import { useContext, useEffect, useState } from "react";
import { AuthContext } from "@/contexts/AuthContext";
import { useParams } from "react-router-dom";
import moment from "moment";

import { getGameData } from "../api/getGameData";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

import Navbar from "@/components/custom/Navbar";

export default function History() {
  const { currentUser } = useContext(AuthContext);
  const { gameId } = useParams();

  const [game, setGame] = useState([]);

  useEffect(() => {
    const fetchGameData = async (gameId: string | undefined) => {
      const response = await getGameData(gameId);
      setGame(response);
    };

    fetchGameData(gameId);
  }, [gameId]);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="w-full py-12 text-center">
        <span className="h2">{currentUser.username}'s Game History</span>
      </div>

      <div className="flex items-center justify-center">
        <Accordion
          type="single"
          collapsible
          className="min-w-[400px] max-w-[600px] sm:min-w-[500px] md:min-w-[600px]"
        >
          {game &&
            game.map((question, index) => {
              return (
                <AccordionItem value={"item-" + index}>
                  <AccordionTrigger>Question {index + 1}</AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col">
                      <span className="">{question.questionText}</span>
                      <div className="flex flex-row gap-x-4">
                        {question.AnswerChoice.map((choice, index) => {
                          return (
                            <span
                              key={index}
                              className={
                                choice.choice === question.correctAnswer
                                  ? "text-green-500"
                                  : "text-red-500"
                              }
                            >
                              {choice.choice}
                            </span>
                          );
                        })}
                      </div>
                      {question.Responses.length > 0 && (
                        <span
                          className={
                            question.Responses[0].isCorrect === true
                              ? "text-green-500"
                              : "text-red-500"
                          }
                        >
                          {question.Responses[0].reponse}
                        </span>
                      )}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              );
            })}
        </Accordion>
      </div>
    </div>
  );
}
