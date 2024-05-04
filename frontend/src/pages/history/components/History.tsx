import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import moment from "moment";

import { AuthContext } from "@/contexts/AuthContext";

import { getAllGames } from "../api/getAllGames";

import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Navbar from "@/components/custom/Navbar";

export default function History() {
  const { currentUser } = useContext(AuthContext);

  const [games, setGames] = useState([]);

  useEffect(() => {
    const fetchAllGames = async () => {
      const response = await getAllGames();
      setGames(response);
    };

    fetchAllGames();
  }, []);

  return (
    <div className="min-h-screen w-full overflow-hidden">
      {/* Navbar */}
      <Navbar />

      <div className="w-full py-12 text-center">
        <span className="h2">{currentUser.username}'s Game History</span>
      </div>

      <div className="flex items-center justify-center">
        <Carousel className="w-full max-w-2xl">
          <CarouselContent>
            {games &&
              games.map((game, index) => {
                const createdAtMoment = moment(game.createdAt);

                return (
                  <CarouselItem
                    key={index}
                    className="basis-1/3 cursor-pointer"
                  >
                    <Link to={`/history/${game.id}`}>
                      <div className="p-2">
                        <Card className="border-2 border-bee">
                          <CardContent className="flex aspect-square items-center justify-center">
                            <div className="flex flex-col items-center">
                              <span className="text-xl font-semibold uppercase">
                                {game.type}
                              </span>
                              <span className="text-xl font-semibold">
                                {moment(createdAtMoment).fromNow()}
                                {/* {moment(game.createdAt).format("MM-DD-YYYY")} */}
                              </span>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    </Link>
                  </CarouselItem>
                );
              })}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
}
