'use client'

import RoofingIcon from '@mui/icons-material/Roofing';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Logo from './logo';
import Routes from './routes';
import { useEffect, useState } from 'react';
import TopBar from './topBar';
export default function Header() {

  const [isVisible, setIsVisible] = useState(true);
  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY < lastScrollY) {
        setIsVisible(true); // Show header when scrolling up
      } else {
        setIsVisible(false); // Hide header when scrolling down
      }

      lastScrollY = currentScrollY; // Update last scroll position
    };

    const handleClick = () => {
      setIsVisible(false)
    }

    window.addEventListener('scroll', handleScroll, { passive: true });

    window.addEventListener('click', handleClick);


    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('click', handleClick);

    }
  }, []);


  return (
    <div className={`${isVisible ? 'top-0' : '-top-24'} sticky transition-all duration-300 flex flex-col items-center justify-center w-full h-18 z-[40]  backdrop-blur-md bg-black bg-opacity-20 "`}>

      <TopBar />
      
      <div className="relative flex w-full h-16 max-w-7xl  rounded-b-2xl">
        <Logo variant='header'/>
        <div className='flex flex-col w-full h-full text-jet grow '>
          <Routes />
        </div>
      </div>
    </div>
  )
}

// HOME DEPOT VIBES