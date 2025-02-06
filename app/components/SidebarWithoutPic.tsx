import React from "react";
import { FaBars, FaUsers, FaClipboardList } from "react-icons/fa";
import Link from "next/link";

export default function SidebarWithoutPic() {
    return (
        <aside className="fixed w-64 bottom-0 top-0 p-4 bg-white h-screen border-r border-gray-100">
            <Link href="/">
                <h2 className="font-bold text-xl">Dashboard</h2>
            </Link>

            <ul className="mt-4 space-y-2">
                <li className="flex items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <FaBars className="mr-2 text-lg"/>
                    <Link href="/">Overview</Link>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <FaUsers className="mr-2 text-lg"/>
                    <Link href="/user-list">Users</Link>
                </li>
                <li className="flex items-center p-2 hover:bg-gray-300 cursor-pointer">
                    <FaClipboardList className="mr-2 text-lg"/>
                    <Link href="/posts">Posts</Link>
                </li>
            </ul>
        </aside>
    )
}