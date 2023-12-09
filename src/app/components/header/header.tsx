'use client'

import RoofingIcon from '@mui/icons-material/Roofing';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import Routes from './routes';
export default function Header() {

  return (
    <div className="sticky top-0 flex flex-col items-center justify-center w-full h-18 z-[60] bg-white bg-opacity-70 backdrop-blur-md">
      
      <div className="relative flex w-full h-16 max-w-7xl  rounded-b-2xl pl-12 pr-12">
        <Logo />
        <div className='flex flex-col w-full h-full text-jet grow '>
          <Routes />
        </div>
      </div>
    </div>
  )
}

// HOME DEPOT VIBES