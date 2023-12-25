'use client'

import CallIcon from '@mui/icons-material/Call';
import ConstructionIcon from '@mui/icons-material/Construction';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Image from 'next/image';
import grandOpening from '../../../../assets/images/grandOpening.webp'
import ProcessCard from '../theProcess/processCard';
import roofDrill from '../../../../assets/images/roofDrill.webp'
import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';

export interface ProcessCard {
  icon: JSX.Element;
  description: string;
}

export default function TheProcess () {

  const [animationsExecuted, setAnimationsExecuted] = useState(false)

  const statementRef = useRef<HTMLDivElement>(null)

  const processesRef = useRef<HTMLDivElement>(null)

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

      if(processesRef.current){
        processesRef.current.classList.remove('opacity-0')
        processesRef.current.classList.add('opacity-100')
      } 

    } 

    return () => {
      clearTimeout(timeoutId)
    }

  },[inView, animationsExecuted])

  const process = [
    { icon : <CallIcon fontSize='medium' />, description: 'Contact us and book an inspection.'},
    { icon : <ConstructionIcon fontSize='medium' />, description: 'We will evaluate and repair or replace your roof.'},
    { icon : <InsertEmoticonIcon fontSize='medium' />, description: 'Rest easy knowing your house and family are protected. '},

  ]
  return (
    <div className="relative flex justify-end gap-8 h-full w-full rounded-xl " ref={ref}>

      <div className='relative z-10 flex flex-col text-jet  h-fit md:p-0 w-full'>
        <div className='opacity-0 p-4 rounded-t-xl w-full grow flex flex-col gap-4 bg-white bg-opacity-50 transition-opacity duration-700' ref={statementRef}>
          <span className='text-sm font-semibold font-display-2 rounded-2xl text-orange-600 font-inter-tight-display w-fit'># The Process</span>
          <span className='font-inter-tight-display font-semibold  text-5xl rounded-xl text-jet'>Simple steps to becoming a happy customer in no time!</span>
        </div>
        
        <div className="opacity-0 flex flex-col gap-4 h-full w-full rounded-b-xl bg-white bg-opacity-50 p-4 transition-opacity duration-1000" ref={processesRef}>
          {
          process.map((card, index) => (
            <ProcessCard 
            key={index}
            card={card} 
            index={index} 
            />
            
          ))
          }
          
        </div>

        <Image className='md:hidden opacity-30 object-cover grayscale absolute top-0 left-0 h-full w-full rounded-2xl' src={roofDrill} alt="" />
      </div>

      <div className='hidden md:flex justify-end  relative max-h-[100%] min-w-max w-full  rounded-xl overflow-hidden '>
        <Image className='opacity-100 absolute top-0 right-0 object-cover w-full h-full grayscale rounded-2xl' src={roofDrill} alt="" priority/>
        <div className='top-0  absolute h-full w-1/3 bg-orange-500 bg-opacity-50'>
          
        </div>

        
      </div>

      

    </div>
  )
}