import Button from '@/components/Button/Button'
import Image from 'next/image'
import hero_img from 'public/hero.png'
import styles from './page.module.css'
export default function Home() {
  return (
    <div className='flex items-center gap-[100px]'>

      <div className='flex-1 flex flex-col gap-[20px]'>
        <h1 className='text-[72px] font-bold bg-gradient-to-b from-[#194c33] to-[#bbb] bg-clip-text text-transparent leading-tight'>Better design for your digital  products.</h1>
        <p className='text-[24px] font-semibold'>
          Turning your Idea into Reality. We bring together the teams from the global  tech industry.
        </p>
        {/* <button className='p-[20px] cursor-pointer bg-[#53c28b] border-none rounded-[5px] w-max text-white'>See Our Works</button> */}
        <Button text="See Our Works" url="/portfolio"/>
      </div>
      <div className='w-[500px] object-contain '>
        <Image className={styles.my_animation}  src={hero_img} alt='' />
        {/* <Image width={500} height={500} src="https://images.pexels.com/photos/18110321/pexels-photo-18110321/free-photo-of-cat-sleeping-among-pots-on-fence.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"  alt=''/> */}
      </div>
    </div>
  )
}
