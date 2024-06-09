import { useCallback, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import { AuthContext } from "@/contexts/AuthContext";

import GameFactory from "../factory/gameFactory";
import GameWrapper from "../wrapper/GameWrapper";
import Loading from "@/components/custom/Loading";

import { useTranslation } from "react-i18next";

import { createGame } from "../api/createGame";

export default function StartGame() {
  const { gameType } = useParams();
  const { currentUser } = useContext(AuthContext);
  const { i18n } = useTranslation();

  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(true);

  let userId = null;
  if (currentUser) {
    userId = currentUser.id;
  }

  // useEffect to call fetchData when gameType changes
  useEffect(() => {
    const fetchGame = async (gameType: string) => {
      setLoading(true);

      const gameConfig = {
        userId: userId,
        type: gameType,
        languageCode: i18n.language,
      };

      const gameData = await createGame(gameType, gameConfig);

      const newGame = GameFactory.createGame(gameType, gameData);
      setGame(newGame);
      setLoading(false);
    };

    if (!game && gameType) {
      fetchGame(gameType);
    }
  }, [gameType, game]);

  const onGameOver = useCallback(() => {
    setGame(null);
  }, []);

  if (loading) return <Loading />;

  return <GameWrapper game={game} gameType={gameType} />;
}
