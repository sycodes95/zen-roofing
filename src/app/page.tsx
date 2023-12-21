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
      <div className='absolute top-0 left-0 h-[800px] w-full bg-black bg-opacity-40  -z-10'></div>
      <Image className='h-[800px] w-full object-cover top-0 absolute left-0 -z-20 grayscale'  src={roofOverlap} alt='' priority/>

      <div className='z-10 flex w-full pt-20 pb-20 bg-opacity-50 h-fit '>
        <div className='flex flex-col items-start justify-center h-full text-2xl text-black   rounded-xl w-fit   '>
          <div className=' backdrop-blur-sm p-4 rounded-xl rounded-bl-none'>
            <div className='flex flex-col gap-2 rounded-xl  text-white'>
              <span className='text-4xl md:text-6xl text-left max-w-xl mt-1 font-display'>Peak performance for your roof.</span>
              <span className='text-sm text-left font-inter-tight max-w-xl w-3/4 '>&quot;Delivering expert craftsmanship and innovative roofing solutions tailored to your home&apos;s needs.&quot;</span>
            </div>

          </div>
          
          <div className=' backdrop-blur-sm p-4 rounded-xl  -white -t-0 rounded-bl-none rounded-tl-none  bg-opacity-70 rounded-tr-none'>
            <div className='flex flex-col items-start p-2 pl-4 pr-4 bg-white rounded-xl h-fit bg-opacity-70 w-fit backdrop-blur-sm'>
              <span className='text-xs font-semibold text-jet'>Give us a call</span>
              <span className='text-3xl font-semibold text-jet font-inter-tight-display'>213-745-0000</span>
            </div>
          </div>
          
          <div className=' -white -t-0 backdrop-blur-sm p-4 rounded-xl rounded-tl-none bg-opacity-70 rounded-tr-none h-fit flex'>
            <LinkButtonLearnMore route={'/services'}/>
          </div>

          
        </div>
        
      </div>

      <div className='flex flex-col bg-white p-4 gap-24 w-full pb-24 rounded-2xl'>
        <BookInspection/>
        <AboutUs />
        <TheProcess />
        <Certification />

      </div>

    </main>
  )
}
