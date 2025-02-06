import React from "react";
import Link from "next/link";

export default function Home() {
  return (
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-transparent">
      <main className="flex flex-1 justify-center flex-col w-96 shadow-md bg-white rounded-lg p-4">
        <div className="p-4 rounded-3xl">
          <div className="flex flex-col items-center pb-4">
            <h2 className="font-bold text-2xl">Welcome back</h2>
            <p className="text-xm text-gray-400 mt-1">Please enter your details</p>
          </div>

          <div className="mt-4 flex flex-col">
            <label className="font-medium">Email</label>
            <input 
              type="email" 
              placeholder="Enter your mail..."
              className="p-2"
            />
          </div>

          <div className="mt-4 flex flex-col">
            <label className="font-medium">Password</label>
            <input 
              type="password"
              placeholder="Enter your password..."
              className="p-2"
            />
          </div>

          <div className="flex justify-between items-center mt-4 text-sm">
            <label className="flex items-center gap-1">
              <input type="checkbox" />
              Remember me!
            </label>
            <Link href="/" className="text-blue-600 no-underline hover:underline">Forgot Passowrd?</Link>
          </div>

          <button className="w-full bg-black text-white p-2 mt-4 cursor-pointer rounded transition-opacity duration-200 ease-in-out hover:opacity-80">
            Sign in
          </button>

          <p className="text-center text-sm mt-4">
            Dont have an account?
            <Link href="/" className="ml-1 text-blue-600 no-underline hover:underline">Sign up!</Link>
          </p>
        </div>
      </main>
    </div>
  )
}