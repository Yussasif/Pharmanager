import React from 'react'
import Logo from '../asset/Logo.jpg';


function recoverEmail() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <img src={Logo} alt="logo" />
                <h1 className=" text-3xl font-semibold text-center text-blue-400">
                    Recover Email Has Been Sent
                </h1>
                <p className="text-center p-4">Check Your Email For A Link To Reset Your Password. <br /> If It Doesn't Appear Within A Few Minutes. Check Your Spam <br /> Folder </p>
                <form className="mt-2 ml-6 pl-2">
                    <div className="mt-10 text-center pl-2">
                        <button className="w-3/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md">
                            RETURN TO SIGN IN
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}


export default recoverEmail;