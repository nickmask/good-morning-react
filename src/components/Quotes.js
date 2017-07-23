import React, { Component } from 'react';
import quotes from '../quotes.json'

class Quotes extends Component {

    getRandomQuote = () => {
        return quotes[Math.floor(Math.random() * 102) + 1 ]
    }
    render() {
        setInterval(this.getTime, 1000)

        return (
            <div className='time'>
                {this.getRandomQuote()[0]}
            </div>
        );
    }
}

export default Quotes;
