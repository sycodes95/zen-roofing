import Image from 'next/image'
import roofingImage from '../assets/images/roofingImage.webp'
import roofingCoverImage from '../assets/images/roofingCoverImage.webp'
import BookInspection from '@/app/landingPage/components/bookInspection/bookInspection'
import AboutUs from './landingPage/components/aboutUs/aboutUs'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import LandingPagePic1 from '../assets/images/landingPagePic1.webp'
import GrandOpeningBanner from './landingPage/components/grandOpeningBanner/grandOpeningBanner'
import TheProcess from './landingPage/components/theProcess/theProcess'
import grandOpening from '../assets/images/roofingcover.jpg'

export default function Home() {
  return (
    <main className=" flex flex-col w-full h-full grow">
      <div className='absolute top-16 left-0 h-[800px] w-full bg-emerald-300 bg-opacity-20 -z-10'></div>
      <Image className='h-[800px] w-full object-cover opacity-50 absolute top-16 left-0 grayscale -z-20 ' src={roofingCoverImage} alt=''/>

      {/* <Image className='h-[600px] max-w-7xl object-cover opacity-75 absolute top-0 grayscale' src={roofingCoverImage} alt=''></Image> */}
      <div className='z-10 flex w-full pt-24 pb-24 bg-opacity-50 h-fit'>
        <div className='flex flex-col items-start justify-center w-full h-full gap-10 text-2xl text-black '>
          <span className='text-6xl text-left font-semibold text-jet font-display-2 max-w-xl '>Peak Performance for Your Roof</span>
          <div className='flex flex-col items-start p-2 pl-4 pr-4 bg-emerald-300 border-2 rounded-lg border-emerald-300 h-fit bg-opacity-40 w-fit backdrop-blur-sm'>
            <span className='text-xs font-semibold text-jet'>Give us a call</span>
            <span className='text-3xl font-semibold text-jet font-display-2'>213-745-0000</span>
          </div>
          <LinkButtonLearnMore route={'/services'}/>
        </div>
        
      </div>

      <div className='flex flex-col gap-24 bg-white p-12 w-full pb-36 rounded-2xl'>
        <BookInspection/>
        <AboutUs />
        <TheProcess />

      </div>

    </main>
  )
}
