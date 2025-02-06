import React from 'react';
import { FaSearch } from 'react-icons/fa';
import Image from 'next/image';
import pfp from '../../public/pfp-img.jpg';

export default function UserListComp() {
    return (
        <div>
            <div className="bg-white w-full mt-5 flex justify-between items-center shadow-md rounded-lg p-4">
                <div>
                    <h1 className="font-bold text-lg">User List</h1>
                    <p className="text-gray-600 text-sm">Manage and view all registered users</p>
                </div>

                <div className="flex items-center space-x-4">
                    <div className="flex items-center px-4 py-2 rounded-md bg-gray-100">
                        <input type="text" placeholder="Search user..." className="bg-transparent border-none outline-none text-sm w-36"/>
                        <FaSearch className="text-gray-500 ml-2"/>
                    </div>
                    <button className="bg-black text-white px-3 py-1 rounded-lg text-xm cursor-pointer transition-opacity duration-200 ease-in-out hover:opacity-80">
                        Add User
                    </button>
                </div>
            </div>

            <div className="bg-white w-full mt-5 shadow-md rounded-lg p-1">
                <table className="w-full border-collapse">
                    <thead className="bg-gray-100">
                        <tr>
                            <th className="p-3 border-b border-solid border-gray-200 text-left">User</th>
                            <th className="p-3 border-b border-solid border-gray-200 text-left">Email</th>
                            <th className="p-3 border-b border-solid border-gray-200 text-left">Status</th>
                            <th className="p-3 border-b border-solid border-gray-200 text-left">Joined Date</th>
                            <th className="p-3 border-b border-solid border-gray-200 text-left">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className="p-3 border-b border-solid border-gray-200 text-left flex flex-row gap-2">
                                <Image src={pfp} alt="user" className="w-12 h-12 rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="text-gray-900">John Doe</span>
                                    <span className="text-gray-600 text-sm">@johndoe</span>
                                </div>
                            </td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">johndoe@example.com</td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">
                                <span className="px-2 py-1 rounded font-xs bg-green-100 text-green-700">Active</span>
                            </td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">Jan 15, 2024</td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">
                                <button className="cursor-pointer mr-2 text-blue-600">View</button>
                                <button className="cursor-pointer mr-2 text-gray-600">Edit</button>
                                <button className="cursor-pointer mr-2 text-red-600">Delete</button>
                            </td>
                        </tr>
                        <tr>
                            <td className="p-3 border-b border-solid border-gray-200 text-left flex flex-row gap-2">
                                <Image src={pfp} alt="user" className="w-12 h-12 rounded-full"/>
                                <div className="flex flex-col">
                                    <span className="text-gray-900">Jane Smith</span>
                                    <span className="text-gray-600 text-sm">@janesmith</span>
                                </div>
                            </td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">janesmith@example.com</td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">
                                <span className="px-2 py-1 rounded font-xs bg-yellow-100 text-yellow-700">Pending</span>
                            </td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">Jan 14, 2024</td>
                            <td className="p-3 border-b border-solid border-gray-200 text-left">
                                <button className="cursor-pointer mr-2 text-blue-600">View</button>
                                <button className="cursor-pointer mr-2 text-gray-600">Edit</button>
                                <button className="cursor-pointer mr-2 text-red-600">Delete</button>
                            </td>
                        </tr>
                    </tbody>
                </table>

                <div className="flex flex-row justify-between p-2">
                    <span className="mt-2">Showing 1 to 10 results of 97 results</span>
                    <div>
                        <button className="db-tab4-btn">&lt;</button>
                        <button className="db-tab4-btn">1</button>
                        <button className="db-tab4-btn">2</button>
                        <button className="db-tab4-btn">3</button>
                        <button className="db-tab4-btn">&gt;</button>
                    </div>
                </div>
            </div>
        </div>
    );
}