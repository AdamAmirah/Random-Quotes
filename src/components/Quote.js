import classes from "./Quote.module.css";
import QuoteList from "./QuoteList";
import QuoteButtons from "./QuoteButtons";
import { useState, useEffect } from "react";
import useHttp from "../hooks/use-http";
var randomColorGen = require("randomcolor");

const Quote = () => {
  const [quotes, setQuotes] = useState([]);
  const { isLoading, error, sendRequest: fetchQuotes } = useHttp();
  const [quoteNumber, setQuoteNumber] = useState(
    Math.floor(Math.random() * 101)
  );
  const [randomColor, setRandomColor] = useState(
    "#" + Math.floor(Math.random() * 16777215).toString(16)
  );
  const [selectedQuote, setSelectedQuote] = useState("");

  useEffect(() => {
    const transformQuotes = (data) => {
      let loadedQuotes = [];
      let quoteId = 1;
      for (let quotesKey of data) {
        loadedQuotes.push({
          quoteID: quoteId,
          quote: quotesKey.quote,
          author: quotesKey.author,
        });
        quoteId++;
      }
      setQuotes(loadedQuotes);
    };

    fetchQuotes(
      {
        url: "https://gist.githubusercontent.com/natebass/b0a548425a73bdf8ea5c618149fe1fce/raw/f4231cd5961f026264bb6bb3a6c41671b044f1f4/quotes.json",
      },
      transformQuotes
    );
  }, [fetchQuotes]);

  const newQuoteHandler = (QuoteNumber) => {
    setQuoteNumber(QuoteNumber);
    setRandomColor(
      randomColorGen({
        luminosity: "dark",
        format: "rgba",
        alpha: 0.5, // e.g. 'rgba(9, 1, 107, 0.5)',
      })
    );
  };

  useEffect(() => {
    document.body.style.backgroundColor = randomColor;
  }, [randomColor]);

  return (
    <div className={classes.quote}>
      <QuoteList
        quotes={quotes}
        quoteNumber={quoteNumber}
        loading={isLoading}
        error={error}
        onFetch={fetchQuotes}
        color={randomColor}
        onSelectQuote={(data) => {
          setSelectedQuote(data);
        }}
      />
      <QuoteButtons
        quotes={quotes}
        color={randomColor}
        onNewQuote={newQuoteHandler}
        selectedQuote={selectedQuote}
      />
    </div>
  );
};

export default Quote;
