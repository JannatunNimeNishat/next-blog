import Link from 'next/link'
import React from 'react'

const Button = ({ text, url }) => {
    return (
        <Link href={url}>
            <div
                className='p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] w-max text-white'>
                {text}
            </div>
        </Link>
    )
}

export default Button