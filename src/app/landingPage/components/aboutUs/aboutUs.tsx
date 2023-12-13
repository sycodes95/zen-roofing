import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'

export default function AboutUs () {
  return (
    <div className="relative flex gap-12 h-full w-full">
      <div className='hidden md:flex relative  max-h-full min-w-max w-full grow rounded-2xl overflow-hidden'>
        <Image className='opacity-100 object-cover grayscale absolute top-0 left-0 h-full w-full rounded-2xl' src={LandingPagePic1} alt='' priority/>
        {/* <div className='absolute bottom-0 right-0 flex flex-col gap-2 items-center justify-center bg-white w-36 h-36 border-b-4 border-emerald-400 p-4 '>
          <span className='text-5xl font-bold'>1</span>
          <span className='text-sm text-center'>Month Experience</span>
        </div> */}
      </div>
      <div className='relative  flex flex-col text-jet w-full gap-4 h-full p-4 md:p-0 overflow-hidden rounded-2xl'>
        <Image className='object-cover grayscale opacity-30 h-full flex md:hidden absolute top-1/2 -translate-y-1/2 left-0' src={LandingPagePic1} alt=''/>
        <span className='text-sm font-bold text-emerald-500'># About Us</span>
        <span className='font-display-2 font-bold text-5xl '>We take pride in our work & we keep hammering until you are satisfied.</span>
        <span className=' font-bold text-sm '>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur esse est incidunt porro tempora explicabo delectus omnis rem consequatur? Ipsa consequuntur fugiat culpa id impedit, eaque ipsum vero ut non.</span>

        <span className=' text-sm '>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur esse est incidunt porro tempora explicabo delectus omnis rem consequatur? Ipsa consequuntur fugiat culpa id impedit, eaque ipsum vero ut non.
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur esse est incidunt porro tempora explicabo delectus omnis rem consequatur? Ipsa consequuntur fugiat culpa id impedit, eaque ipsum vero ut non.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur esse est incidunt porro tempora explicabo delectus omnis rem consequatur? Ipsa consequuntur fugiat culpa id impedit, eaque ipsum vero ut non.
        </span>
        
        <LinkButtonLearnMore route='/about'/>


      </div>
    </div>
  )
}