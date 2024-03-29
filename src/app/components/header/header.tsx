'use client'

import Logo from './logo';
import React, { useEffect, useState } from 'react';
import TopBar from './topBar';

import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PhotoIcon from '@mui/icons-material/Photo';

import Navbar from './navBar';
import NavMobile from './navMobile';
import { usePathname } from 'next/navigation';

export interface Route {
  name: string; 
  route: string;
  icon: React.ReactNode;
}

export default function Header() {

  const pathname = usePathname()

  const [isVisible, setIsVisible] = useState(true);

  let lastScrollY = typeof window !== 'undefined' ? window.scrollY : 0;

  const routes: Route[] = [
    { name: 'Services', route : '/services', icon: <EngineeringIcon className="text-lg"/>},
    { name: 'About', route : '/about', icon: <InfoIcon className="text-lg"/>},
    { name: 'Contact Us', route : '/contact', icon: <ContactSupportIcon className="text-lg"/>},
    { name: 'Gallery', route : '/gallery', icon: <PhotoIcon className="text-lg"/>}
  ];

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

  useEffect(()=> {

    const [_, routeName] = pathname.split('/');

    if(routeName) {
      
      const capitalizedFirstLetter = routeName[0].toUpperCase()
      const restOfWord = routeName.slice( 1, routeName.length )
      const title = capitalizedFirstLetter + restOfWord;

      document.title = title;

    } else {
      document.title = 'Zen Roofing Corp';
    }
    
  },[pathname]);


  return (
    <div className={`${isVisible ? 'top-0' : '-top-24'} md:border-0 border-t-8 border-orange-500 sticky transition-all duration-300 flex flex-col items-center justify-center w-full h-18 z-[40]  backdrop-blur-md bg-black bg-opacity-20 "`}>

      <TopBar />
      
      <div className="relative flex justify-between w-full h-16 max-w-7xl  rounded-b-2xl">

        <Logo variant='header'/>

        <Navbar routes={routes}/>

        <NavMobile routes={routes} />
        
      </div>
    </div>
  )
}

// HOME DEPOT VIBES