import React from 'react'
import Logo from '../asset/Logo.jpg';

function Signin() {
    return (
        <div className="relative flex flex-col justify-center min-h-screen overflow-hidden">
            <div className="w-full p-6 m-auto bg-white rounded-md shadow-xl lg:max-w-xl">
                <img src={Logo} alt="logo" />
                <h1 className=" text-3xl font-semibold text-center text-blue-400">
                    Sign-In
                </h1>
                <p className="text-center p-4">Sign in to your Pharmanager account</p>
                <form className="mt-6">
                    <div className="mb-2">
                        <label for="email" className="text-gray-500 block text-sm font-semibold" >
                            Email/Unique Numeric Identifier
                        </label>
                        <input type="email" placeholder="Enter Business Address" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="mb-2">
                        <label for="password" className=" text-gray-500 block text-sm font-semibold">
                            Password
                        </label>
                        <input type="password" placeholder="***************" className="block w-full px-4 py-2 mt-2 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" />
                    </div>
                    <div className="text-sm text-end">
                        <a href="/RecoverPassword" className="text-blue-500 hover:underline mt-6">
                            Forgot Password?
                        </a>

                    </div>
                    <div className="mt-6 text-center">
                        <button className="w-2/4 px-4 py-2 tracking-wide text-white transition-colors duration-200 transform bg-blue-500 rounded-md">
                            SIGN IN
                        </button>
                    </div>
                </form>
                <p className="mt-8 text-xs font-light text-center text-gray-500">
                    {" "}
                    Don't Have An Account?{" "}
                    <a
                        href="/SignUp"
                        className="font-medium text-blue-500 hover:underline"
                    >
                        Sign Up
                    </a>
                </p>
                <div className="relative flex items-center justify-center w-full mt-9 border border-t">
                    <div className="absolute px-5 bg-white text-gray-500 mb-4">Or sign up with</div>
                </div>
                <div className="flex mt-4 gap-x-2">
                    <button type="button" className="flex items-center justify-center w-full p-2 border border-gray-600 rounded-md text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 32 32"
                            className="w-5 h-5 mr-3">
                            <path d="M16.318 13.714v5.484h9.078c-0.37 2.354-2.745 6.901-9.078 6.901-5.458 0-9.917-4.521-9.917-10.099s4.458-10.099 9.917-10.099c3.109 0 5.193 1.318 6.38 2.464l4.339-4.182c-2.786-2.599-6.396-4.182-10.719-4.182-8.844 0-16 7.151-16 16s7.156 16 16 16c9.234 0 15.365-6.49 15.365-15.635 0-1.052-0.115-1.854-0.255-2.651z"></path>
                        </svg>
                        Sign with Google

                    </button>
                    <button className="flex items-end justify-center w-full p-2 border border-gray-600 rounded-md text-gray-500">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 mr-3"
                            fill="blue"
                            viewBox="0 0 24 24">
                            <path
                                d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                        </svg>
                        Sign with Facebook
                    </button>
                </div>
            </div>
        </div>
    );
}
export default Signin;