import React from 'react';
import Image from 'next/image';
import ChartComp from '../components/ChartComp';

export default function OverviewPage() {

    const statsData = [
        {
            title: "Total Users", 
            count: "1,482", 
            subtext: "users", 
            popup: "+12%"
        },    
        {
            title: "New Users", 
            count: "142", 
            subtext: "this period", 
            popup: "+8%"
        },
        {
            title: "Total Posts Today", 
            count: "3,642", 
            subtext: "posts", 
            popup: "+24%"
        },
        {
            title: "New Posts", 
            count: "264", 
            subtext: "this period", 
            popup: "+18%"
        }
    ]

    const postData = [
        {
            src: '/post1.jpg',
            caption: 'Caption 1'
        },
        {
            src: '/post2.jpg',
            caption: 'Caption 2'
        },
        {
            src: '/post3.webp',
            caption: 'Caption 3'
        }
    ]

    return (
        <div className='bg-transparent mt-20 ml-0 2xl:ml-64'>
            <main className='m-4 flex flex-col gap-4'>
                <div className='bg-transparent grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4'>
                    {statsData.map((stat: {title: string, count: string, subtext: string, popup: string}, index: number) => (
                        <div key={index} className='bg-white shadow-sm rounded-lg border-2 border-gray-300 p-4 flex flex-row justify-between hover:border-black'>
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

                <div className='shadow-sm border-2 bg-white border-gray-300 rounded-lg p-4 flex flex-col gap-10'>
                    <div className='flex flex-row justify-end'>
                        <button className='bg-white border border-black text-black px-20 py-1 hover:bg-black hover:text-white hover:border-white'>Filters</button>
                    </div>

                    <ChartComp />
                </div>

                <div className='bg-transparent flex flex-col gap-8 p-4 border-2 bg-white border-gray-300 rounded-lg shadow-sm'>
                    <div className='flex flex-row justify-between mt-8'>
                        <h1 className='text-xl font-semibold ml-8'>Reported Posts</h1>
                        <button className='mr-8 bg-blue-500 text-white rounded-full border border-white py-1 px-4 hover:border hover:border-blue-500 hover:bg-white hover:text-blue-500'>View All</button>
                    </div>

                    <div className='flex flex-col gap-4'>
                        {postData.map((post: {src: string, caption: string}, index: number) => (
                            <div key={index} className='flex flex-row justify-between items-center py-4 px-10 border-2 border-gray-300 rounded-lg hover:border-black'>
                                <div className='flex flex-row gap-10 items-center'>
                                    <Image src={post.src} alt='post-pic' height={125} width={125} unoptimized/>
                                    <p>{post.caption}</p>
                                </div>

                                <div className="w-0.5 h-12 bg-gray-300"></div>

                                <div className='flex flex-row gap-20'>
                                    <button className='border border-black px-2 py-1 rounded-full hover:border-white hover:bg-black hover:text-white'>Moment</button>
                                    <button className='border border-white px-2 py-1 rounded-full text-white bg-red-500 hover:border-red-500 hover:bg-white hover:text-red-500'>Spam</button>
                                </div>

                                <div className="w-0.5 h-12 bg-gray-300"></div>

                                <button className='border border-white px-2 py-1 rounded-full bg-blue-500 text-white hover:border-blue-500 hover:text-blue-500 hover:bg-white'>View</button>
                            </div>
                        ))}
                    </div>
                </div>
            </main>
        </div>
    )
}