// Question 1: Edit the following component to prevent memory leaks and ensure proper cleanup:


import React, { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState(null);

  useEffect(() => {
    let isMounted = true // set ismounted to true in case the component unmounts before the fetch request completes

    // move async function inside useEffect for cleaner code
    const fetchData = async () => {
      // add a try catch block
      try {
        const response = await fetch('https://api.example.com/data')
        const result = await response.json()

        if(isMounted) {
          setData(result) // set the data
        }
      } catch (error) {
        console.log(error)
      }
    }

    fetchData()

    return () => {
      isMounted = false; // after it fetches the data, set ismounted to false
    };
  }, [])

  return (
    <div>
      {data ? JSON.stringify(data) : 'Loading...'}
    </div>
  )
}

export default DataFetcher;