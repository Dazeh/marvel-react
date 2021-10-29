import React from 'react'
import { useParams } from "react-router-dom"

import { ComicsListings } from '../components/ComicsListings';
import LikedComics from '../components/LikedComics'

import { useComics } from '../hooks/useComics';

import { LikedComicsContext } from '../App'


export const Series = () => {
    const {likedComics} = React.useContext<{likedComics: string[]}>(LikedComicsContext)

    let { seriesId } = useParams<{seriesId: string}>();

    const { 
        error, 
        isLoaded,
        items
    } = useComics(seriesId)

    if (error) {
        return <div>Error: {error.message}</div>;
    } else if (!isLoaded || Object.keys(items).length === 0 ) {
        return <div>Loading...</div>;
    } else {

    return (

        <div className="row">
            <div className="col-sm-12 col-md-9">
                <ComicsListings comics={items.data.results}/>
            </div>
            
            <div className="col-sm-12 col-md-3">
                <LikedComics likedComics={likedComics}/> 
            </div>
        </div>
    )
    }
}
