import React from 'react'
import SeriesListing from './SeriesListing'

export default function SeriesListings({series}) {
  
    return (
        <div className="row">
                
            {series.map(item => (
                <SeriesListing key={item.id}  series={item}     /> 
            ))}
            
        </div>
    )
}
