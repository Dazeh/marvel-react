import {useState, useEffect} from 'react'

export const useComics = (seriesId) => {

  
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});


    useEffect(() => {

      setIsLoaded(false)
      
      fetch(`https://gateway.marvel.com:443/v1/public/series/${seriesId}/comics?apikey=f15ab39bdb06abd02556dd9ba822aecd`)
      .then(res => res.json())
      .then(
        (result) => {
        setIsLoaded(true);  
        setItems(result); 

      },
      // Note: it's important to handle errors here
      // instead of a catch() block so that we don't swallow
      // exceptions from actual bugs in components.
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      )
    }, [seriesId])


    return {
        isLoaded,
        error,
        items
    }; 
     
}
