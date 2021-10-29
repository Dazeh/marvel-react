import  {useState, useEffect} from 'react'


export default function useSeries(pageNumber) {


    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [items, setItems] = useState({});


    useEffect(() => {
 
      const offset = pageNumber * 20; 

      console.log(offset);

      setIsLoaded(false)
      
      fetch("https://gateway.marvel.com:443/v1/public/series?apikey=f15ab39bdb06abd02556dd9ba822aecd&offset=" + offset)
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
    }, [pageNumber])


    return {
        isLoaded,
        error,
        items
    }; 
}
