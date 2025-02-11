import React from 'react';
import ChartComp from './components/ChartComp';
import CardComp from './components/CardComp';
import PostComp from './components/PostComp';

export default function OverviewPage() {

    return (
        <div className='bg-transparent mt-20 ml-0 2xl:ml-64'>
            <main className='m-4 flex flex-col gap-4'>
                <CardComp />

                <div className='shadow-sm border-2 bg-white border-gray-300 rounded-lg p-4 flex flex-col gap-10'>
                    <div className='flex flex-row justify-end'>
                        <button className='bg-white border border-black text-black px-20 py-1 hover:bg-black hover:text-white hover:border-white'>Filters</button>
                    </div>

                    <ChartComp />
                </div>

                <PostComp />
            </main>
        </div>
    )
}