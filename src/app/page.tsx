import BookInspection from '@/app/landingPage/components/bookInspection/bookInspection'
import AboutUs from './landingPage/components/aboutUs/aboutUs'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import TheProcess from './landingPage/components/theProcess/theProcess'
import Certification from './landingPage/components/certification/certification'
import BackgroundImage from './components/home/backgroundImage'
import Hero from './components/home/hero'

export default function Home() {
  return (
    <main className=" flex flex-col w-full h-full grow">

      <BackgroundImage />

      <div className='z-10 flex w-full pt-8 pb-8 md:pt-20 md:pb-20 bg-opacity-50 h-fit '>
        <Hero />
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
