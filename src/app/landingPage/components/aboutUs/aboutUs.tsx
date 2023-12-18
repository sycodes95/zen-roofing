import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import AtroposEffect from '@/app/components/atropos/atroposEffect'

export default function AboutUs () {
  return (
    <div className="relative flex gap-8 h-full w-full">
      <div className='hidden md:flex relative  max-h-full min-w-max w-full grow rounded-2xl overflow-hidden '  data-atropos-offset="10">
        <Image className='opacity-100 object-cover grayscale absolute top-0 left-0 h-full w-full rounded-2xl' src={LandingPagePic1} alt='' priority/>
        {/* <div className='absolute bottom-0 right-0 flex flex-col gap-2 items-center justify-center bg-white w-36 h-36 border-b-4 border-orange-400 p-4 '>
          <span className='text-5xl '>1</span>
          <span className='text-sm text-center'>Month Experience</span>
        </div> */}
      </div>
      <div className='relative  flex flex-col text-jet w-full gap-4 h-full  overflow-hidden rounded-2xl'>
        <Image className='object-cover grayscale opacity-30 h-full flex md:hidden absolute top-1/2 -translate-y-1/2 left-0' src={LandingPagePic1} alt=''
        data-atropos-offset="-10"
        />
        <span className='text-sm  text-orange-500 font-inter-tight font-bold rounded-2xl  w-fit' data-atropos-offset="10"># About Us</span>
        <span className='font-display-2  text-5xl pl-2' data-atropos-offset="7">We take pride in our work & we keep hammering until you are satisfied.</span>
        <span className='  text-sm font-semibold' data-atropos-offset="5">We are a family owned roofing company, operating in the Los Angeles County area.</span>

        <span className=' text-sm ' data-atropos-offset="0">
          Our values are authenticity, family and community! Our number one commitment is to excel in customer satisfaction. We accomplish this by providing the best materials and customer service in Los Angeles.
        </span>
        
        <LinkButtonLearnMore route='/about' data-atropos-offset=""/>


      </div>
    </div>
  )
}