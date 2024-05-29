import React, { useState } from 'react'
import './gallery.css'
const items = [
    {
      id: 1,
      imageUrl: '/src/assets/images/image1.png'
    },
    {
      id: 2,
      imageUrl: '/src/assets/images/image2.png'
    },
    {
      id: 3,
      imageUrl: '/src/assets/images/image3.png'
    },
    {
      id: 4,
      imageUrl: '/src/assets/images/Sima1.png'
    },
    {
      id: 5,
      imageUrl: '/src/assets/images/Sima2.png'
    },
    {
      id: 6,
      imageUrl: '/src/assets/images/Sima3.png'
    },
  ];

  const irt=[{
    id:1,
    imaged:'/src/assets/images/Sima1.png',
    title:'Great Services with Good Quality',
    hobe:'Photographs PhotoScape',
    categary:'Lorem ipsum dolor sit amet consectetur.',
    categary2:'Lorem ipsum dolor sit amet consectetur adipisicing.',
    categary3:'Lorem ipsum dolor sit amet.',
    list1:"Pricillia Makalew",
    list2:'EhyaScape Client'
  },{
    id:2,
    imaged:'/src/assets/images/Sima2.png',
    title:'Really love the fast Delivery Photos file',
    hobe:'Service. just 48 Hours. It is Crazy',
    categary:'Lorem ipsum dolor sit amet consectetur.',
    categary2:'Lorem ipsum dolor sit amet consectetur adipisicing.',
    categary3:'Lorem ipsum dolor sit amet.',
    list1:"Pricillia Makalew",
    list2:'EhyaScape Client'
  }]
const Gallery = () => {
    const [itemed,setItemed]=useState(0)
    const [active,setActive]=useState(0)
    // second state
    const handleNextSlideSecond = () => {
        setActive((prevItem) => (prevItem === irt.length - 1 ? 0 : prevItem + 1));
      };

      const handlePreviousSlideSecond = () => {
        setActive((prevItem) => (prevItem === 0 ? irt.length - 1 : prevItem - 1));
      };  

    // first state  
    const handleNextSlide = () => {
        setItemed((prevItem) => (prevItem === items.length - 1 ? 0 : prevItem + 1));
      };
    
      const handlePreviousSlide = () => {
        setItemed((prevItem) => (prevItem === 0 ? items.length - 1 : prevItem - 1));
      };

  return (
    <>
      <div className="gallery-h">
        <h1>Gallery</h1>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti ratione incidunt eos repellendus nobis quis in architecto? Odio debitis totam reprehenderit magnam! Doloribus quo, officia facilis aliquam amet tempore illo.</p>
        <div className="gallery-im">
        <img src={items[itemed].imageUrl} alt="doesn't show image" />
        
      </div>
      <div className="gallerd">
      <button onClick={handlePreviousSlide}><i className="fa-solid fa-arrow-left"></i></button>
          <button onClick={handleNextSlide}><i className="fa-solid fa-arrow-right"></i></button>
      </div>
      </div>
      <div className="holding">
      <div className="gallery-second">
         <h1><span>"</span>What Our Customer <br /></h1>
         <h1 className='gallery-ha'>are Saying</h1>
      </div>
      <div className="flex-ga">
      <button onClick={handleNextSlideSecond} ><i className="fa-solid fa-arrow-left"></i></button>
          <button onClick={handlePreviousSlideSecond}><i className="fa-solid fa-arrow-right"></i></button>
          </div>
      </div>
      <div className="galler-second-slider">
        <span className='splider'>{irt[active].title} </span><br />
        <span className='splider'>{irt[active].hobe} </span><br />
        <span>{irt[active].categary}</span><br />
        <span>{irt[active].categary2}</span><br />
        <span>{irt[active].categary3}</span><br />
        <div className="splider-flex">
        <img src={irt[active].imaged} alt="" srcset="" />
        <ul>
            <li>{irt[active].list1}</li>
            <li>{irt[active].list2}</li>
        </ul>
        </div>
      </div>
    </>
  )
}

export default Gallery