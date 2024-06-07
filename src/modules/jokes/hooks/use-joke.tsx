import { useCallback, useState } from "react";
import { Joke } from "../types/joke";
import { getRandomJoke } from "../services/get-random-joke";

export function useJoke(params: { category: string }) {
  const { category } = params;
  const [joke, setJoke] = useState<Joke | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string>("");

  const fetchJoke = useCallback(async () => {
    try {
      setIsLoading(true);
      setError("");
      setJoke(undefined);

      let getParamsJoke = {};

      if (category.length > 0) {
        getParamsJoke = { ...getParamsJoke, category };
      }

      const firstJoke = await getRandomJoke(getParamsJoke);

      setJoke(firstJoke);
    } catch (error) {
      setError((error as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [category]);

  return { joke, isLoading, error, fetchJoke };
}
