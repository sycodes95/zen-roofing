import Link from "next/link";
import RoofingIcon from '@mui/icons-material/Roofing';
import zenRoofingLogo from '../../../assets/images/zenroofinglogo.png'
import Image from "next/image";

export default function Logo () {
  return (
    <Link className=' flex items-center h-full text-jet border-black rounded-2xl' href={'/'}>
      <div className="flex items-center mt-1 text-black h-full ">
        <Image className="object-contain h-full w-fit p-0" src={zenRoofingLogo} alt="" />
        {/* <RoofingIcon className='mb-1 mr-1 text-rose-600 ' fontSize='medium'/>
        <span className="text-4xl font-bold font-display"> ZEN</span>
        <span className="flex mt-1 text-xl font-bold font-display"> roofing</span> */}
      </div>
      
    </Link>
  )
}