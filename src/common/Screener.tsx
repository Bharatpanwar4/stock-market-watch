'use client'
import Image from 'next/image';
import React, { useEffect, useState } from 'react';

const StockScreener = () => {
    const [stocks, setStocks] = useState([]);
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
                setStocks(data);
            } catch (error) {
                console.error('Error fetching the stock data:', error);
            }
        };

        fetchStocks();
    }, [apiUrl]);

    return (
        <div>
            <h1>Stock Screener</h1>
            <ul>
                {stocks.map(stock => (
                    <li key={stock.symbol} className='flex gap-3 items-center'>
                     <p className=' rounded-full   '><Image width={400} height={400} src={`https://financialmodelingprep.com/image-stock/${stock.symbol}.png`}  alt='img' className='w-12 h-12 rounded-full'/></p>   {stock?.symbol?.split('.')[0]}: {stock.price}
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default StockScreener;