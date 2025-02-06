"use client";

import React, { useState } from "react";
import pfp from '../../public/pfp-img.jpg';
import Image from "next/image";
import Link from "next/link";
import UserListComp from "../components/UserList";

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
        <div className="bg-gray-100 mt-16 ml-64">
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
                    <div className="flex flex-row justify-between gap-4">
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

                <UserListComp />

                <Link href="/" className="mt-4 no-underline hover:underline pb-10">&lt; Back to user list?</Link>
            </main>
        </div>
    )
}