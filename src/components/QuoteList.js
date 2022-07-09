import classes from "./QuoteList.module.css";
import { FaQuoteLeft } from "react-icons/fa";
import React from "react";
const QuoteList = (props) => {
  //console.log(props.quotes);
  let quoteList = <h2>No tasks found.</h2>;
  console.log(props.quoteNumber);
  if (props.quotes.length > 0) {
    props.onSelectQuote(props.quotes[props.quoteNumber].quote);
    quoteList = (
      <React.Fragment>
        <p style={{ color: props.color }} className={classes["quote-text"]}>
          <FaQuoteLeft />
          {props.quotes[props.quoteNumber].quote}
        </p>
        <p style={{ color: props.color }} className={classes.author}>
          - {props.quotes[props.quoteNumber].author}
        </p>
      </React.Fragment>
    );
  }

  let content = quoteList;

  if (props.error) content = <button onClick={props.onFetch}>Try again</button>;

  if (props.loading) content = "Loading tasks...";

  return <React.Fragment>{content}</React.Fragment>;
};

export default QuoteList;
