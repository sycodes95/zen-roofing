import CallIcon from '@mui/icons-material/Call';
import ConstructionIcon from '@mui/icons-material/Construction';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Image from 'next/image';
import grandOpening from '../../../../assets/images/grandOpening.webp'
import ProcessCard from '../theProcess/processCard';
import roofDrill from '../../../../assets/images/roofDrill.webp'

export interface ProcessCard {
  icon: JSX.Element;
  description: string;
}

export default function TheProcess () {

  const process = [
    { icon : <CallIcon fontSize='medium' />, description: 'Contact us and book an inspection.'},
    { icon : <ConstructionIcon fontSize='medium' />, description: 'We will evaluate and repair or replace your roof.'},
    { icon : <InsertEmoticonIcon fontSize='medium' />, description: 'Rest easy knowing your house and family are protected. '},

  ]
  return (
    <div className="relative flex gap-8 h-full w-full">

      <div className='relative  flex flex-col text-jet w-full h-full md:p-0'>
        <div className=' p-4 rounded-t-xl border-2 border-b-0 border-orange-500 flex flex-col gap-4 bg-white '>
          <span className='text-sm font-semibold font-inter-tight rounded-2xl bg-black bg-opacity-90 text-white  w-fit pl-4 pr-4'># The Process</span>
          <span className='font-display-2  text-5xl pl-2 rounded-xl text-black text-opacity-90 mt-2'>Simple steps to becoming a happy customer in no time!</span>
        </div>
        
        <div className="flex flex-col gap-4 h-full w-full rounded-b-xl border border-t-0 bg-black border-black border-opacity-90 bg-opacity-90 p-4">
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

      <div className='hidden md:flex relative  max-h-full min-w-max w-full grow rounded-2xl overflow-hidden '>
        <Image className='opacity-100 object-cover grayscale absolute top-3/4 -translate-y-3/4 left-0 h-full w-full rounded-2xl' src={roofDrill} alt="" priority/>
      </div>

      

    </div>
  )
}