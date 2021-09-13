import { Route } from "react-router-dom";
import { useParams, useRouteMatch } from "react-router";
import { TRouteParams } from "../App";
import Comments from "../components/comments/Comments";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams<TRouteParams>();

  return (
    <>
      <h1>Quote Detail</h1>
      <p>{params.quoteId}</p>

      <Route path={`${match.url}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
