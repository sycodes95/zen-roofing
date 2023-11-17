import Image from 'next/image'
import roofingImage from '../assets/images/roofingImage.webp'
import roofingCoverImage from '../assets/images/roofingCoverImage.webp'

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-full grow">
      {/* <Image className='h-[600px] max-w-7xl object-cover opacity-75 absolute top-0 grayscale' src={roofingCoverImage} alt=''></Image> */}
      <div className='w-full h-[600px] flex  p-12 z-10  bg-opacity-50'>
        <div className='flex items-center w-1/2 h-full text-2xl text-black font-display-2'>
          <span className='text-6xl text-white'>Absolutely the best roofing company youve ever heard of.</span>
          
        </div>
        <div className='flex flex-col items-center justify-center w-1/2 h-full text-2xl text-white'>
          <div className='w-full h-full p-8 bg-white border border-white bg-opacity-30'>
            <span className='text-center '>Get A Free Quote</span>
            <div className='w-full h-full'>
            </div>
          </div>
          
          
        </div>
      </div>
    </main>
  )
}
