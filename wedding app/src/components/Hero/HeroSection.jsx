import React from 'react'
import './herosection.css'
const HeroSection = () => {
  return (
    <>
     <div className="hero-section">
      <div className="hero-content">
        <h1>Plan your love journey with us right by your side</h1>
        <div className="search-section">
          <div className="search-category">
            <div className="category-box">
        <span className="category-label">Category</span>
        <div className="category-content">Venues</div>
    </div>
          </div>
          <div className="category-box">
        <span className="category-label">Category</span>
        <div className="category-content">Gujarat</div>
    </div>
        </div>
        <button className="view-results-button">View results</button>
      </div>
      <div className="hero-image">
        <img src='/src/assets/images/bride.png ' alt="Bride" />
      </div>
    </div>
    </>
  )
}

export default HeroSection