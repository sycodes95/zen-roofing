import Image from 'next/image'
import roofOverlap from '../../../assets/images/roofOverlaps.webp'

export default function BackgroundImage () {
  return (
    <>
      <div className='absolute top-0 left-0 h-[800px] w-full bg-black bg-opacity-40  -z-10'></div>
      <Image className='h-[800px] w-full object-cover top-0 absolute left-0 -z-20 grayscale'  src={roofOverlap} alt='' height={1920} width={1080} priority={true} placeholder='blur'/>
    </>
  )
}