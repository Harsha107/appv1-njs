"use client";

import React from "react";
import pfp from '../../public/pfp-img.jpg';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from "chart.js";
import { Bar } from "react-chartjs-2";
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function PostsPage() {

    const posts = [
    {
      author: "John Doe",
      time: "2 hours ago",
      title: "Getting Started with Web Development",
      description: "A comprehensive guide for beginners looking to start their journey in web development...",
      views: "👁 1.2k views",
      status: "Published",
    },
    {
      author: "Jane Smith",
      time: "5 hours ago",
      title: "10 Tips for Better Code Quality",
      description: "Essential practices every developer should know for writing maintainable and efficient code...",
      views: "👁 856 views",
      status: "Draft",
    },
    {
      author: "Mike Johnson",
      time: "1 day ago",
      title: "Understanding JavaScript Promises",
      description: "A deep dive into asynchronous programming and how to handle promises effectively...",
      views: "👁 2.1k views",
      status: "Published",
    },
  ];

  const statsData = [
    {
        title: "Total Users", 
        value: "1,482",
        description: "users",
        percentage: "+12.5%",
        percentageColor: "text-green-500",
        progressColor: "bg-green-500",
        progressValue: 80
    },
    {
        title: "Active Users", 
        value: "892",
        description: "active",
        percentage: "+8.2%",
        percentageColor: "text-green-500",
        progressColor: "bg-blue-500",
        progressValue: 60
    },
    {
        title: "Total Posts", 
        value: "3,642",
        description: "posts",
        percentage: "+15.7%",
        percentageColor: "text-green-500",
        progressColor: "bg-purple-500",
        progressValue: 75
    },
    {
        title: "Engagement Rate", 
        value: "68%",
        description: "engaged",
        percentage: "-2.3%",
        percentageColor: "text-red-500",
        progressColor: "bg-yellow-500",
        progressValue: 68
    }
  ]

  const userGrowthData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "User Growth",
        data: [120, 180, 150, 220, 200, 240, 230],
        backgroundColor: "#60A5FA",
        barPercentage: 0.5,
        categoryPercentage: 0.6,
      },
    ],
  };

  const postActivityData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Post Activity",
        data: [80, 120, 100, 150, 140, 170, 190],
        backgroundColor: "#A78BFA",
        barPercentage: 0.5,
        categoryPercentage: 0.6,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false,
      },
    },
    scales: {
      y: {
        display: false,
        grid : {
            display: false,
        },
      },
      x: {
        grid: {
            display: false,
        },
      },
    },
  };

    return (
        <div className="bg-gray-100 mt-16 ml-64">
            <main className="flex flex-col flex-1 gap-4 pt-4 mx-4">
                <div className="bg-white flex justify-between items-center shadow-md rounded-lg p-6">
                    <div>
                        <h1 className="font-bold text-lg">Posts List</h1>
                        <p className="text-gray-600 text-sm">View and manage all posts</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <div className="flex items-center px-4 py-2 rounded-md bg-gray-100">
                            <input type="text" placeholder="Search posts..." className="bg-transparent border-none outline-none text-sm w-36"/>
                            <FaSearch className="text-gray-500 ml-2"/>
                        </div>
                        <select className="text-black px-3 py-1 rounded-lg text-sm cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80">
                            <option value="add">All Posts</option>
                            <option value="remove">...</option>
                        </select>
                    </div>
                </div>

                <div className="bg-transparent flex justify-between gap-4">
                    {posts.map((post: {author: string, time: string, title: string, description: string, views: string, status: string}, index: number) => (
                        <div key={index} className="bg-white pt-4 px-4 pb-6 shadow-md flex flex-col gap-3 flex-1 rounded-lg">
                            <div className="flex flex-row justify-between">
                                <div className="flex flex-row gap-3">
                                    <Image src={pfp} alt="user-pfp" className="w-12 h-12 rounded-full" />
                                    <span className="flex flex-col">
                                        <p>{post.author}</p>
                                        <p className="font-extralight text-sm">{post.time}</p>
                                    </span>
                                </div>
                                <p className={` p-2 w-22 h-10 rounded-2xl ${post.status === "Draft" ? "text-yellow-600 bg-yellow-100" : "text-green-600 bg-green-100"}`}>{post.status}</p>
                            </div>

                            <div className="flex flex-col gap-2">
                                <p className="font-medium">{post.title}</p>
                                <p className="font-light text-sm">{post.description}</p>
                            </div>
                                
                            <div className="flex flex-row justify-between">
                                <p className="font-extralight text-sm">{post.views}</p>
                                <div className="flex flex-row gap-4">
                                    <button>Edit</button>
                                    <button className="text-red-600">Delete</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="bg-white p-4 shadow-md rounded-lg">
                    <div className="flex flex-row justify-between">
                        <span className="text-sm mt-1">Showing 1 to 10 results of 97 results</span>
                        <div>
                            <button className="db-tab4-btn">&lt;</button>
                            <button className="db-tab4-btn">1</button>
                            <button className="db-tab4-btn">2</button>
                            <button className="db-tab4-btn">3</button>
                            <button className="db-tab4-btn">&gt;</button>
                        </div>
                    </div>
                </div>

                <div className="bg-white flex justify-between items-center shadow-md rounded-lg p-6 mt-4">
                    <div>
                        <h1 className="font-bold text-lg">Analytics Overview</h1>
                        <p className="text-gray-600 text-sm">Track user and post metrics</p>
                    </div>
                    
                    <div className="flex items-center space-x-4">
                        <select className="text-black px-3 py-1 rounded-lg text-sm cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80">
                            <option value="add">Last 7 days</option>
                            <option value="remove">...</option>
                        </select>
                    </div>
                </div>

                <div className="bg-transparent flex justify-between gap-4">
                    {statsData.map((stat: {title: string, value: string, description: string, percentage: string, percentageColor: string, progressColor: string, progressValue: number}, index: number) => (
                        <div key={index} className="bg-white rounded-lg p-6 shadow-md flex-1">
                            <div className="flex flex-row justify-between">
                                <h3 className="text-gray-600 text-sm">{stat.title}</h3>
                                <span className={`text-sm font-semibold ${stat.percentageColor}`}>{stat.percentage}</span>
                            </div>
                            <div className="flex flex-row gap-2">
                                <p className="text-2xl font-bold">{stat.value}</p>
                                <p className="text-gray-500 text-sm mt-3">{stat.description}</p>
                            </div>
                            <div className="bg-gray-200 rounded-full h-2 mt-2">
                                <div className={`h-2 rounded-full ${stat.progressColor}`} style={{width: `${stat.progressValue}%`}}></div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="grid grid-cols-2 gap-4">
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold mb-4">User Growth</h4>
                        <Bar data={userGrowthData} options={chartOptions} />
                    </div>
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h4 className="text-lg font-bold mb-4">Post Activity</h4>
                        <Bar data={postActivityData} options={chartOptions} />
                    </div>
                </div>
            </main>
        </div>
    )
}