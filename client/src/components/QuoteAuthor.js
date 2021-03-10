import React from 'react'
import quotes from './QuoteDB'
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

export default function QuoteAuthor(props) {

    const { quote, generateRandomQuote } = props;
    return (
        <div className="text-center">
            <h4 className="card-text ">{quote.text}</h4>
            <h5 className="card-title">- {quote.author}</h5>
            <button style={{backgroundColor: ""}}
                onClick={() => { generateRandomQuote(quotes) }}
                type="submit" className="btn">
                <FavoriteBorderIcon style= {{color: "#ffd54f"}}/></button>

        </div>
    )
}