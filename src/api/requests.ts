import axios from "axios";
import { JokeResponseDto } from "../types/JokeResponseDto";

const API_URL = import.meta.env.VITE_API_URL;

const axiosInstance = axios.create({
  baseURL: API_URL,
});

export const getRandomJoke = async () => {
  const response = await axiosInstance.get<JokeResponseDto>(`random-joke`);
  return response.data;
};
