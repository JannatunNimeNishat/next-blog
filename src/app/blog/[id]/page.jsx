import Image from 'next/image'
import React from 'react'

const BlogPost = () => {
  return (
    <div className='flex flex-col gap-[80px]'>
      {/* top */}
      <div className='flex items-center gap-[40px]'>
        {/* left */}
        <div className='flex-1 flex flex-col gap-[40px]'>

          {/* title */}
          <h1 className='text-2xl font-bold'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nam, quaerat.</h1>
          {/* desc */}
          <p className='text-[18px] text-justify'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At nisi fugit quaerat consectetur perspiciatis quisquam dolore error ipsam? Doloremque modi, pariatur provident eaque consequatur magnam blanditiis. Aperiam incidunt in odit.</p>

          {/* img */}
          <div className='flex items-center gap-3'>
            <Image
              src="https://images.pexels.com/photos/14246241/pexels-photo-14246241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=''
              width={30}
              height={30}
              className='rounded-full'
            />
            <p>John Doe</p>
          </div>
        </div>
        {/* right */}
        <div className='flex-1'>
          <Image
            alt=''
            width={500}
            height={300}
            className='object-cover h-[300px] rounded-md'
          />
        </div>
      </div>
      {/* bottom */}
      <div>
        <p className='text-justify'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae harum alias tempora ad officiis facilis aliquid expedita, minus est corporis sapiente fuga mollitia corrupti dolore molestiae, voluptatem impedit ullam dolorem, esse reiciendis sunt suscipit delectus doloribus! Voluptatibus quae ipsam dolore facilis, nisi
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis recusandae officiis ipsam, non ducimus nesciunt consequatur explicabo eveniet officia ratione consectetur est tenetur deleniti harum vitae tempore, dolores magni corrupti!
          <br />
          <br />
          rerum consequuntur, architecto ad totam libero aut cupiditate? Molestias iure minus ut? Laborum, totam delectus corporis nesciunt dolor sint ratione suscipit vero facere. Modi nemo odit adipisci! Distinctio veniam
          <br />
          <br />
          rem totam repellendus officia beatae nostrum dignissimos, tempore dolorum debitis? Commodi laborum modi quibusdam ab reprehenderit aut similique expedita iste veniam obcaecati explicabo placeat possimus perferendis odit illum fugiat nesciunt excepturi, eos repellat labore illo voluptas neque quidem? Dolore repudiandae deserunt placeat veniam praesentium quam quidem nisi! Assumenda quas id quasi ut aperiam! Dolore nemo placeat voluptates dolorum ea saepe ipsum nostrum, consequuntur, ratione veritatis blanditiis cumque quos consectetur animi enim sapiente officiis illum debitis iure vero tempora officia reprehenderit. Provident modi necessitatibus nam tenetur cumque quis rerum dolorum dicta architecto reprehenderit? Tempore exercitationem dolore eaque ducimus quasi nobis ut itaque! Harum, aliquam ipsa. Sit, dolores. Possimus harum iure atque inventore. Aliquam eos repellendus veritatis pariatur in quibusdam maiores doloremque, sequi est, quod error commodi laudantium doloribus adipisci quasi!</p>
      </div>
    </div>
  )
}

export default BlogPost