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
    <div className="relative flex justify-end gap-8 h-full w-full rounded-xl ">

      <div className='relative z-10 flex flex-col text-jet  h-fit md:p-0 w-full'>
        <div className=' p-4 rounded-t-xl w-full grow flex flex-col gap-4 bg-white bg-opacity-50 '>
          <span className='text-sm font-semibold font-display-2 rounded-2xl text-orange-600  w-fit pl-4 pr-4'># The Process</span>
          <span className='font-inter-tight-display font-semibold  text-5xl rounded-xl text-jet'>Simple steps to becoming a happy customer in no time!</span>
        </div>
        
        <div className="flex flex-col gap-4 h-full w-full rounded-b-xl bg-white bg-opacity-50 p-4">
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