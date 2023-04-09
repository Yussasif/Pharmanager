import React, { useState } from "react";

import Logop from "../src/assets/image 26.png"

function Tracker(props) {

    return (
        <div className="tracker">
            <div className="commonClass">

                <div className="items">
                    <p className="circle">1</p>
                    <div className="hr"></div>
                    <p className="circle">2</p>
                    <div className="hr"></div>
                    <p className="circle">3</p>
                    <div className="hr"></div>
                    <p className="circle">4</p>
                    {/* <p className="descr">kyc</p> */}
                </div>

                <div className="itemsT">
                    <p className="descr1">Kyc</p>
                    <p className="descr">Review</p>
                    <p className="descr">Payment</p>
                    <p className="descr">Complete</p>
                </div>

                {/* <div className="hr"></div> */}
            </div>

            {/* seperate */}


        </div>
    )

}


// details component

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

// input component

function Input({ label, inputType, placeHolder }) {
    return (
        <div className="input-field">
            <label htmlFor="">
                {label}
            </label>
            <input type={inputType}
                placeholder={placeHolder}

            />
        </div>
    )
}

// const nert ={ inputType, placeHolder, label }

// main componet
function Kycpage() {
    // const inputD 

    // { inputType, placeHolder, label }



    //    const [input, setInput] = useState({})



    return (
        <>
            {/* Dispensary conter component here */}
            <div className="kyc">
                <div>
                    <h1>Dispensary checkout</h1>
                    {/* tracker componenet */}
                    <Tracker />
                </div>

                <div>
                    <h2>Dispensary details</h2>
                    <Details />
                    {/* details component */}
                </div>

                <div>
                    <h1>Applicant information</h1>
                    {/* input component with props  */}

                    <form>

                        <Input
                            inputType={"text"}
                            placeHolder={""}
                            label={"Applicant type*"}
                        />

                        <span>

                            <Input
                                inputType={"text"}
                                placeHolder={"first name"}
                                label={"Applican name*"}
                            />

                            <Input
                                inputType={"text"}
                                placeHolder={"Last name"}
                                label={""}
                            />

                        </span>

                        {/* select input component for gender */}

                        <Input
                            inputType={"numeric"}
                            placeHolder={""}
                            label={"Applicant NIN"}
                        />

                        <Input
                            inputType={"date"}
                            placeHolder={"DD-MM-YYY"}
                            label={"Applicant birth date"}
                        />

                        <span>

                            <Input
                                inputType={"text"}
                                placeHolder={""}
                                label={"Prescribing health facility"}
                            />

                            <Input
                                inputType={"text"}
                                placeHolder={""}
                                label={"Recurring delivery"}
                            />

                        </span>

                        <span>


                            <Input
                                inputType={"text"}
                                placeHolder={""}
                                label={"Allergies"}
                            />
                            <Input
                                inputType={"text"}
                                placeHolder={""}
                                label={"Frequency"}
                            />
                        </span>
                        <span>


                            <Input
                                inputType={"text"}
                                placeHolder={""}
                                label={"Delivery address"}
                            />

                            <Input
                                inputType={"text"}
                                placeHolder={""}
                                label={"Duration"}
                            />
                        </span>

                        <span>

                            <Input
                                inputType={"numeric"}
                                placeHolder={"Phone no."}
                                label={"Contact phone number"}
                            />

                            <Input
                                inputType={"date"}
                                placeHolder={"DD-MM-YYY"}
                                label={"Potential inspection date"}
                            />

                        </span>

                        <button type="submit" className="review">Review</button>


                    </form>

                </div>

            </div>
        </>
    )
}

export default Kycpage;

