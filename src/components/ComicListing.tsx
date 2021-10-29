import React, {FC}from 'react'
import { LikedComicsContext } from '../App'

interface Props { 
    comic: string[]
}

export const ComicListing: FC<Props> = ({comic}) => {
  
   
    const [likedComics, setLikedComics] = React.useContext<object[]>(LikedComicsContext)

    function handleAdd() {

        // const items =  [comic, ...likedComics];
 
        // const uniqueLikedComics = [...new Set(items.map(a => a.id))]
        // .map(id => {
        //      return items.find(a => a.id === id)
        // })

        // setLikedComics(uniqueLikedComics)
 
    }

    function handleRemove(id:number) { 
        
       const newList = likedComics.filter((item:any) => item.id !== id);
       
       setLikedComics(newList);
    }

    function toggleShow() { 
        return likedComics.indexOf(comic) > -1 ? true : false; 
    }

    return (
        <>
          <div className="col-sm-12 col-md-4 col-lg-3 ">

            <div className="card p-2 text-center">

                <img src={comic.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
                <span className="my-2">{comic.title} </span>
                <button className={toggleShow() ? 'd-block btn btn-danger' : 'd-none'  } onClick={() => handleRemove(comic.id)}>&times;</button>
                 <button className={toggleShow() ? 'd-none'  : 'd-block btn btn-primary'} onClick={handleAdd}>Like!</button>
            </div>
        </div>   
            
        </>
    )
}
