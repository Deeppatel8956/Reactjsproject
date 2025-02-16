import React from 'react'
import './SearchVideocard.css'
const SearchVideocard = ({
    image,
    views,
    subs,
    channel,
    description,
    timestamp,
    title
}) => {
  return (
    <>
    <div className="searchVideocard">
        <img src={image} alt="" />
        <div className="serachVideocardText">
            <h3>{title}</h3>
            <p className="searchVideocardChannel">
             {channel}
             <span className='searchVideocardsubs'>
                <span className='searchVideocardsubno'>{subs}</span>
             </span>
            subscriber {views} views . {timestamp}
        </p>
        <p className='searchedVideoCardDescription'>{description}</p>
        </div>
        
    </div></>
  )
}

export default SearchVideocard