import { Joke } from "../types/joke";

export async function getRandomJoke(params: { category?: string } = {}) {
  const url = new URL(import.meta.env.VITE_JOKE_URL);
  const searchParams = new URLSearchParams(Object.entries(params));
  url.search = searchParams.toString();

  const response = await fetch(url);

  const result = await response.json();

  if (response.status !== 200) {
    const errorMessage = result?.messages?.[0] || response.statusText;
    throw Error(errorMessage);
  }

  return result as Joke;
}
