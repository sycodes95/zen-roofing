import Image from 'next/image'
import roofingCoverImage from '../assets/images/roofingCoverImage.webp'
import BookInspection from '@/app/landingPage/components/bookInspection/bookInspection'
import AboutUs from './landingPage/components/aboutUs/aboutUs'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import TheProcess from './landingPage/components/theProcess/theProcess'

export default function Home() {
  return (
    <main className=" flex flex-col w-full h-full grow">
      <div className='absolute top-0 left-0 h-[800px] w-full bg-black bg-opacity-20 -z-10'></div>
      {/* <Image className='h-[800px] w-full object-cover top-0 opacity-90 absolute left-0 grayscale -z-20' src={roofingCoverImage} alt=''/> */}

      <div className='z-10 flex w-full pt-24 pb-24 bg-opacity-50 h-fit '>
        <div className='flex flex-col items-start justify-center h-full gap-8 text-2xl text-black p-4 pt-8 pb-8 md:p-12 bg-white rounded-xl w-fit bg-opacity-70 border-white border-2  '>
          <div className='flex flex-col gap-2'>
            <span className='text-4xl md:text-6xl text-left font-semibold text-jet font-display-2 max-w-xl '>Peak performance for your roof.</span>
            <span className='text-sm text-left text-jet font-main max-w-xl w-3/4 '>&quot;Delivering expert craftsmanship and innovative roofing solutions tailored to your home&apos;s needs.&quot;</span>
          </div>
          
          <div className='flex flex-col items-start p-2 pl-4 pr-4 bg-emerald-300 border rounded-lg border-emerald-300 h-fit bg-opacity-40 w-fit backdrop-blur-sm'>
            <span className='text-xs font-semibold text-jet'>Give us a call</span>
            <span className='text-3xl font-semibold text-jet font-display-2'>213-745-0000</span>
          </div>
          <LinkButtonLearnMore route={'/services'}/>
        </div>
        
      </div>

      <div className='flex flex-col gap-24 bg-white p-4 pt-12 md:p-12 w-full pb-36 rounded-2xl'>
        <BookInspection/>
        <AboutUs />
        <TheProcess />
      </div>

    </main>
  )
}
