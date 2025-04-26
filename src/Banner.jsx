import React, { useEffect, useState } from "react";
import ApiService from "./service/apiService";
import Carousel from 'react-bootstrap/Carousel';

function Banner() {
  const [bannerList, setBannerList] = useState([]);

  useEffect(() => {
    ApiService.getBanner().then((res) => {
      if (res.status === 200) {
        setBannerList(res.data.data);
      }
    }).catch((er) => {
      console.log(er);
    });
  }, []);

  return (
    <div className="container mt-4">
      <Carousel className="w-100">
        {bannerList.map((banner) => (
          <Carousel.Item key={banner.id}>
            <img
              className="d-block w-100 img-fluid"
              src={'https://everestgreenscapegroup.com/backend/' + banner.image_path}
              alt={banner.short_desc || "Banner image"}
            />
            <Carousel.Caption>
              <h3 className="banner-title">{banner.short_desc}</h3>
              <p className="banner-desc">{banner.description}</p>
            </Carousel.Caption>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
}

export default Banner;
