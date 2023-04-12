import React from "react";
import Kycpage from "./kyc";
import Details from "./details";
import Tracker from "./tracker";
import Input from "./input";

function Review () {

    return (

        <>

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
                    value={"Individual"}
                />

                <span>

                    <Input
                        inputType={"text"}
                        placeHolder={"first name"}
                        label={"Applican name*"}
                        value={"Ajibola"}
                    />

                    <Input
                        inputType={"text"}
                        placeHolder={"Last name"}
                        label={""}
                        value={"Quadric"}
                    />

                </span>

                {/* select input component for gender */}

                <Input
                    inputType={""}
                    placeHolder={""}
                    label={"Applicant NIN"}
                    value={"123456789"}
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
                        value={"Quadri ltd"}
                        
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

                <button type="submit">Edit</button>

                <button type="submit" className="review">Review</button>


            </form>

        </div>

    </div>
</>
    )
    
}

export default Review