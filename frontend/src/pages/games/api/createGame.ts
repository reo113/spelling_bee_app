import axios from "axios";

interface GameData {
  userId: string;
  type: string;
  languageCode: string;
}

export async function createGame(gameType: string, gameData: GameData) {
  try {
    const response = await axios.post(`/api/v1/${gameType}`, gameData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating game:", error);
  }
}
