import React from "react";
import statsData from "@/data/statsData";

export default function CardComp() {
    return (
        <div className='bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
            {statsData.map((stat: {title: string, count: string, subtext: string, popup: string}, index: number) => (
                <div key={index} className='bg-white shadow-sm rounded-lg ring-2 ring-gray-300 p-4 flex flex-row justify-between hover:ring-black duration-300'>
                    <div className='flex flex-col justify-between gap-4'>
                        <span className='font-light text-lg'>{stat.title}</span>
                        <div className='flex flex-row gap-2 items-end'>
                            <span className='font-bold text-2xl'>{stat.count}</span>
                            <span className='font-extralight text-sm'>{stat.subtext}</span>
                        </div>
                    </div>
                    <span className='text-green-500 bg-green-100 p-1 h-6 rounded-lg text-xs'>{stat.popup}</span>
                </div>
            ))}
        </div>
    )
}