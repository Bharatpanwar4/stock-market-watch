// 'use client'
// import { Input } from '@/lib/ui/input'
// import { Search } from 'lucide-react'
// import React, { useEffect, useState } from 'react'

// const GlobalSearch = () => {
//   const [searchResults, setSearchResults] = useState([]);
//   const apiKey = 'kZ6IexHXuUjq6Att1Zks89KXSy2VMvy2';
//   const searchTickerUrl = `https://financialmodelingprep.com/api/v3/search-ticker?query=AA&limit=10&exchange=BSE&apikey=${apiKey}`;

//   useEffect(() => {
//     const fetchSearchResults = async () => {
//       try {
//         const response = await fetch(searchTickerUrl);
//         if (!response.ok) {
//           throw new Error('Network response was not ok');
//         }
//         const data = await response.json();
//         setSearchResults(data);
//       } catch (error) {
//         console.error('Error fetching the search results:', error);
//       }
//     };

//     fetchSearchResults();
//   }, [searchTickerUrl]);
//   return (
//     <div className='w-1/3 relative'>
//         <Search className='text-[#7c7e8c] w-4 h-4 absolute top-3.5 left-2'/>
//           <Input className="border border-borderColor pl-8  dark:border-darkBorderColor placeholder:text-[#7c7e8c] placeholder:text-xs" placeholder="What are you looking at today?"/>

//     </div>
//   )
// }

// export default GlobalSearch

'use client'
import { Input } from '@/lib/ui/input'
import { Search } from 'lucide-react'
import Image from 'next/image'
import React, { useEffect, useState } from 'react'

const GlobalSearch = () => {
  const [searchResults, setSearchResults] = useState([]);
  const [query, setQuery] = useState(''); // State to hold the search query
  const apiKey = 'kZ6IexHXuUjq6Att1Zks89KXSy2VMvy2';

  // Function to fetch search results based on the query
  const fetchSearchResults = async (searchQuery) => {
    if (!searchQuery) return; // Prevent fetching if the query is empty
    const searchTickerUrl = `https://financialmodelingprep.com/api/v3/search-ticker?query=${searchQuery}&limit=10&exchange=BSE&apikey=${apiKey}`;
    
    try {
      const response = await fetch(searchTickerUrl);
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      const data = await response.json();
      setSearchResults(data);
      console.log('data',data);
      
    } catch (error) {
      console.error('Error fetching the search results:', error);
    }
  };

  // Effect to fetch results when the query changes
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      fetchSearchResults(query);
    }, 300); // Delay to prevent too many requests

    return () => clearTimeout(delayDebounceFn); // Cleanup on unmount
  }, [query]);

  return (
    <div className='w-1/3 relative'>
      
      <Search className='text-[#7c7e8c] w-4 h-4 absolute top-3.5 left-2'/>
      <Input
        className="border border-borderColor pl-8 dark:border-darkBorderColor placeholder:text-[#7c7e8c] placeholder:text-xs"
        placeholder="What are you looking at today?"
        value={query}
        onChange={(e) => setQuery(e.target.value)} // Update query on input change
      />

      {/* Display search results */}
      {searchResults.length > 0 && query?.length > 0 && (
        <ul className="absolute z-10 bg-white border border-gray-300 mt-1 w-full max-h-60 overflow-y-auto">
          {searchResults.map((result) => (
            <li key={result.symbol} className="p-2 hover:bg-gray-200 cursor-pointer">
              <p className=' rounded-full   '><Image width={400} height={400} src={`https://financialmodelingprep.com/image-stock/${result.symbol}.png`}  alt='img' className='w-12 h-12 rounded-full'/></p>       {result.symbol.split('.')[0]}: {result.name}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default GlobalSearch;