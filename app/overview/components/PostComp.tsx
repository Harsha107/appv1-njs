import React from "react";
import Image from "next/image";
import postData from "@/data/postData";
import './styles.css';

export default function PostComp() {
    return (
        <div className='bg-transparent flex flex-col gap-8 p-4 border-2 bg-white border-gray-300 rounded-lg shadow-sm'>
            <div className='flex flex-row justify-between mt-8'>
                <h1 className='text-xl font-semibold ml-8'>Reported Posts</h1>
                <button className='mr-8 bg-blue-500 text-white rounded-full border border-white py-1 px-4 hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500'>View All</button>
            </div>

            <div className="overflow-x-auto">
                <table className="min-w-full border-separate border-spacing-y-4 border-2 border-white">
                    <thead>
                        <tr className="bg-gray-100">
                            <th className="px-6 py-3 border-b text-left">Image</th>
                            <th className="px-6 py-3 border-b text-left">Caption</th>
                            <th className="px-6 py-3 border-b text-center">Category</th>
                            <th className="px-6 py-3 border-b text-center">Status</th>
                            <th className="px-6 py-3 border-b text-center">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {postData.map((post, index) => (
                            <tr key={index} className="ring-2 ring-gray-200 rounded-lg hover:ring-black duration-300">
                                <td className="px-6 py-3">
                                    <Image src={post.src} alt="post-pic" height={125} width={125} unoptimized />
                                </td>
                                <td className="px-6 py-3">{post.caption}</td>
                                <td className="post-btn">
                                    <button className="border border-black px-3 py-1 rounded-full hover:border-white hover:bg-black hover:text-white">
                                        Moment
                                    </button>
                                </td>
                                <td className="post-btn">
                                    <button className="border border-white px-3 py-1 rounded-full text-white bg-red-500 hover:border-red-500 hover:bg-white hover:text-red-500">
                                        Spam
                                    </button>
                                </td>
                                <td className="post-btn">
                                    <button className="border border-white px-3 py-1 rounded-full bg-blue-500 text-white hover:border-blue-500 hover:text-blue-500 hover:bg-white">
                                        View
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    )
}