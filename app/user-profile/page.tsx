import React from "react";
import Image from "next/image";
import pfp from '../../public/pfp-img.jpg';
import Link from "next/link";

export default function UserProfile() {
    return (
        <div className="bg-gray-100 mt-16 ml-0 md:ml-64"> 
            <main className="flex flex-col flex-1 gap-4 pt-4 mx-4">
                <div className="bg-white flex flex-row items-center justify-between p-6 shadow-md rounded-lg">
                    <div className="flex flex-row justify-center gap-4 items-center">
                        <Image src={pfp} alt="user-pfp" className="w-20 h-20 rounded-full" />
                        <div className="flex flex-col gap-1">
                            <h2 className="font-bold text-xl">John Doe</h2>
                            <p className="font-extralight text-xm -mt-1">@johndoe</p>
                            <span className="bg-green-200 text-green-700 text-sm w-12 pl-1 rounded-lg">Active</span>
                        </div>
                    </div>
                    <div className="flex flex-row gap-6">
                        <Link href='/user-profile/settings' className="bg-white text-blue-500 rounded-lg border border-blue-500 p-2 hover:bg-blue-500 hover:text-white">Settings</Link>
                        <button className="bg-black text-white rounded-lg p-2 hover:bg-white hover:text-black hover:border hover:border-black">Edit Profile</button>
                        <button className="bg-white text-red-500 rounded-lg border border-red-500 p-2 hover:bg-red-500 hover:text-white">Deactivate Account</button>
                    </div>
                </div>

                <div className="bg-transparent flex justify-between gap-4">
                    <div className="bg-white p-4 shadow-md flex flex-col gap-3 flex-1 rounded-lg">
                        <span className="font-bold text-lg ml-3">Personal Information</span>
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Full Name</p>
                            <p className="">John Doe</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Email</p>
                            <p>johndoe@example.com</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Phone</p>
                            <p>+1 (555) 123-4567</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Location</p>
                            <p>New York, USA</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Join Date</p>
                            <p>January 15, 2024</p>    
                        </span>   
                    </div>  

                    <div className="bg-white p-4 shadow-md flex flex-col gap-3 flex-1 rounded-lg">
                        <span className="font-bold text-lg ml-3">Account Statistics</span>
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Total Posts</p>
                            <p className="font-bold text-2xl">247</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Posts this month</p>
                            <p className="font-bold text-2xl">12</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Last Active</p>
                            <p>2 hours ago</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="font-extralight text-sm">Account Status</p>
                            <p className="text-green-700">Active</p>    
                        </span>
                    </div>

                    <div className="bg-white p-4 shadow-md flex flex-col gap-3 flex-1 rounded-lg">
                        <span className="font-bold text-lg ml-3">Recent Activity</span>
                        <span className="ml-3">
                            <p className="">🔵 Created a new post</p>
                            <p className="font-extralight text-sm ml-7">2 hours ago</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="">🟢 Updated profile information</p>
                            <p className="font-extralight text-sm ml-7">1 day ago</p>    
                        </span>   
                        <span className="ml-3">
                            <p className="">🟣 Changed account settings</p>
                            <p className="font-extralight text-sm ml-7">3 days ago</p>    
                        </span>
                    </div>
                </div> 

                <div className="bg-white p-4 shadow-md flex flex-col gap-3 rounded-lg">
                    <span className="font-bold text-lg ml-3">Recent Posts</span>
                    <span className="ml-3">
                        <p className="font-medium">Getting Started with Web Development</p>
                        <p className="font-light">A comprehensive guide for beginners...</p>
                        <p className="font-extralight">Posted 2 hours ago - 5 mins ago</p>    
                    </span>   
                    <span className="ml-3">
                        <p className="font-medium">10 Tips for Better Code Quality</p>
                        <p className="font-light">Essential practices for writing maintainable code...</p>
                        <p className="font-extralight">Posted 1 day ago - 8 mins ago</p>    
                    </span>     
                    <span className="ml-3">
                        <p className="font-medium">Understanding JavaScript Promises</p>
                        <p className="font-light">Deep dive into asynchronous programming...</p>
                        <p className="font-extralight">Posted 3 days ago - 12 mins ago</p>    
                    </span>  
                </div>   
            </main>  
        </div>
    )
}