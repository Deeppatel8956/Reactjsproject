import React from 'react';
import './weding.css';

const categories = [
  { name: 'Mehendi' },
  { name: 'Venues' },
  { name: 'Bridal wear' },
  { name: 'Photographer' },
  { name: 'Groom wear' },
  { name: 'Pandits' },
  { name: 'Food' },
  { name: 'Grooming' }
];

const items = [
  { id: 1, category: 'Bridal wear', image: '/src/assets/images/image1.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 2, category: 'Bridal wear', image: '/src/assets/images/image2.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 3, category: 'Bridal wear', image: '/src/assets/images/image3.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 4, category: 'Bridal wear', image: '/src/assets/images/image4.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 5, category: 'Bridal wear', image: '/src/assets/images/image5.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 6, category: 'Bridal wear', image: '/src/assets/images/image6.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 7, category: 'Bridal wear', image: '/src/assets/images/image7.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  { id: 8, category: 'Bridal wear', image: '/src/assets/images/image8.png', title: 'Lorem Ipsum', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.' },
  
];

const WeddingCategories = () => {
  return (
    <div className="wedding-categories">
      <h2>Wedding Categories</h2>
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate libero et velit interdum, ac aliquet odio mattis.</p>


      {/* categorys */}
      <div className="categorys-tabs">
        {categories.map((category, index) => (
          <div key={index} className="categorys-tab">{category.name}</div>
        ))}
      </div>



      {/* image  */}
      <div className="categorys-items">
        {items.map(item => (
          <div key={item.id} className="categorys-item">
            <h1>{item.category}</h1>
            <img src={item.image} alt={item.title} />
            <div className="item-info">
                <div className="ir">
              <h3>{item.title}</h3>
              <p>{item.description}</p>
              </div>
            </div>
          </div>
        ))}

        {/* button */}
      </div>
      <button className="view-all">View All <i className="fa-solid fa-arrow-right"></i></button>
    </div>
  );
};

export default WeddingCategories;
