import React, { useEffect, useState } from "react";
import Slider from "react-slick"; // Import React Slick
import ApiService from "./service/apiService";
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

  const [serviceList, setServiceList] = useState([]);
  
    useEffect(() => {
      ApiService.getServices().then((res) => {
        if (res.status === 200) {
          setServiceList(res.data.data);
          console.log(res.data.data)
        }
      }).catch((er) => {
        console.log(er);
      });
    }, []);
  return (
    <div className="container-xxl my-5">
      <Slider {...settings}>
        {serviceList.map((service, index) => (
          <div key={index} className="px-2">
            <img
              className="d-block product-image"
              src={'https://everestgreenscapegroup.com/backend/' +service.image_path}
              alt={service.short_description}
            />
            <h3 className="h5 mt-2 text-center text-capitalize">
              {service.short_description}
            </h3>
            <p className="text-body-secondary text-center">{service.long_description}</p>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Product;
