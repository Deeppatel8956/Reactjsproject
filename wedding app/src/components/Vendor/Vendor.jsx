import React from 'react'
import './vendor.css'
const Vendor = () => {
  return (
    <>
    <div className="ven-flex">
    <div className="ven-catgory">
        <div className="ven-ba">
        <h1>Top Wedding</h1>
        <h1>Vendor</h1>
        <h1>Categories</h1>
        <p>Mehendi</p>
        <p>in publishing and graphic design,Lorem</p>
        <p>ipsum is placeholder text commonly used</p>
        <p>to demonster the visual form of a</p>
        <p>document or a typeface without</p>
        <p>Discover More <i className="fa-solid fa-arrow-right gold"></i> </p>
        <button>View All<i className="fa-solid fa-arrow-right"></i></button>
        </div>
        
    </div>
    <div className="ven-image">
            <img src="/src/assets/images/Mehindi.png" alt="" />
        </div>
        <div className="ven-second-im">
            <img src="/src/assets/images/second.png" alt="" />
        </div>
    </div>
    </>
  )
}

export default Vendor