import React from 'react'
import Logo from '../asset/Logo.jpg';


function RecoverPassword() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <img src={Logo} alt="logo" />
                <h1 className=" text-3xl font-semibold text-center text-blue-400">
                    Recover Password
                </h1>
                <p className="text-center p-4">Enter Your User Account's Verified <br /> Email Address and We Will Send <br /> You A Password Reset Link </p>
                <form className="mt-2 ml-6 pl-2">
                    <div className="mb-2">
                        <label for="email" className="text-gray-500 block text-sm font-semibold" >
                            Email
                        </label>
                        <input type="email" placeholder="Enter email address" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mt-10 text-center pl-2">
                        <a href="/recoverEmail">
                            <button className="w-3/5 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md">
                                SEND PASSWORD RESET EMAIL
                            </button>
                        </a>

                    </div>
                </form>
            </div>
        </div>
    )
}

export default RecoverPassword;