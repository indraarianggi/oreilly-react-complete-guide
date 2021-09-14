import { useCallback, useReducer } from "react";

interface IState {
  status: "pending" | "completed" | null;
  data: any | null;
  error: string | null;
}

type TAction =
  | { type: "SEND" }
  | { type: "SUCCESS"; responseData: any }
  | { type: "ERROR"; errorMessage: string };

const httpReducer = (state: IState, action: TAction): IState => {
  switch (action.type) {
    case "SEND":
      return {
        data: null,
        error: null,
        status: "pending",
      };
    case "SUCCESS":
      return {
        data: action.responseData,
        error: null,
        status: "completed",
      };
    case "ERROR":
      return {
        data: null,
        error: action.errorMessage,
        status: "completed",
      };
    default:
      return state;
  }
};

const useHttp = (requestFunction: any, startWithPending: boolean = false) => {
  const [httpState, dispatch] = useReducer(httpReducer, {
    status: startWithPending ? "pending" : null,
    data: null,
    error: null,
  });

  const sendRequest = useCallback(
    async (requestData?: any) => {
      dispatch({ type: "SEND" });
      try {
        const responseData = await requestFunction(requestData);
        dispatch({ type: "SUCCESS", responseData });
      } catch (error: any) {
        dispatch({
          type: "ERROR",
          errorMessage: error.message || "Something went wrong!",
        });
      }
    },
    [requestFunction]
  );

  return {
    sendRequest,
    ...httpState,
  };
};

export default useHttp;
