'use client'

import RoofingIcon from '@mui/icons-material/Roofing';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import Routes from './routes';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocationOnIcon from '@mui/icons-material/LocationOn';
export default function Header() {

  

  return (
    <div className="h-full w-full  flex flex-col justify-center items-center rounded-b-2xl mt-4">
      
      <div className="max-w-7xl w-full flex h-full bg-rose-600 bg-opacity-90  ">
        <Logo />
        <div className='flex flex-col h-full w-full grow'>
          <div className=" w-full flex h-fit gap-4 p-1 justify-end bg-white  pl-4 pr-4">
            <div className='flex items-center gap-2 text-gray-500'>
              <LocalPhoneIcon className='text-sm'  />
              <span className=' text-sm'>000-0000-0000</span>
            </div>
            <div className='flex items-center gap-2 text-gray-500'>
              <LocationOnIcon className='text-sm' />
              <span className=' text-sm'>Los Angeles, CA</span>
            </div>
          </div>

          <Routes />
        </div>
      </div>
    </div>
  )
}

// HOME DEPOT VIBES