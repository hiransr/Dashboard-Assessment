import React from 'react'

const Card = ({ name, values, color,icon }) => {
    console.log(color)
    return (
        <div>
            <div className={`${color} rounded-[20px] h-[120px] w-[220px] transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110`}>
                <div className='flex justify-end pt-[15px] pr-[20px]' >
                   {icon}
                </div>
                <div className='flex flex-col gap-[4px] pl-[25px]'>
                    <p className='text-[14px] font-semibold'>{name}</p>
                    <p className='text-[24px] font-bold'>{values}</p>
                </div>
            </div>
        </div>
    )
}

export default Card