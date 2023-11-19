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
    <div className="flex flex-col items-center justify-center w-full h-18 rounded-b-2xl z-[60] ">
      
      <div className="relative flex w-full h-20 max-w-7xl ">
        <Logo />
        <div className='flex flex-col w-full h-full text-white grow '>
          {/* <div className="flex justify-end w-full gap-4 p-1 pl-4 pr-4 text-xs h-fit">
            <div className='flex items-center gap-2 '>
              <LocalPhoneIcon className='text-sm'  />
              <span className=''>000-0000-0000</span>
            </div>
            <div className='flex items-center gap-2 '>
              <LocationOnIcon className='text-sm' />
              <span className=''>Los Angeles, CA</span>
            </div>
          </div> */}

          <Routes />
        </div>
      </div>
    </div>
  )
}

// HOME DEPOT VIBES