import React from "react";
import img4 from "./assets/img4.png"
import img5 from "./assets/img5.png"
const Product = () => {
    return (
        <>
            <div className="container-xxl my-5">
                <div className="row">
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="First slide"
                        />
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="First slide"
                        />
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100"
                            src={img5}
                            alt="First slide"
                        />
                        <h3 class="h5 mb-1 text-center">
                            Cover
                        </h3>
                        <p class="text-body-secondary text-center">A one-page template for building simple and beautiful home pages.</p>
                    </div>
                    <div className="col-sm-6 col-md-3 mb-3">
                        <img
                            className="d-block w-100"
                            src={img5}
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