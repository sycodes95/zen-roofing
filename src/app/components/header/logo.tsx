import Link from "next/link";
import RoofingIcon from '@mui/icons-material/Roofing';

export default function Logo () {
  return (
    <Link className='flex items-center text-white border-4 border-rose-600 bg-white p-4' href={'/'}>
      <div className="flex items-center mt-1 text-rose-600">
        <RoofingIcon className='mb-1 mr-1 ' fontSize='medium'/>
        <span className=" font-display text-2xl font-bold  "> ZEN</span>
        <span className=" font-display text-sm font-bold flex mt-1  "> roofing</span>
      </div>
      
    </Link>
  )
}