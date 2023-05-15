import React from 'react'
import { FiPieChart, FiSettings } from 'react-icons/fi'
import { TbTags } from 'react-icons/tb'
import { BiUserCircle } from 'react-icons/bi'
import { MdOutlineSchedule } from 'react-icons/md'
const SideBar = () => {
    return (
        <div>
            <div className='bg-black m-[40px] w-[280px] h-[715px] rounded-[30px] text-white flex flex-col justify-between'>
                <div className='flex flex-col pl-[50px] gap-[30px]'>
                    <p className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 font-bold text-[36px] mt-[40px]'>Board.</p>
                    <div className='flex gap-4 items-center'>
                        <FiPieChart size={18} />
                        <a href='' className='text-[18px] hover:text-white/80'>Dashboard</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <TbTags size={20} />
                        <a href='' className='text-[18px] hover:text-white/80'>Transactions</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <MdOutlineSchedule size={18} />
                        <a href='' className='text-[18px] hover:text-white/80'>Schedules</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <BiUserCircle size={18} />
                        <a href='' className='text-[18px] hover:text-white/80'>Users</a>
                    </div>
                    <div className='flex gap-4 items-center'>
                        <FiSettings size={18} />
                        <a href='' className='text-[18px] hover:text-white/80 '>Settings</a>
                    </div>
                </div>
                <div className='text-[14px] gap-[10px] flex flex-col pl-[50px] pb-[40px]'>
                    <a href='' className='text-white/70 hover:text-white'>Help</a>
                    <a href='' className='text-white/70 hover:text-white'>Contact Us</a>
                </div>
            </div>
        </div>
    )
}

export default SideBar