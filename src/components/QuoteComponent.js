import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './QuoteComponent.css'; 

const QuoteComponent = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    try {
      const response = await axios.get('https://api.quotable.io/random');
      const data = response.data;
      setQuote(data.content + ' - ' + data.author);
    } catch (error) {
      console.error('Error fetching quote:', error);
    }
  };

  useEffect(() => {
    fetchQuote(); // Fetch initial quote

    const interval = setInterval(() => {
      fetchQuote(); 
    }, 10000);

    return () => {
      clearInterval(interval); // Clear the interval on component unmount
    };
  }, []);

  return (
    <div className="quote-container">
      <div className="quote-box">
        <h2>Quote of the Day!🥀</h2>
        <p>{quote}</p>
      </div>
    </div>
  );
};

export default QuoteComponent;
