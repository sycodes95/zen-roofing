import Image from 'next/image'
import roofingImage from '../assets/images/roofingImage.webp'
import roofingCoverImage from '../assets/images/roofingCoverImage.webp'

export default function Home() {
  return (
    <main className="relative bg-white h-full w-full grow flex flex-col">
      <Image className='h-[600px] w-full object-cover opacity-75 absolute top-0 grayscale' src={roofingCoverImage} alt=''></Image>
      <div className='w-full h-[600px] flex  p-12 z-10 bg-rose-500 bg-opacity-50'>
        <div className='w-1/2 h-full flex items-center font-display-2 text-2xl text-black'>
          <span className='text-6xl text-white'>Absolutely the best roofing company you've ever heard of.</span>
          
        </div>
        <div className='w-1/2 h-full font-display-2 flex flex-col justify-center items-center text-2xl text-white'>
          <div className='bg-white bg-opacity-30 h-full w-full p-8 border border-white'>
            <span className='text-center '>Get A Free Quote</span>
            <div className='h-full w-full'>
            </div>
          </div>
          
          
        </div>
      </div>
    </main>
  )
}
