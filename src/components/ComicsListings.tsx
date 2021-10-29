import React from 'react'
import { ComicListing } from './ComicListing'

interface Props { 
    comics: any[]
}

export const ComicsListings: React.FC <Props> = ({comics}) => {
    return (
        <div className="row">
         {comics.map((comic) => { 
            return <ComicListing key={comic.id} comic={comic}/>
         })}   
        </div>
    )
}
