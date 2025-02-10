import React from "react";
import { FaKey, FaUser, FaTrash } from "react-icons/fa";

export default function UserProfileSettings() {
    return (
        <div className="bg-transparent mt-16 ml-0 2xl:ml-64"> 
            <main className="flex flex-col flex-1 gap-4 mx-4">
                    <div className="flex flex-col gap-1 bg-white shadow-md rounded-lg p-6 mt-4">
                        <h1 className="font-bold text-lg">Settings</h1>
                        <p className="text-gray-600 text-sm">Manage your account preferences and system settings</p>
                    </div>

                    <div className="flex flex-row gap-4">
                        <div className="flex flex-col bg-white shadow-md rounded-lg w-2/3 p-4 gap-4">
                            <h1 className="font-bold text-xm">General Settings</h1>

                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold">Email Notifications</h2>
                                <div className="flex flex-row justify-between items-center">
                                    <span className="flex flex-col">
                                        <h3>New User Registration</h3>
                                        <p className="font-extralight text-xm">Get notified when a user registers</p>
                                    </span>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div className="flex flex-row justify-between items-center">
                                    <span className="flex flex-col">
                                        <h3>New Post Alerts</h3>
                                        <p className="font-extralight text-xm">Recieve alerts for new posts</p>
                                    </span>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold">Data Display</h2>
                                <div>
                                    <h3>Default Range</h3>
                                    <select name="" id="">
                                        <option value="">Last 7 days</option>
                                        <option value="">...</option>
                                    </select>
                                </div>
                                <div>
                                    <h3>Results per page</h3>
                                    <select name="" id="">
                                        <option value="">10</option>
                                        <option value="">...</option>
                                    </select>
                                </div>
                            </div>

                            <div className="flex flex-col gap-2">
                                <h2 className="font-semibold">Security</h2>
                                <div className="flex flex-row justify-between items-center">
                                    <span className="flex flex-col">
                                        <h3>Two-Factor Authentication</h3>
                                        <p className="font-extralight text-xm">Add an extra layer of security</p>
                                    </span>
                                    <label className="inline-flex items-center cursor-pointer">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-lg flex flex-col justify-between w-1/3 p-4">
                            <div>
                                <h1>Quick Actions</h1>
                                <ul>
                                    <li>
                                        <FaUser />
                                        <span>Update Profile</span>
                                    </li>
                                    <li>
                                        <FaKey />
                                        <span>Change Password</span>
                                    </li>
                                    <li>
                                        <FaTrash />
                                        <span>Delete Account</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1>System Information</h1>
                                <ul>
                                    <li>
                                        <span>Version:</span>
                                        <span>2.1.0</span>
                                    </li>
                                    <li>
                                        <span>Last Updated:</span>
                                        <span>Jan 15, 2024</span>
                                    </li>
                                    <li>
                                        <span>Storage Used:</span>
                                        <span>1.2 GB / 1.5 GB</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
            </main>
        </div>
    )
}