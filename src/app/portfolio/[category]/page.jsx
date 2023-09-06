import Button from '@/components/Button/Button';
import Image from 'next/image';
import React from 'react'

const Category = ({ params }) => {
  console.log(params);
  return (
    <div>
      <h1 className='font-bold text-4xl text-[#53c28b]'>{params.category}</h1>


      {/* parent container */}
      <div className='flex gap-[50px] pt-[50px] py-[100px] '>
        
          {/* text container */}
          <div className='flex-1 flex flex-col justify-center gap-[20px]'>
            <h1 className='font-bold text-[50px] text-[#53c28b]'>Test</h1>
            <p className='text-[20px]'>Desc</p>
            <Button text="See More" url="#" />
          </div>
          {/* img container */}
          <div className='w-full h-[500px] flex-1 relative'>
            <Image className='object-cover' fill={true} src="https://images.pexels.com/photos/14246241/pexels-photo-14246241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
          </div>
      
      </div>
      {/* parent container */}
      <div className='flex flex-row-reverse gap-[50px] pt-[50px] py-[100px] '>
        
          {/* text container */}
          <div className='flex-1 flex flex-col justify-center gap-[20px]'>
         
            <h1 className='font-bold  text-[50px] text-[#53c28b]'>Test</h1>
            <p className='text-[20px]'>Desc</p>
            <Button text="See More" url="#" />
          </div>

          {/* img container */}
          <div className='w-full h-[500px] flex-1 relative'>
            <Image className='object-cover' fill={true} src="https://images.pexels.com/photos/14246241/pexels-photo-14246241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt='' />
          </div>
      
      </div>

     
     




    </div>
  )
}

export default Category