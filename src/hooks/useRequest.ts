import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { useCallback, useState } from "react";

export function useRequest<Response>(request: () => Promise<Response>) {
  const [data, setData] = useState<Response>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const execute = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await request();
      setData(response);
    } catch (error) {
      setErrorMessage((error as AxiosError).message);
      enqueueSnackbar((error as AxiosError).message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
  }, [request]);

  return { data, isLoading, errorMessage, execute };
}
