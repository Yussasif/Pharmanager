import React from "react";
import Logop from "../src/assets/image 26.png"

function Details() {
    return (
        <>
            <h1>Dispensary counter Details</h1>


            <div className="card-container">
                <div className="productD">
                    <img src={Logop} alt="product" />
                    <div className="text-descr">
                        <h3 className="product-name">Penicillin ointment</h3>
                        <p className="pharm-addr">Rx pharmacy, oshodi</p>
                        <p className="drop">20mmg 11 Tubes drops per use</p>
                        <p className="link"><a href="#">View dispensary details</a></p>

                        <div className="absolute">
                            <p className="prz">$20.00</p>
                            <p>Available</p>
                        </div>
                    </div>
                </div>

                {/* second card */}
                <div className="counterD">
                    <p className="card-header">Quantity</p>

                    <div className="count">
                        <p className="qualityd">1</p>
                        <div className="btn">

                            <button>-</button>
                            <button>+</button>
                        </div>

                    </div>

                </div>

                {/* third card */}
                <div className="due">
                    <p className="card-header">Total fee</p>
                    <p>Due today</p>
                    <p className="price">$40.00</p>
                </div>




            </div>

        </>
    )

}
export default Details