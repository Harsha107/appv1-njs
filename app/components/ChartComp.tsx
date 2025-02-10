"use client";

import React from "react";
import { Chart as ChartJS, ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar, Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, BarElement, CategoryScale, LinearScale, Tooltip, Legend);

export default function ChartComp() {

    const ageData = {
        labels: ['0-10', '11-20', '21-30', '40+'],
        datasets: [
            {
                axis: 'y',
                label: 'Age',
                data: [120, 180, 150, 220, 200],
                backgroundColor: '#60A5FA',
            },
        ],
    }

    const horizontalChartOptions = {
        indexAxis: 'y' as 'y',
        responsive: true,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                enabled: true
            }
        },
        scales: {
            x: {
                display: false,
            },
            y: {
                grid: {
                    display: false
                }
            }
        }
    }

    const demographicsData = {
        labels: ['Male', 'Female'],
        datasets: [
            {
                axis: 'y',
                label: 'Age',
                data: [200, 120],
                backgroundColor: '#60A5FA',
            }
        ]
    }

    const acquisitionData1 = {
        labels: ['Organic', 'Share'],
        datasets: [
            {
                data: [72, 28],
                backgroundColor: ['#E1EB34', '#83EB34'],
                hoverBackgroundColor: ['#EBC934', '#34EB5B']
            }
        ]
    }

    const doughnutOptions = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            }
        }
    }

    const acquisitionData2 = {
        labels: ['UAE', 'USA'],
        datasets: [
            {
                data: [60, 40],
                backgroundColor: ['#36A2EB', '#FF6384'],
                hoverBackgroundColor: ['#2F86D4', '#E55675']
            }
        ]
    }

    const keywordsData = {
        labels: ['#Foodie', '#FYP', '#InstaGood', '#Viral', '#TBT', '#OOTD', '#SelfCare'],
        datasets: [
            {
                axis: 'y',
                label: 'Keyword',
                data: [100, 129, 86, 145, 59, 69, 112],
                backgroundColor: '#60A5FA'
            }
        ]
    }

    const tagsData = {
        labels: ['#Inspiration', '#Goals', '#Love', '#Blogger', '#Artist', '#Tech', '#Vlog'],
        datasets: [
            {
                axis: 'y',
                label: 'Tags',
                data: [90, 79, 126, 65, 59, 119, 152],
                backgroundColor: '#60A5FA'
            }
        ]
    }

    const usersData = {
        labels: ['@cristiano', '@leomessi', '@therock', '@khaby.lame', '@zachking', '@addisonre', '@zoella'],
        datasets: [
            {
                axis: 'y',
                label: 'User',
                data: [131, 160, 120, 115, 89, 59, 72],
                backgroundColor: '#60A5FA'
            }
        ]
    }

    return (
        <div className="flex flex-col gap-10 mx-10">
            <div className="grid grid-cols-2 gap-20">
                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-black">
                    <h4 className="text-lg font-bold mb-4">Audience Age</h4>
                    <Bar data={ageData} options={horizontalChartOptions} />
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-black">
                    <h4 className="text-lg font-bold mb-4">Audience Demographics</h4>
                    <Bar data={demographicsData} options={horizontalChartOptions}/>
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-black">
                    <h4 className="text-lg font-bold mb-4">Audience Acquisition</h4>
                    <Doughnut data={acquisitionData1} options={doughnutOptions} />
                </div>

                <div className="border-2 border-gray-200 rounded-lg p-4 hover:border-black">
                    <h4 className="text-lg font-bold mb-4">Audience Acquisition</h4>
                    <Doughnut data={acquisitionData2} options={doughnutOptions} />
                </div>
            </div>

            <div className="flex flex-col gap-10">
                <h1 className="font-bold text-2xl">Top Searches</h1>
                <div className="grid grid-cols-3 gap-4">
                    <div className="border-2 border-gray-200 p-4 rounded-lg hover:border-black">
                        <h4 className="font-bold text-lg mb-4">Keywords</h4>
                        <Bar data={keywordsData} options={horizontalChartOptions} />
                    </div>

                    <div className="border-2 border-gray-200 p-2 rounded-lg hover:border-black">
                        <h4 className="font-bold text-lg mb-4">Tags</h4>
                        <Bar data={tagsData} options={horizontalChartOptions} />
                    </div>

                    <div className="border-2 border-gray-200 p-2 rounded-lg hover:border-black">
                        <h4 className="font-bold text-lg mb-4">Users</h4>
                        <Bar data={usersData} options={horizontalChartOptions} />
                    </div>
                </div>
            </div>
        </div>
    )
}