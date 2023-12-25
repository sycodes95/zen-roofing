
'use client'
import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import AtroposEffect from '@/app/components/atropos/atroposEffect'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';


export default function AboutUs () {
  const aboutUsRef = useRef(null)
  const [animationsExecuted, setAnimationsExecuted] = useState(false)
  const statementRef = useRef(null)
  const descriptionRef = useRef(null)

  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    let timeoutId : NodeJS.Timeout | undefined = undefined;
    if(inView && !animationsExecuted){
      timeoutId = setTimeout(() => {
        setAnimationsExecuted(true);
      }, 1000);

      if(statementRef.current){
        statementRef.current.classList.remove('opacity-0')
        statementRef.current.classList.add('opacity-100')
      } 

      if(descriptionRef.current){
        descriptionRef.current.classList.remove('opacity-0')
        descriptionRef.current.classList.add('opacity-100')
      } 

    } 

    return () => {
      clearTimeout(timeoutId)
    }

  },[inView, animationsExecuted])

  return (
    <div className="relative flex gap-8 h-full w-full">

      <div className='hidden md:flex relative max-h-[100%] min-w-max w-full  rounded-2xl overflow-hidden '  >
        <Image className='opacity-100 object-cover  absolute top-0 left-0 h-full w-full rounded-2xl grayscale' src={LandingPagePic1} alt='' priority/>

        <div className='h-full w-1/3 absolute top-0 bg-orange-500 bg-opacity-40 z-0'></div>
      </div>

      <div className=' relative flex flex-col text-jet h-full w-full overflow-hidden rounded-xl' >

        <Image className='object-cover grayscale opacity-30 h-full flex md:hidden absolute' src={LandingPagePic1} alt='' />

        <div className='p-4 rounded-t-xl flex flex-col gap-4 relative h-full ' >
          <span className='text-sm font-semibold font-inter-tight-display rounded-2xl bg-white text-orange-600  w-fit' ref={ref}># About Us</span>
          <span className={`font-inter-tight-display font-semibold text-5xl rounded-xl text-jet opacity-0 transition-opacity duration-700`} ref={statementRef}>
            We take pride in our work & we keep hammering until you are satisfied.
          </span>

        </div>

        <div className={` transition-opacity duration-1000 p-4 rounded-b-xl border-t-0 bg-white bg-opacity-80 border-opacity-90 flex flex-col gap-4 font-inter-tight`} ref={descriptionRef}>
          <span className={`text-sm font-semibold `} >We are a family owned roofing company, operating in the Los Angeles County area.</span>

          <span className={'text-sm '} >
            Our values are authenticity, family and community! Our number one commitment is to excel in customer satisfaction. We accomplish this by providing the best materials and customer service in Los Angeles.
          </span>
          
          <LinkButtonLearnMore className='' route='/about'/>

        </div>
      </div>
    </div>
  ) 
}