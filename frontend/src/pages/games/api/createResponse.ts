import axios from "axios";

interface ResponseData {
  questionId: string;
  userId: string;
  isCorrect: boolean;
  response: string;
}

export async function createResponse(responseData: ResponseData) {
  try {
    const response = await axios.post(`/api/v1/response`, responseData, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data;
  } catch (error) {
    console.error("Error creating response:", error);
  }
}
