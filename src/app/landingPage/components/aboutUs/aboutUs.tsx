
'use client'
import Image from 'next/image'
import LandingPagePic1 from '../../../../assets/images/landingPagePic1.webp'
import LinkButtonLearnMore from '@/components/customUi/linkButtonLearnMore'
import { useInView } from 'react-intersection-observer';
import { useEffect, useRef, useState } from 'react';


export default function AboutUs () {

  const [animationsExecuted, setAnimationsExecuted] = useState(false)

  const statementRef = useRef<HTMLDivElement>(null)

  const aboutImageRef = useRef<HTMLImageElement>(null)

  const aboutImageColoredOverlayRef = useRef<HTMLDivElement>(null)

  const { ref, inView } = useInView({
    threshold: 0
  });

  useEffect(() => {
    let animationExecutedTimeoutId : NodeJS.Timeout | undefined = undefined;

    if(inView && !animationsExecuted){
      animationExecutedTimeoutId = setTimeout(() => {
        setAnimationsExecuted(true);
      }, 1000);
      if(statementRef.current){
        statementRef.current.classList.remove('opacity-0')
        statementRef.current.classList.add('opacity-100') 
      } 
      
      if(aboutImageRef.current){
        aboutImageRef.current.classList.remove('opacity-0')
        aboutImageRef.current.classList.add('opacity-100')
      }

      if(aboutImageColoredOverlayRef.current){
        aboutImageColoredOverlayRef.current.classList.remove('-left-full')
        aboutImageColoredOverlayRef.current.classList.add('-left-0')
      }
        
    } 

    return () => {
      clearTimeout(animationExecutedTimeoutId)
    }

  },[inView, animationsExecuted])

  return (
    <div className="relative flex gap-8 h-full w-full " ref={ref}>

      <div className='hidden md:flex relative max-h-[100%] min-w-max w-full  rounded-2xl overflow-hidden '  >
        <Image className=' object-cover  absolute top-0 opacity-0 transition-opacity duration-1000 h-full w-full rounded-2xl grayscale' src={LandingPagePic1} alt='' priority ref={aboutImageRef}/>

        <div className='h-full w-1/3 absolute top-0 -left-full transition-all duration-1000 bg-orange-500 bg-opacity-40 z-0' ref={aboutImageColoredOverlayRef}></div>
      </div>

      <div className=' relative flex flex-col text-jet h-full w-full overflow-hidden rounded-xl opacity-0 transition-all duration-1000'  ref={statementRef}>

        <Image className='object-cover grayscale opacity-30 h-full flex md:hidden absolute' src={LandingPagePic1} alt='' />

        <div className='p-4 rounded-t-xl flex flex-col gap-4 relative h-full bg-none'  >
          <span className='text-sm font-semibold font-inter-tight-display rounded-2xl bg-white text-orange-600  w-fit' ># About Us</span>
          <span className={`font-inter-tight-display font-semibold text-5xl rounded-xl text-jet`} >
            We take pride in our work & we keep hammering until you are satisfied.
          </span>

        </div>

        <div className={` p-4 rounded-b-xl border-t-0 bg-none border-opacity-90 flex flex-col gap-4 font-inter-tight`} >
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