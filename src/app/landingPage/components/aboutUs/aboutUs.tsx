import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import AtroposEffect from '@/app/components/atropos/atroposEffect'

export default function AboutUs () {
  return (
    <div className="relative flex gap-8 h-full w-full">

      <div className='hidden md:flex relative max-h-[100%] min-w-max w-full  rounded-2xl overflow-hidden '  >
        <Image className='opacity-100 object-cover  absolute top-0 left-0 h-full w-full rounded-2xl grayscale' src={LandingPagePic1} alt='' priority/>

        <div className='h-full w-1/3 absolute top-0 bg-orange-500 bg-opacity-40 z-0'></div>
      </div>

      <div className=' relative flex flex-col text-jet h-full w-full overflow-hidden rounded-xl'>

        <Image className='object-cover grayscale opacity-30 h-full flex md:hidden absolute' src={LandingPagePic1} alt='' />

        <div className='p-4 rounded-t-xl flex flex-col gap-4 '>
          <span className='text-sm font-semibold font-display-2 rounded-2xl bg-white text-orange-600  w-fit' ># About Us</span>
          <span className='font-display-2  text-5xl rounded-xl text-black' >We take pride in our work & we keep hammering until you are satisfied.</span>

        </div>

        <div className='p-4 rounded-b-xl border-t-0 bg-white bg-opacity-80 border-opacity-90 flex flex-col gap-4 font-inter-tight'>
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