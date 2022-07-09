import classes from "./QuoteButtons.module.css";
import { FaTwitter } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";

const QuoteButtons = (props) => {
  const generateHandler = () => {
    let randomeNumber = Math.floor(Math.random() * 101);
    props.onNewQuote(randomeNumber);
  };
  return (
    <>
      <div className={classes.btns}>
        <a
          href={encodeURI(
            `https://twitter.com/intent/tweet?text=${props.selectedQuote}&hashtags=thewebdevcoach`
          )}
        >
          <button
            style={{ backgroundColor: props.color }}
            type="button"
            rel="noopener"
            className={classes.twitter}
          >
            <FaTwitter />
          </button>
        </a>

        <a
          href={encodeURI(
            `https://www.facebook.com/dialog/feed?text=${props.selectedQuote}`
          )}
        >
          <button
            style={{ backgroundColor: props.color }}
            type="button"
            rel="noopener"
            className={classes.facebook}
          >
            <FaFacebook />
          </button>
        </a>

        <button
          style={{ backgroundColor: props.color }}
          className={classes["new-quote"]}
          type="submit"
          onClick={generateHandler}
        >
          New Quote
        </button>
      </div>
    </>
  );
};

export default QuoteButtons;
