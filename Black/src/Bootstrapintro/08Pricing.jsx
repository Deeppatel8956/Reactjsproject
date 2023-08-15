import React, { Component } from 'react';

class Pricing extends Component {
    render() {
        return (
            <>
                <section id="pricing" className="pricing">

<div className="container" data-aos="fade-up">

  <header className="section-header">
    <h2 className='fs-1'>Pricing</h2>
    <p>Check our Pricing</p>
  </header>

  <div className="row gy-4" data-aos="fade-left">

    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="100">
      <div className="box">
        <h3 >Free Plan</h3>
        <div className="price"><sup>$</sup>0<span> / mo</span></div>
        <img src="src/Bootstrapintro/img/pricing-free.png" className="img-fluid" alt=""/>
        <ul>
          <li>Aida dere</li>
          <li>Nec feugiat nisl</li>
          <li>Nulla at volutpat dola</li>
          <li className="na">Pharetra massa</li>
          <li className="na">Massa ultricies mi</li>
        </ul>
        <a href="#" className="btn-buy">Buy Now</a>
      </div>
    </div>

    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="200">
      <div className="box">
        <span className="featured">Featured</span>
        <h3 >Starter Plan</h3>
        <div className="price"><sup>$</sup>19<span> / mo</span></div>
        <img src="src/Bootstrapintro/img/pricing-starter.png" className="img-fluid" alt=""/>
        <ul>
          <li>Aida dere</li>
          <li>Nec feugiat nisl</li>
          <li>Nulla at volutpat dola</li>
          <li>Pharetra massa</li>
          <li className="na">Massa ultricies mi</li>
        </ul>
        <a href="#" className="btn-buy">Buy Now</a>
      </div>
    </div>

    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="300">
      <div className="box">
        <h3 >Business Plan</h3>
        <div className="price"><sup>$</sup>29<span> / mo</span></div>
        <img src="src/Bootstrapintro/img/pricing-business.png" className="img-fluid" alt=""/>
        <ul>
          <li>Aida dere</li>
          <li>Nec feugiat nisl</li>
          <li>Nulla at volutpat dola</li>
          <li>Pharetra massa</li>
          <li>Massa ultricies mi</li>
        </ul>
        <a href="#" className="btn-buy">Buy Now</a>
      </div>
    </div>

    <div className="col-lg-3 col-md-6" data-aos="zoom-in" data-aos-delay="400">
      <div className="box">
        <h3>Ultimate Plan</h3>
        <div className="price"><sup>$</sup>49<span> / mo</span></div>
        <img src="src/Bootstrapintro/img/pricing-ultimate.png" className="img-fluid" alt=""/>
        <ul>
          <li>Aida dere</li>
          <li>Nec feugiat nisl</li>
          <li>Nulla at volutpat dola</li>
          <li>Pharetra massa</li>
          <li>Massa ultricies mi</li>
        </ul>
        <a href="#" className="btn-buy">Buy Now</a>
      </div>
    </div>

  </div>

</div>

</section>   
            </>
        );
    }
}

export default Pricing;