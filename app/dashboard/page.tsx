"use client";

import React, { useState } from "react";
import pfp from '../../public/pfp-img.jpg';
import Image from "next/image";
import Link from "next/link";
import { FaSearch } from "react-icons/fa";

export default function DashboardOverview() {
    const [filter, setFilter] = useState("Today");

    const activityData = {
        Today: [
            { text: "John Doe created a new post", time: "2 minutes ago" },
            { text: "Jane Smith registered", time: "15 minutes ago" },
            { text: "Mike Johnson updated their profile", time: "1 hour ago" }
        ],
        Yesterday: [
            { text: "John Doe created a new post", time: "1 day ago" },
            { text: "Jane Smith registered", time: "1 day go" },
            { text: "Mike Johnson updated their profile", time: "1 day ago" }
        ],
        "Last 2 Weeks": [
            { text: "John Doe created a new post", time: "2 weeks ago" },
            { text: "Jane Smith registered", time: "2 weeks ago" },
            { text: "Mike Johnson updated their profile", time: "2 weeks ago" }
        ]
    };

    const usersData = {
        Today: [
            { name: "John Doe", username: "@johndoe", email: "johndoe@example.com", status: "Active", joined: "Jan 15, 2024" },
            { name: "Jane Smith", username: "@janesmith", email: "janesmith@example.com", status: "Pending", joined: "Jan 14, 2024" }
        ],
        Yesterday: [
            { name: "Mike Johnson", username: "@mikejohnson", email: "mikejohnson@example.com", status: "Active", joined: "Jan 13, 2024" }
        ],
        "Last 2 Weeks": [
            { name: "John Doe", username: "@johndoe", email: "johndoe@example.com", status: "Active", joined: "Jan 15, 2024" },
            { name: "Jane Smith", username: "@janesmith", email: "janesmith@example.com", status: "Pending", joined: "Jan 14, 2024" },
            { name: "Mike Johnson", username: "@mikejohnson", email: "mikejohnson@example.com", status: "Active", joined: "Jan 13, 2024" }
        ]
    }

    const cardData = {
        Today: [
            {title: "Total Users", count: "1,482", subtext: "users", popup: "+12%"},
            {title: "New Users", count: "142", subtext: "this period", popup: "+8%"},
            {title: "Total Posts", count: "3,642", subtext: "posts", popup: "+24%"},
            {title: "New Posts", count: "264", subtext: "this period", popup: "+18%"}
        ],
        Yesterday: [
            {title: "Total Users", count: "1,340", subtext: "users", popup: "+10%"},
            {title: "New Users", count: "40", subtext: "this period", popup: "+6%"},
            {title: "Total Posts", count: "3,378", subtext: "posts", popup: "+22%"},
            {title: "New Posts", count: "150", subtext: "this period", popup: "+16%"}
        ],
        "Last 2 Weeks": [
            {title: "Total Users", count: "1,482", subtext: "users", popup: "+20%"},
            {title: "New Users", count: "900", subtext: "this period", popup: "+16%"},
            {title: "Total Posts", count: "3,642", subtext: "posts", popup: "+30%"},
            {title: "New Posts", count: "2,000", subtext: "this period", popup: "+24%"}
        ]
    }

    return (
        <div className="bg-transparent mt-16 ml-0 2xl:ml-64">
            <main className="bg-transparent flex flex-col justify-between m-4">
                <div className="bg-white flex items-center h-16 p-3 w-full mt-5 shadow-md rounded-lg">
                    <div className="flex gap-6">
                        {["Today", "Yesterday", "Last 2 Weeks"].map((tab) => (
                            <button
                                key={tab}
                                className={`px-4 py-2 text-sm rounded-md bg-gray-200 text-gray-700 cursor-pointer transition-all ${
                                    filter === tab ? "tab-active" : ""
                                }`}
                                onClick={() => setFilter(tab)}
                            >
                                {tab}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="bg-transparent w-full mt-5">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                        {cardData[filter as keyof typeof cardData]?.map((activity: {title: string, count: string, subtext: string, popup: string}, index: number) => (
                            <div key={index} className="bg-white shadow-md rounded-lg flex-1 py-6 px-4 flex flex-row justify-between">
                                <div className="flex flex-col gap-2 justify-between">
                                    <span className="font-light">{activity.title}</span>
                                    <div className="flex flex-row gap-2">
                                        <span className="font-bold text-2xl">{activity.count}</span>
                                        <span className="font-extralight text-xs mt-3">{activity.subtext}</span>
                                    </div>
                                </div>
                                <span className="bg-green-100 text-xs p-1 text-green-600 w-10 h-6 rounded-full">{activity.popup}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-white w-full mt-5 p-4 rounded-lg shadow-md">
                    <h3 className="font-bold mb-12 text-lg">Recent Activity</h3>
                    <ul className="list-none">
                        {activityData[filter as keyof typeof activityData]?.map((activity: {text: string, time: string}, index: number) => (
                            <li key={index} className="flex flex-row gap-2 mb-4">
                                <Image src={pfp} alt="User" className="w-12 h-12 rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="text-gray-900">{activity.text}</span>
                                    <span className="text-gray-600 text-sm">{activity.time}</span>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>

                <div className="bg-white shadow-md rounded-lg mt-4 flex flex-row justify-between items-center p-4">
                    <div>
                        <h1 className="font-bold text-sm 2xl:text-lg">User List</h1>
                        <p className="font-extralight text-xs 2xl:text-sm">Manage and view all registered users</p>
                    </div>
            
                    <div className="flex flex-row gap-8 2xl:gap-4 items-center">
                        <div className="flex flex-row gap-2 2xl:px-4 2xl:py-2">
                            <input type="text" placeholder="Search user..." className="bg-transparent border-none outline-none text-xs 2xl:text-sm w-20 2xl:w-36" />
                            <FaSearch className="text-xs text-gray-500 2xl:text-base 2xl:ml-2"/>
                        </div>
                        <button className="bg-black text-white text-xs 2xl:text-sm p-2 rounded-lg hover:bg-white hover:text-black hover:border hover:border-black ">
                            Add User
                        </button>
                    </div>
                </div>

                <div className="bg-white w-full mt-5 shadow-md rounded-lg p-1">
                    <table className="w-full border-collapse">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-2 2xl:p-4 border-b border-solid border-gray-200 text-left text-xs font-extralight">USER</th>
                                <th className="px-4 py-2 2xl:p-4 border-b border-solid border-gray-200 text-left text-xs font-extralight">EMAIL</th>
                                <th className="px-4 py-2 2xl:p-4 border-b border-solid border-gray-200 text-left text-xs font-extralight">STATUS</th>
                                <th className="px-4 py-2 2xl:p-4 border-b border-solid border-gray-200 text-left text-xs font-extralight">JOINED DATE</th>
                                <th className="px-4 py-2 2xl:p-4 border-b border-solid border-gray-200 text-left text-xs font-extralight">ACTIONS</th>
                            </tr>
                        </thead>
                        <tbody>
                            {usersData[filter as keyof typeof usersData]?.map((user: {name: string, username: string, email: string, status: string, joined: string}, index: number) => (
                                <tr key={index}>
                                    <td className="flex flex-row p-4 items-center gap-2 border-gray-200 text-left">
                                        <Image src={pfp} alt="user" className="size-10 2xl:size-12 rounded-full"/>
                                        <div className="flex flex-col gap-1">
                                            <span className="text-sm 2xl:text-base">{user.name}</span>
                                            <span className="text-xs 2xl:text-sm font-extralight">{user.username}</span>
                                        </div>
                                    </td>
                                    <td className="text-xs 2xl:text-base font-extralight p-4 border-gray-200 text-left">{user.email}</td>
                                    <td className="p-4 border-gray-200 text-left">
                                        <span className={`text-xs font-extralight ${user.status === 'Active' ? 'text-green-500 bg-green-100 p-1 rounded-lg' : 'text-yellow-500 bg-yellow-100 p-1 rounded-lg'}`}>
                                            {user.status}
                                        </span>
                                    </td>
                                    <td className="text-xs 2xl:text-base font-extralight p-4 border-gray-200 text-left">{user.joined}</td>
                                    <td className="p-4 border-gray-200 text-left space-x-2 items-center">
                                        <button className="text-xs 2xl:text-base cursor-pointer font-extralight">View</button>
                                        <button className="text-xs 2xl:text-base cursor-pointer font-extralight">Edit</button>
                                        <button className="text-xs 2xl:text-base cursor-pointer font-extralight text-red-500">Delete</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>

                    <div className="flex flex-row justify-between p-4 items-center">
                    <span className="text-xs">Showing 1 to 10 results of 97 results</span>
                    <div className="flex flex-row">
                        <button className="db-tab4-btn">&lt;</button>
                        <button className="db-tab4-btn">1</button>
                        <button className="db-tab4-btn">2</button>
                        <button className="db-tab4-btn">3</button>
                        <button className="db-tab4-btn">&gt;</button>
                    </div>
                </div>
                </div>

                <Link href="/user-list" className="mt-4 no-underline hover:underline pb-10">&lt; Back to user list?</Link>
            </main>
        </div>
    )
}