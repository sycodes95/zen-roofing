import Link from "next/link";
import RoofingIcon from '@mui/icons-material/Roofing';

export default function Logo () {
  return (
    <Link className='absolute top-0 left-0 flex items-center h-full p-4 text-white bg-white border-black rounded-2xl' href={'/'}>
      <div className="flex items-center mt-1 text-black">
        <RoofingIcon className='mb-1 mr-1 text-rose-600 ' fontSize='medium'/>
        <span className="text-2xl font-bold font-display"> ZEN</span>
        <span className="flex mt-1 text-sm font-bold font-display"> roofing</span>
      </div>
      
    </Link>
  )
}