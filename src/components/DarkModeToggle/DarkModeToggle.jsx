"use client"

import React, { useContext } from 'react'
import { ThemeContext } from '../../../contaxt/ThemeContext'

const DarkModeToggle = () => {

    const { toggle, mode } = useContext(ThemeContext);

    return (
        <div className='w-[54px] h-[24px]  border-[1.5px] border-[#53c28b70] flex justify-between rounded-[30px] mx-auto relative px-1 cursor-pointer'
            onClick={toggle}
        >
            <div className='w-[15px] h-[20px]'>🌙</div>
            <div className='w-[20px] h-[20px]' >🌞</div>
            <div className={`w-[22px] h-[20px] rounded-full absolute bg-[#53c28b]
            ${mode === 'light' ? 'left-[2px]' : 'right-[2px]'}
            `} />

        </div>
    )
}

export default DarkModeToggle