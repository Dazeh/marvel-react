import React, {useState} from 'react'
import SeriesListings from '../components/SeriesListings';
import LikedComics from '../components/LikedComics';
import useSeries from '../hooks/useSeries';

import { LikedComicsContext } from '../App'


export const Home = () => {

    const [pageNumber, setPageNumber] = useState(0)
    const [likedComics ] = React.useContext(LikedComicsContext)

    const { 
      isLoaded, 
      error, 
      items
    } = useSeries(pageNumber);

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded || Object.keys(items).length === 0 ) {
        return <div>Loading...</div>;
    } else {
        return (
            <div className="row">

                <div className="col-sm-12 col-md-9">
                    <SeriesListings series={items.data.results} />
                
                <button onClick={()=> {setPageNumber(pageNumber + 1)}}>next</button>
                <button onClick={()=> {setPageNumber(pageNumber - 1)}}>back</button>

                </div>

                <div className="col-sm-12 col-md-3">
                    <LikedComics likedComics={likedComics}/> 
                </div>
            

        </div>
        )
    }
}
