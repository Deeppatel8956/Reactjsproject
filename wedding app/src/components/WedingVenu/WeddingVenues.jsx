import React, { useState } from 'react';
import './wedinvenu.css';
import Vendor from '../Vendor/Vendor';

const items = [
  {
    id: 1,
    imageUrl: '/src/assets/images/Udaipur.png'
  },
  {
    id: 2,
    imageUrl: '/src/assets/images/Udaipur.png'
  },
  {
    id: 3,
    imageUrl: '/src/assets/images/image3.png'
  },
];

const WeddingVenues = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleNextSlide = () => {
    setActiveItem((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
  };

  const handlePreviousSlide = () => {
    setActiveItem((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
  };

  return (
    <>
      <div className="categoryed-we">
        <h1>Top Wedding Venues</h1>
        <img src={items[activeItem].imageUrl} alt="Wedding venue" />
        <div className="categoryed-but">
          <button onClick={handlePreviousSlide}><i className="fa-solid fa-arrow-left"></i></button>
          <button onClick={handleNextSlide}><i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="categoryed-view">
            <button>View All <i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>
      <Vendor/>
    </>
  );
};

export default WeddingVenues;
