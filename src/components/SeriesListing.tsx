import React from 'react'
import { Link } from 'react-router-dom';

export default function SeriesListing({ series }) {

    
 
    return (
        <Link to={'/series/' + series.id} className="col-sm-12 col-md-4 col-lg-3 ">

            <div className="card p-2 text-center">

                <img src={series.thumbnail.path + "/portrait_xlarge.jpg"} alt="" />
                <span className="my-2">{series.title} </span>
                
                
            </div>
        </Link>
    )
}
