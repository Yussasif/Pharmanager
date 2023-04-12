import React from "react"


function Input({ label, inputType, placeHolder, value }) {

    return (
        <div className="input-field">
            <label htmlFor="">
                {label}
            </label>
            <input type={inputType}
                placeholder={placeHolder}
                value={value}

            />
        </div>
    )
}

export default Input;