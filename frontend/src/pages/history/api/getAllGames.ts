import axios from "axios";

export async function getAllGames() {
  try {
    const response = await axios.get(`/api/v1/history`);

    return response.data;
  } catch (error) {
    console.error("Error fetching game history:", error);
  }
}
