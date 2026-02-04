import React from "react"
import { useNavigate } from "react-router-dom"

const Registration = () => {

const navigate=useNavigate()

  return (
    <div className="min-h-screen flex items-center justify-center bg-white">
      <div className="w-full max-w-md px-6">
        <h1 className="text-3xl font-semibold mb-2">Create an account</h1>
        <p className="text-gray-500 mb-6">Enter your details below</p>

        <div className="space-y-4">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
          <input
            type="text"
            placeholder="Email or phone number"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:border-yellow-500"
          />
        </div>

        <button className="w-full mt-6 bg-yellow-500 text-white py-3 rounded-md hover:bg-yellow-600 transition">
          Create Account
        </button>

        <button className="w-full mt-4 border border-gray-300 py-3 rounded-md flex items-center justify-center gap-2 hover:bg-gray-50 transition">
          <span className="text-lg font-bold text-yellow-500">G</span>
          Sign up with Google
        </button>

        <p className="text-center text-gray-500 mt-6">
          Already have account?{" "}
          <span onClick={()=> navigate("/login")} className="text-black underline cursor-pointer">Log in</span>
        </p>
      </div>
    </div>
  )
}

export default Registration
