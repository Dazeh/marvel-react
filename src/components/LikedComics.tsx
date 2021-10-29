import React from 'react'

export default function LikedComics({likedComics}) {
    return (
        <div>
           
        Liked Comics <br />

            {likedComics.map((comic) => { 
            return <div key={comic.id}> 
                {comic.title} <br />
            </div>
            })}
        </div>
    )
}
