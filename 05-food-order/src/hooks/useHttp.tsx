import { useCallback, useState } from "react";

const useHttp = () => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const sendRequest = useCallback(
    async <T extends unknown>(
      url: string,
      reqConfig: RequestInit,
      onSuccess?: (data: T) => void
    ) => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(url, reqConfig);

        if (!response.ok) {
          throw new Error("Request failed!");
        }

        const data: T = await response.json();
        console.log({ data });

        if (onSuccess) onSuccess(data);
      } catch (err: any) {
        setError(err.message || "Something went wrong!");
      }
      setIsLoading(false);
    },
    []
  );

  return {
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
