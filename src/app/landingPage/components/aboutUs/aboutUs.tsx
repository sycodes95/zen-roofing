import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'

export default function AboutUs () {
  return (
    <div className="grid grid-cols-2 gap-12 items-start">
      <div className='relative h-full w-full flex'>
        <Image className='object-cover grayscale opacity-90 rounded-2xl' src={LandingPagePic1} alt=''/>
        {/* <div className='absolute bottom-0 right-0 flex flex-col gap-2 items-center justify-center bg-white w-36 h-36 border-b-4 border-emerald-400 p-4 '>
          <span className='text-5xl font-bold'>1</span>
          <span className='text-sm text-center'>Month Experience</span>
        </div> */}
      </div>
      <div className='h-full w-full flex flex-col gap-4'>
        <span className='text-sm font-bold text-emerald-500'># About Us</span>
        <span className='font-display-2 font-bold text-5xl '>We take pride in our work & your satisfaction is our happiness.</span>
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