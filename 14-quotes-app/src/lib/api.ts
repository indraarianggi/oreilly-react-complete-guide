import { IComment } from "../components/comments/Comments";
import { IQuote } from "../components/quotes/QuoteList";

const FIREBASE_DOMAIN =
  "https://oreily-react-http-default-rtdb.asia-southeast1.firebasedatabase.app/";

interface IGetAllQuotesResponse {
  [key: string]: Omit<IQuote, "id">;
}

interface IGetSingleQuoteResponse extends Omit<IQuote, "id"> {}

interface IAddQuoteResponse {
  name: string;
}

interface IGetAllCommentsReponse {
  [key: string]: string;
}

export const getAllQuotes = async (): Promise<IQuote[]> => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`);

  if (!response.ok) {
    throw new Error("Could not fetch quotes.");
  }

  const data: IGetAllQuotesResponse = await response.json();

  const transformedQuotes: IQuote[] = [];

  for (const key in data) {
    const quoteObj: IQuote = {
      id: key,
      ...data[key],
    };

    transformedQuotes.push(quoteObj);
  }

  return transformedQuotes;
};

export const getSingleQuote = async (quoteId: string): Promise<IQuote> => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes/${quoteId}.json`);

  if (!response.ok) {
    throw new Error("Could not fetch quote.");
  }

  const data: IGetSingleQuoteResponse = await response.json();

  const loadedQuote: IQuote = {
    id: quoteId,
    ...data,
  };

  return loadedQuote;
};

export const addQuote = async (
  quoteData: Omit<IQuote, "id">
): Promise<null> => {
  const response = await fetch(`${FIREBASE_DOMAIN}/quotes.json`, {
    method: "POST",
    body: JSON.stringify(quoteData),
    headers: {
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    throw new Error("Could not create quote.");
  }

  return null;
};

export const addComment = async (inputData: {
  commentText: Omit<IComment, "id">;
  quoteId: string;
}): Promise<{ commentId: string }> => {
  const response = await fetch(
    `${FIREBASE_DOMAIN}/comments/${inputData.quoteId}.json`,
    {
      method: "POST",
      body: JSON.stringify(inputData.commentText),
      headers: {
        "Content-Type": "application/json",
      },
    }
  );

  if (!response.ok) {
    throw new Error("Could not add comment.");
  }

  const data: IAddQuoteResponse = await response.json();

  return { commentId: data.name };
};

export const getAllComments = async (quoteId: string): Promise<IComment[]> => {
  const response = await fetch(`${FIREBASE_DOMAIN}/comments/${quoteId}.json`);

  if (!response.ok) {
    throw new Error("Could not get comments.");
  }

  const data: IGetAllCommentsReponse = await response.json();

  const transformedComments: IComment[] = [];

  for (const key in data) {
    const commentObj = {
      id: key,
      text: data[key],
    };

    transformedComments.push(commentObj);
  }

  return transformedComments;
};
