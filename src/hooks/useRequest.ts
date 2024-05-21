import { AxiosError } from "axios";
import { enqueueSnackbar } from "notistack";
import { useCallback, useState } from "react";
import { axiosInstance } from "../api/requests";

export function useGetRequest<Response>(url: string) {
  const [data, setData] = useState<Response>();
  const [isLoading, setIsLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string>();

  const execute = useCallback(async () => {
    setIsLoading(true);
    const abortController = new AbortController();
    try {
      const response = await await axiosInstance.get<Response>(url, {
        signal: abortController.signal,
      });
      setData(response.data);
    } catch (error) {
      setErrorMessage((error as AxiosError).message);
      enqueueSnackbar((error as AxiosError).message, { variant: "error" });
    } finally {
      setIsLoading(false);
    }
    return () => abortController.abort();
  }, [url]);

  return { data, isLoading, errorMessage, execute };
}
