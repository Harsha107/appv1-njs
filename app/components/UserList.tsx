import React from "react";
import pfp from '../../public/pfp-img.jpg';
import { FaSearch } from "react-icons/fa";
import Image from "next/image";

export default function UserListComp() {

    const UserListData = [
        {
            user: "John Doe",
            userId: "@johndoe",
            email: "johndoe@example.com",
            status: "Active",
            joined: "Jan 15, 2024", 
        },
        {
            user: "Jane Smith",
            userId: "@janesmith",
            email: "janesmith@example.com",
            status: "Pending",
            joined: "Jan 14, 2024",
        }
    ]

    return (
        <div>
            <div className="bg-white shadow-md rounded-lg m-4 flex flex-row justify-between items-center p-4">
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

            <div className="mx-4 bg-white shadow-md rounded-lg">
                <table className="w-full corder-collapse">
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
                        {UserListData.map((userList: {user: string, userId: string, email: string, status: string, joined: string}, index: number) => (
                            <tr key={index}>
                                <td className="flex flex-row p-4 items-center gap-2 border-gray-200 text-left">
                                    <Image src={pfp} alt='pfp' className="size-10 2xl:size-12 rounded-full"/>
                                    <div className="flex flex-col gap-1">
                                        <span className="text-sm 2xl:text-base">{userList.user}</span>
                                        <span className="text-xs 2xl:text-sm font-extralight">{userList.userId}</span>
                                    </div>
                                </td>
                                <td className="text-xs 2xl:text-base font-extralight p-4 border-gray-200 text-left">{userList.email}</td>
                                <td className="p-4 border-gray-200 text-left">
                                    <span className={`text-xs font-extralight ${userList.status === 'Active' ? 'text-green-500 bg-green-100 p-1 rounded-lg' : 'text-yellow-500 bg-yellow-100 p-1 rounded-lg' }`}>{userList.status}</span>
                                </td>
                                <td className="text-xs 2xl:text-base font-extralight p-4 border-gray-200 text-left">{userList.joined}</td>
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
        </div>
    )
}