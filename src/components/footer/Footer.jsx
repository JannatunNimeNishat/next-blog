import Image from 'next/image';
import React from 'react';

const Footer = () => {
    return (
        <div className='h-[50px] flex items-center justify-between text-[14px]'>
           <div>C 2023. All rights reserved.</div>
           <div className='flex items-center gap-[10px]'>
            <Image className='opacity-[0.6] cursor-pointer' src='/1.png'  width={15} height={15} alt='facebook logo'/>
            <Image className='opacity-[0.6] cursor-pointer' src='/2.png'  width={15} height={15} alt='instagram logo'/>
            <Image className='opacity-[0.6] cursor-pointer' src='/3.png'  width={15} height={15} alt='tweeter logo'/>
            <Image className='opacity-[0.6] cursor-pointer' src='/4.png'  width={15} height={15} alt='youtube logo'/>
           
           </div>
        </div>
    );
};

export default Footer;