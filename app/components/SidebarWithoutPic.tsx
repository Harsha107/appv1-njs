import React from "react";
import { FaBars, FaUsers, FaClipboardList } from "react-icons/fa";

export default function SidebarWithoutPic() {
    return (
        <aside className="fixed w-64 bottom-0 top-0 p-4 bg-white h-screen border-r border-gray-100">
            <a href="/">
                <h2 className="font-bold text-xl">Dashboard</h2>
            </a>

            <ul className="mt-4 space-y-2">
                <li className="flex items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <FaBars className="mr-2 text-lg"/>
                    <a href="/">Overview</a>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <FaUsers className="mr-2 text-lg"/>
                    <a href="/">Users</a>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <FaClipboardList className="mr-2 text-lg"/>
                    <a href="/posts">Posts</a>
                </li>
            </ul>
        </aside>
    )
}