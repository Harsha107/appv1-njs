import React from "react";
import { FaKey, FaUser, FaTrash } from "react-icons/fa";
import './styles.css';

export default function UserProfileSettings() {
    return (
        <div className="bg-transparent mb-4"> 
            <main className="flex flex-col flex-1 gap-4">
                    <section className="flex flex-col gap-1 bg-white shadow-md rounded-lg p-6 mt-4">
                        <h1 className="font-bold text-lg">Settings</h1>
                        <p className="text-gray-600 text-sm">Manage your account preferences and system settings</p>
                    </section>

                    <section className="flex flex-row gap-4">
                        <div className="flex flex-col bg-white shadow-md rounded-lg w-2/3 p-4 gap-4">
                            <h1 className="font-bold text-sm">General Settings</h1>

                            <div className="ups-div">
                                <h2 className="ups-h2">Email Notifications</h2>
                                <div className="ups-subdiv">
                                    <span className="ups-span">
                                        <h3>New User Registration</h3>
                                        <p className="ups-p">Get notified when a user registers</p>
                                    </span>
                                    <label className="ups-label">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                                <div className="ups-subdiv">
                                    <span className="ups-span">
                                        <h3>New Post Alerts</h3>
                                        <p className="ups-p">Recieve alerts for new posts</p>
                                    </span>
                                    <label className="ups-label">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>

                            <div className="ups-div">
                                <h2 className="ups-h2">Data Display</h2>
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

                            <div className="ups-div">
                                <h2 className="ups-h2">Security</h2>
                                <div className="ups-subdiv">
                                    <span className="ups-span">
                                        <h3>Two-Factor Authentication</h3>
                                        <p className="ups-p">Add an extra layer of security</p>
                                    </span>
                                    <label className="ups-label">
                                        <input type="checkbox" value="" className="sr-only peer"/>
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white shadow-md rounded-lg flex flex-col justify-between w-1/3 p-4">
                            <div>
                                <h1 className="font-bold mb-6">Quick Actions</h1>
                                <ul className="flex flex-col gap-4">
                                    <li className="ups-li1">
                                        <FaUser />
                                        <span className="ups-span2">Update Profile</span>
                                    </li>
                                    <li className="ups-li1">
                                        <FaKey />
                                        <span className="ups-span2">Change Password</span>
                                    </li>
                                    <li className="ups-li1">
                                        <FaTrash />
                                        <span className="ups-span2">Delete Account</span>
                                    </li>
                                </ul>
                            </div>

                            <div>
                                <h1 className="font-bold mb-6">System Information</h1>
                                <ul className="ups-div">
                                    <li className="ups-li2">
                                        <span className="ups-span2">Version:</span>
                                        <span className="ups-span3">2.1.0</span>
                                    </li>
                                    <li className="ups-li2">
                                        <span className="ups-span2">Last Updated:</span>
                                        <span className="ups-span3">Jan 15, 2024</span>
                                    </li>
                                    <li className="ups-li2">
                                        <span className="ups-span2">Storage Used:</span>
                                        <span className="ups-span3">1.2 GB / 1.5 GB</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>
            </main>
        </div>
    )
}