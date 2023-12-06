import CallIcon from '@mui/icons-material/Call';
import ConstructionIcon from '@mui/icons-material/Construction';
import InsertEmoticonIcon from '@mui/icons-material/InsertEmoticon';
import Image from 'next/image';
import grandOpening from '../../../../assets/images/grandOpening.webp'
import ProcessCard from '../theProcess/processCard';
export interface ProcessCard {
  icon: JSX.Element;
  description: string;
}

export default function TheProcess () {

  const process = [
    { icon : <CallIcon className='lg:text-8xl text-6xl'  />, description: 'Contact us and book an inspection.'},
    { icon : <ConstructionIcon className='lg:text-8xl text-6xl '  />, description: 'We will evaluate and repair or replace your roof.'},
    { icon : <InsertEmoticonIcon className='lg:text-8xl text-6xl '  />, description: 'Rest easy knowing your house and family are protected. '},

  ]
  return (
    <div className="flex flex-col gap-8">
      <div className='relative  flex flex-col  gap-8 text-jet'>

      
        <div className="absolute top-0 left-0 bg-white bg-opacity-70 h-full w-full -z-10"></div>
        <Image className=" w-full h-[550px] object-cover grayscale opacity-25 z-0" src={grandOpening} alt=""/>
        <div className='absolute top-0 left-0 h-full w-full flex flex-col items-center gap-12'>
          <div className=' flex flex-col gap-4 p-4'>
            <span className='text-6xl font-display-2 font-bold'>The Process</span>
            <span className='text-sm font-display-2 font-semibold'>Simple steps to becoming a happy customer in no time!</span>
          </div>
          
          <div className="grid grid-cols-3 gap-12 items-center h-full w-full">
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
        </div>
      </div>
      

    </div>
  )
}