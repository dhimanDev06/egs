import React from "react";
import Slider from "react-slick"; // Import React Slick
import img1 from "./assets/site_1.jpg";
import img2 from "./assets/site_2.jpg";
import img3 from "./assets/site_3.jpg";
import img4 from "./assets/site_4.jpg";
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
const Product = () => {
  const settings = {
    dots: false, // Show navigation dots
    infinite: true, // Infinite looping
    speed: 500, // Animation speed
    slidesToShow: 4, // Show 4 slides at a time
    slidesToScroll: 1, // Scroll 1 slide at a time
    autoplay: true, // Auto-slide
    autoplaySpeed: 3000, // Auto-slide interval (in ms)
    responsive: [
      {
        breakpoint: 1024, // For tablets
        settings: {
          slidesToShow: 3, // Show 3 slides at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, // For mobile
        settings: {
          slidesToShow: 2, // Show 2 slides at a time
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480, // For small screens
        settings: {
          slidesToShow: 1, // Show 1 slide at a time
          slidesToScroll: 1,
        },
      },
    ],
  };

  const products = [
    {
      img: img1,
      title: "Children Playground with Park",
      description:
        "This is a playground with various play structures, including swings, a climbing net, a tic-tac-toe board, and a small slide.",
    },
    {
      img: img2,
      title: "Sunken Seating with Vertical Sculpture",
      description:
        "A beautifully designed outdoor seating area featuring a vertical garden and metallic leaf-like sculpture.",
    },
    {
      img: img3,
      title: "Feature Wall with Lights",
      description:
        "A modern, geometric wall design illuminated by strategically placed lights, creating a striking diamond pattern.",
    },
    {
      img: img4,
      title: "Backyard Water Feature",
      description:
        "A sleek, rectangular granite fountain surrounded by a pond with aquatic plants like water lilies.",
    }
  ];

  return (
    <div className="container-xxl my-5">
      <Slider {...settings}>
        {products.map((product, index) => (
          <div key={index} className="px-2">
            <img
              className="d-block product-image"
              src={product.img}
              alt={product.title}
            />
            <h3 className="h5 mt-2 text-center text-capitalize">
              {product.title}
            </h3>
            <p className="text-body-secondary text-center">{product.description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Product;
