import React from "react";
import { FaSearch, FaBell } from "react-icons/fa";
import Link from "next/link";

export default function Topnav() {
    return (
        <nav className="fixed top-0 left-64 right-0 h-16 bg-white flex justify-between items-center px-6 shadow-xs z-50">
            <Link href="/">
                <h2 className="text-lg font-medium">Overview</h2>
            </Link>

            <div className="flex items-center space-x-4">
                <div className="flex items-center px-4 py-2 rounded-md bg-gray-100">
                    <input type="text" placeholder="Search..." className="bg-transparent border-none outline-none text-sm w-36"/>
                    <FaSearch className="text-gray-500 ml-2"/>
                </div>
                <FaBell className="text-gray-600 text-xl cursor-pointer" />
            </div>
        </nav>
    )
}