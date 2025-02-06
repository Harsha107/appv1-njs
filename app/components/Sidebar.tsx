import React from "react";
import pfp from '../../public/pfp-img.jpg';
import Image from "next/image";
import { FaBars, FaUsers, FaClipboardList } from "react-icons/fa";
import Link from "next/link";

export default function Sidebar() {
    return (
        <aside className="fixed left-0 top-0 h-screen w-64 bg-white p-4 border-r border-gray-100">
            <Link href='/'>
                <h2 className="text-xl font-bold">Dashboard</h2>
            </Link>

            <ul className="mt-4 space-y-2">
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                    <FaBars className="mr-2 text-lg" />
                    <Link href='/dashboard'>Overview</Link>
                </li>
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                    <FaUsers className="text-lg mr-2"/>
                    <Link href="/">Users</Link>
                </li>
                <li className="flex items-center p-2 cursor-pointer hover:bg-gray-200">
                    <FaClipboardList className="text-lg mr-2"/>
                    <Link href="/">Posts</Link>
                </li>
            </ul>

            <div className="absolute bottom-4 left-4 flex items-center space-x-2">
                <Image src={pfp} alt="profile-pic" className="w-10 h-10 rounded-full"/>
                <div>
                    <h3 className="text-sm font-semibold">John Doe</h3>
                    <p className="text-xs font-gray-500">johndoe@gmail.com</p>
                </div>
            </div>
        </aside>
    )
}