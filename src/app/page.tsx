import Image from 'next/image'
import roofingImage from '../assets/images/roofingImage.webp'
import roofingCoverImage from '../assets/images/roofingCoverImage.webp'
import BookInspection from '@/app/landingPage/components/bookInspection/bookInspection'
import AboutUs from './landingPage/components/aboutUs/aboutUs'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import LandingPagePic1 from '../assets/images/landingPagePic1.webp'
import GrandOpeningBanner from './landingPage/components/grandOpeningBanner/grandOpeningBanner'
import TheProcess from './landingPage/components/theProcess/theProcess'

export default function Home() {
  return (
    <main className="relative flex flex-col w-full h-full grow">
      {/* <Image className='h-[600px] max-w-7xl object-cover opacity-75 absolute top-0 grayscale' src={roofingCoverImage} alt=''></Image> */}
      <div className='z-10 flex w-full pt-24 pb-24 bg-opacity-50 h-fit'>
        <div className='flex flex-col items-start justify-center w-1/2 h-full gap-8 text-2xl text-black '>
          <span className='text-6xl font-semibold text-white font-display-2'>Absolutely The Best Roofing Company You&apos;ve Ever Heard.</span>
          <div className='flex flex-col p-2 pl-4 pr-4 bg-black border-l-2 border-primary h-fit bg-opacity-20 w-fit backdrop-blur-sm'>
            <span className='text-xs font-semibold text-white'>GIVE US A CALL</span>
            <span className='text-3xl font-semibold text-white font-display-2'>000-0000-0000</span>
          </div>
          <LinkButtonLearnMore route={'/services'}/>
        </div>
        {/* <div className='flex flex-col items-center justify-center w-1/2 h-full text-2xl text-white'>
          <div className='w-full h-full p-8 bg-white border border-white bg-opacity-30'>
            <span className='text-center '>Get A Free Quote</span>
            <div className='w-full h-full'>
            </div>
          </div>
        </div> */}
      </div>

      <div className='flex flex-col gap-12 w-full'>
        <BookInspection/>
        <AboutUs />
        <TheProcess />

      </div>

    </main>
  )
}
