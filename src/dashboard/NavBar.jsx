import React from 'react'
import { GoSearch } from 'react-icons/go'
import { IoMdNotifications } from 'react-icons/io'
import profile from '../Assets/me.jpg'
const NavBar = ({ pic }) => {
    return (
        <div>
            <div className='flex items-center justify-between '>
                <p className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 text-2xl font-bold'>Dashboard</p>
                <div className='flex items-center gap-[24px]'>
                    <input type='text' name='search' id='search' placeholder='Search...' className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-[10px] text-[14px] flex items-center pl-2 h-[30px]' />
                    <IoMdNotifications size={18} className='transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 hover:text-black/60' />
                    <img src={pic ? pic : profile} alt='profile photo' className=' transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 rounded-[50%] h-[30px] w-[30px]' />
                </div>
            </div>
        </div>
    )
}

export default NavBar