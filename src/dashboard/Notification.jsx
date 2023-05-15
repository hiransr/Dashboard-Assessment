import React from 'react'

const Notification = ({ name, col, time, loc }) => {
    return (
        <div>
            <div className={`flex flex-row gap-[15px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-105 `}>
                <div className={`vl ${col}`}>
                </div>
                <div className='flex flex-col gap-[5px] justify-center '>
                    <p className='text-[14px] font-bold'>{name}</p>
                    <p className='text-[12px]'>{time}</p>
                    <p className='text-[12px]'>{loc}</p>
                </div>
            </div>
        </div>
    )
}

export default Notification