import React, { useState } from "react";

import Details from "./details";

import Tracker from "./tracker";

import Input from "./input";






// details component



// input component



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
                    {/* <Details /> */}
                    <Details/>
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

