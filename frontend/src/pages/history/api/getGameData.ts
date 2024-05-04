import axios from "axios";

export async function getGameData(gameId: string | undefined) {
  try {
    const response = await axios.get(`/api/v1/history/${gameId}`);

    return response.data;
  } catch (error) {
    console.error("Error fetching game data:", error);
  }
}
