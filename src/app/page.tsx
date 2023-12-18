import Image from 'next/image'
import roofingCoverImage from '../assets/images/roofingCoverImage.webp'
import BookInspection from '@/app/landingPage/components/bookInspection/bookInspection'
import AboutUs from './landingPage/components/aboutUs/aboutUs'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import TheProcess from './landingPage/components/theProcess/theProcess'
import Certification from './landingPage/components/certification/certification'
import roofOverlap from '../assets/images/roofOverlaps.jpg'
import metalRoof from '../assets/images/metalRoof.webp'

export default function Home() {
  return (
    <main className=" flex flex-col w-full h-full grow">
      <div className='absolute top-0 left-0 h-[800px] w-full  -z-10'></div>
      <Image className='h-[800px] w-full object-cover top-0 absolute left-0 grayscale -z-20 '  src={roofOverlap} alt='' priority/>

      <div className='z-10 flex w-full pt-20 pb-20 bg-opacity-50 h-fit '>
        <div className='flex flex-col items-start justify-center h-full text-2xl text-black   rounded-xl w-fit bg-opacity-70 border-opacity-70  '>
          <div className='border border-white backdrop-blur-sm p-4 rounded-xl bg-opacity-70 rounded-bl-none'>
            <div className='flex flex-col gap-2 rounded-xl bg-black bg-opacity-60 p-6  text-white'>
              <span className='text-4xl md:text-6xl text-left  font-display-2 max-w-xl mt-1'>Peak performance for your roof.</span>
              <span className='text-sm text-left font-inter-tight max-w-xl w-3/4 '>&quot;Delivering expert craftsmanship and innovative roofing solutions tailored to your home&apos;s needs.&quot;</span>
            </div>

          </div>
          
          <div className=' backdrop-blur-sm p-4 rounded-xl border border-white border-t-0 rounded-bl-none rounded-tl-none  bg-opacity-70 rounded-tr-none'>
            <div className='flex flex-col items-start p-2 pl-4 pr-4 bg-white rounded-xl h-fit bg-opacity-70 w-fit backdrop-blur-sm'>
              <span className='text-xs font-semibold text-jet'>Give us a call</span>
              <span className='text-3xl font-semibold text-jet font-display-2'>213-745-0000</span>
            </div>
          </div>
          
          <div className='border border-white border-t-0 backdrop-blur-sm p-4 rounded-xl rounded-tl-none bg-opacity-70 rounded-tr-none h-fit flex'>
            <LinkButtonLearnMore route={'/services'}/>
          </div>

          
        </div>
        
      </div>

      <div className='flex flex-col bg-white p-4 gap-24 w-full6 rounded-2xl'>
        <BookInspection/>
        <AboutUs />
        <TheProcess />
        <Certification />
      </div>

    </main>
  )
}
