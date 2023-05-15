/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react'
import SideBar from './SideBar'
import NavBar from './NavBar'
import { Chart as ChartJS } from 'chart.js/auto'
import { TbMoneybag } from 'react-icons/tb'
import { BsTags } from 'react-icons/bs'
import { BiLike } from 'react-icons/bi'
import { FiUsers } from 'react-icons/fi'
import Card from './Card'
import { UserData } from '../Chart Data/Data'
import LineChart from './LineChart';
import Notification from './Notification'
import PieChart from './PieChart'
import { useProfileContext } from '../context/Profile'
// import { overrides } from 'chart.js/dist/core/core.defaults'


const cardData = [{ name: "Total Revenues", values: "$762373", color: "bg-[#DDEFE0]", icon: <TbMoneybag size={28} /> }, { name: "Total Transactions", values: "1,520", color: "bg-[#F4ECDD]", icon: <BsTags size={28} /> }, { name: "Total Likes", values: "9,721", color: "bg-[#EFDADA]", icon: <BiLike size={28} /> }, { name: "Total Users", values: "892", color: "bg-[#DEE0EF]", icon: <FiUsers size={28} /> }]
const noti = [{ name: "Meeting with suppliers from Kuta Bali", time: "14.00-15.00", loc: "at Sunset Road, Kuta, Bali ", col: "text-[#9bdd7c]" }, { name: "Check operation at Giga Factory 1", time: "18.00-20.00", loc: "at Central Jakarta ", col: "text-[#6972c3]" }]
const Dashboard = () => {
    const { profile, setProfile } = useProfileContext()
    console.log(profile)
    const [userData, setUserData] = useState({
        labels: UserData.map((data) => data.year),
        datasets: [
            {
                label: 'User Gained',
                data: UserData.map((data) => data.userGain),
                borderColor: '#4bc0c0',
                // radius: 6,
                backgroundColor: '#4bc0c0',
                tension: 0.5
            },
            {
                label: 'User Lost',
                data: UserData.map((data) => data.userLost),
                borderColor: '#ff6384',
                backgroundColor: '#ff6384',
                tension: 0.4
            }
        ],
        options: {
            options: {
                maintainAspectRatio: false,
                responsive: true,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                stacked: false,
                plugins: {
                    title: {
                        display: true,
                        text: 'Chart.js Line Chart - Multi Axis'
                    }
                },
                scales: {
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false, // only want the grid lines for one axis to show up
                        },
                    },
                }
            },
            datasets: {
                line: {
                    pointRadius: 0 // disable for all `'line'` datasets
                }
            },
            elements: {
                point: {
                    radius: 0 // default to disabled in all datasets
                }
            },
        }
    })

    const [userData2, setUserData2] = useState({
        state: {
            labels: UserData.map((data) => data.year),
            datasets: [{
                data: UserData.map((data) => data.userGain),
                backgroundColor: ['#ff6384', '#36a2eb', '#ff9f40', '#4bc0c0', '#9966ff', '#ffb456', '#eee6e5'],
            }],
        },
        options: {
            responsive: true,
            overrides: {
                pie: {
                    plugins: {
                        legend: {
                            position: 'bottom',
                        },
                    }
                }
            },
        },
    })
    return (
        <div>
            <div className='bg-[#f5f5f5] '>
                <div className='flex flex-row'>
                    <div className='fixed'>
                        <SideBar />
                    </div>
                    <div className='ml-[360px] gap-[40px] w-[calc(100vw-420px)] flex flex-col'>
                        <div className='pt-[60px] '>
                            <NavBar pic={profile?.picture} />
                        </div>
                        <div className='flex flex-row justify-between'>
                            {cardData.map((eachCard) => {
                                return <Card name={eachCard.name} values={eachCard.values} color={eachCard.color} icon={eachCard.icon}
                                />
                                // to map and print each card
                            })}
                        </div>
                        <div className=' w-fill bg-white rounded-[20px] p-[30px] flex justify-center'>
                            {/* Line Chart */}
                            <div className='  '>
                                <p className='text-[18px] font-bold flex justify-start'>Activities</p>
                                <p className='text-[12px] flex justify-start'>Users Count Statistics</p>
                                <div className='w-[900px]'>
                                    <LineChart chartData={userData} option={userData.options} />
                                </div>
                            </div>
                        </div>
                        <div className='flex flex-row gap-[20px] mb-[40px]'>
                            <div className='bg-white flex-1 rounded-[20px]'>
                                <div className='pt-[30px] pl-[40px] '>
                                    <div>
                                        <p className='text-[18px] font-bold'>User Gained</p>
                                    </div>
                                    <div className='w-[300px] mx-auto'>
                                        <PieChart chartData={userData2} />
                                    </div>
                                </div>
                            </div>
                            <div className='bg-white flex-1 rounded-[20px] pt-[30px] pl-[40px]'>
                                <div className='flex justify-between pr-[30px] text-[12px]'>
                                    <p className='text-[18px] font-bold '>Today’s schedule</p>
                                    <a href='' className='text-[#2f2c2c] hover:text-black'>See All &gt;</a>
                                </div>
                                <div className='pt-[30px] flex flex-col gap-[10px]'>
                                    {noti.map((each) => {
                                        return <Notification name={each.name} loc={each.loc} time={each.time} col={each.col}
                                        />
                                    })}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Dashboard