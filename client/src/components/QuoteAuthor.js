import React from 'react'
import quotes from './QuoteDB'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function QuoteAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="text-center">
            <h1 className="card-text ">{quote.text}</h1>
            <h3 className="card-title">- {quote.author}</h3>
            <button style={{backgroundColor: ""}}
                onClick={() => { generateRandomQuote(quotes) }}
                type="submit" className="btn">
                <FavoriteBorderIcon style= {{color: "#ffd54f", fontSize:"80" }}/></button>

        </div>
    )
}