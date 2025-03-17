import React from 'react';
import Carousel from 'react-bootstrap/Carousel';
import img1 from "./assets/banner_1.jpg"
import img2 from "./assets/banner_2.jpg"
import img3 from "./assets/banner_3.jpg"

function Banner() {
  return (
    <div className="container mt-4">
    <Carousel className="w-100">
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='banner-title'>Water feature- Lotus pond</h3>
          <p className='banner-desc'>A water feature can add beauty, tranquility, and a sense of serenity to any garden or outdoor space. It’s beautifully designed water feature with a floating white lotus-like structure made of marble.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h3 className='banner-title'>Feature wall</h3>
          <p  className='banner-desc'>A feature wall for a garden can be a beautiful focal point that enhances the overall look of your outdoor space.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 img-fluid"
          src={img3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h3 className='banner-title'>Pavillion garden area</h3>
          <p  className='banner-desc'>A pavilion in a garden area is a wonderful way to create a serene and functional outdoor space, ideal for relaxing.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </div>
  );
}

export default Banner;
