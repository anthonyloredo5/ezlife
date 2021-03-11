import React, { Component } from 'react'
import QuoteAuthor from './QuoteAuthor';
import quotes from './QuoteDB';

export default class Quote extends Component {

  //state
  state = {
    text: quotes[0].text,
    author: quotes[0].author
  }

  //generate diffrent quote function
  generateRandomQuote = (arr) => {
    //get random numbers
    let num = Math.floor(Math.random() * quotes.length)

    let newQuote = quotes[num];

    //update state
    this.setState({
      text: newQuote.text,
      author: newQuote.author
    })

    this.shuffleQuotes(quotes)

  }

  //shuufle quotes function
  shuffleQuotes = (arr) => {
    return arr.sort(function () { return 0.5 - Math.random() });
  }

  render() {
    return (
      <div className="container">
       
        <QuoteAuthor
          generateRandomQuote={this.generateRandomQuote}
          quote={this.state} 
        />
        
      </div>
    )
  }
}