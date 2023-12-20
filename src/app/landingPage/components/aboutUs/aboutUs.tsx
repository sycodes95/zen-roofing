import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import AtroposEffect from '@/app/components/atropos/atroposEffect'

export default function AboutUs () {
  return (
    <div className="relative flex gap-8 h-full w-full">

      <div className='hidden md:flex relative h-[600px] min-w-max w-3/4  rounded-2xl overflow-hidden '  data-atropos-offset="10">
        <Image className='opacity-100 object-cover  absolute top-0 left-0 h-full w-full rounded-2xl grayscale' src={LandingPagePic1} alt='' priority/>

        <div className='h-full w-1/3 absolute top-0 bg-orange-500 bg-opacity-40 z-0'></div>
      </div>

      <div className='md:absolute relative right-0 md:top-1/2 md:-translate-y-1/2  flex flex-col text-jet md:w-1/2 h-fit  overflow-hidden rounded-xl'>

        <Image className='object-cover grayscale opacity-30 h-full flex md:hidden absolute top-1/2 -translate-y-1/2 left-0' src={LandingPagePic1} alt='' />
        <div className='p-4 rounded-t-xl flex flex-col gap-4 bg-black bg-opacity-90'>
          <span className='text-sm font-semibold font-display-2 rounded-2xl bg-white text-black  w-fit pl-4 pr-4' ># About Us</span>
          <span className='font-display-2  text-5xl pl-2 rounded-xl text-white' >We take pride in our work & we keep hammering until you are satisfied.</span>

        </div>

        <div className='p-4 rounded-b-xl border-2 border-orange-500 border-t-0 bg-white bg-opacity-80 border-opacity-90 flex flex-col gap-4 font-inter-tight'>
          <span className='text-sm font-semibold' >We are a family owned roofing company, operating in the Los Angeles County area.</span>

          <span className='text-sm ' >
            Our values are authenticity, family and community! Our number one commitment is to excel in customer satisfaction. We accomplish this by providing the best materials and customer service in Los Angeles.
          </span>
          
          <LinkButtonLearnMore className='' route='/about'/>

        </div>
      </div>
    </div>
  )
}