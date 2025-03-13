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
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img2}
                            alt="First slide"
                        />
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img3}
                            alt="First slide"
                        />
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100 h-200"
                            src={img4}
                            alt="First slide"
                        />
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Product;