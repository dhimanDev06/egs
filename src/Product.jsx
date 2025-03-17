import React from "react";
import img1 from "./assets/site_1.jpg"
import img2 from "./assets/site_2.jpg"
import img3 from "./assets/site_3.jpg"
import img4 from "./assets/site_4.jpg"
const Product = () => {
    return (
        <>
            <div className="container-xxl my-5">
                <div className="row">
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img1}
                            alt="First slide"
                        />
                        <h3 className="h5 mb-1 text-center text-capitalize">
                            children play ground with park
                        </h3>
                        <p class="text-body-secondary text-center">
                            This is a playground with various play structures, including swings, a climbing net, a tic-tac-toe board, and a small slide. There is also a bucket on the grass, which might be used for maintenance work. The surrounding area is landscaped with grass, small plants, and trees</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img2}
                            alt="First slide"
                        />
                        <h3 className="h5 mb-1 text-center text-capitalize">
                            sunken seating with vertical sculpture
                        </h3>
                        <p class="text-body-secondary text-center">
                            This sunken seating area is beautifully designed outdoor seating area with a mix of natural and artistic elements. The focal point is a decorative wall featuring a vertical garden on both sides and a central panel with an elegant metallic leaf-like sculpture. The greenery adds a refreshing and vibrant touch, while the stone bench and flooring give the space a modern yet natural aesthetic.
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img3}
                            alt="First slide"
                        />
                        <h3 className="h5 mb-1 text-center text-capitalize">
                            Feature wall with lights
                        </h3>
                        <p class="text-body-secondary text-center">

                            This Feature wall showcases a modern, geometric wall design illuminated by strategically placed lights. The lights create a striking diamond-shaped pattern, adding depth and texture to the wall.
                        </p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img4}
                            alt="First slide"
                        />
                        <h3 className="h5 mb-1 text-center text-capitalize">
                            Backyard water feature
                        </h3>
                        <p class="text-body-secondary text-center">
                            This backyard water features is a modern water fountain integrated into a landscaped outdoor area. The fountain has a sleek, rectangular granite structure with a channel that directs water into a surrounding pond. The pond contains aquatic plants like water lilies, adding a natural touch.
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;