import { Link } from "react-router-dom";
import styles from "./NoQuotesFound.module.css";

const NoQuotesFound = () => {
  return (
    <div className={styles.noquotes}>
      <p>No quotes found!</p>
      <Link to="/new-quote" className="btn">
        Add a Quote
      </Link>
    </div>
  );
};

export default NoQuotesFound;
