'use client'
import React, { useEffect, useState } from 'react';

const Ticker = () => {
  const [data, setData] = useState([]);
  
  const apiKey = 'kZ6IexHXuUjq6Att1Zks89KXSy2VMvy2';
    const apiUrl = `https://financialmodelingprep.com/api/v3/stock-screener?exchange=BSE&apikey=${apiKey}`;

    useEffect(() => {
        const fetchStocks = async () => {
            try {
                const response = await fetch(apiUrl);
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                const data = await response.json();
                setData(data);
            } catch (error) {
                console.error('Error fetching the stock data:', error);
            }
        };

        fetchStocks();
    }, [apiUrl]);
 

  return (
    <div className="ticker-container">
      <div className="ticker">
        {data.map((item, index) => (
          <div key={index} className="ticker-item">
            {item.title} - {item.price} {item.change}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Ticker;