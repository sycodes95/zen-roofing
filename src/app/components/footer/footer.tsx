import RoofingIcon from '@mui/icons-material/Roofing';
import Logo from '../header/logo';
import Link from 'next/link';


export default function Footer() {

  const routes = [
    { name: 'Services', route : '/services'},
    { name: 'About', route : '/about'},
    { name: 'Contact Us', route : '/contact'},
    { name: 'Gallery', route : '/gallery'}

  ]
  return (
    <div className="flex justify-center w-full h-full bg-white text-jet z-50 border-t border-zinc-300">
      <div className="max-w-7xl justify-between flex flex-col md:flex-row items-start gap-8 w-full p-4 md:p-12">
        <div className='flex flex-col justify-between h-full gap-2'>
          <div className="relative flex h-24 items-center mt-1 text-jet">
            <Logo />
          </div>
          <div>
            <span className='text-xs'>Copyright © 2023 Zen Roofing Corp, All rights reserved</span>
          </div>

        </div>

        <div className='w-fit flex flex-col md:flex-row gap-12'>

          <div className="flex flex-col gap-2">
            <span className="text-2xl font-inter-tight-display  pb-2 border-b-2 border-jet">Quick Links</span>
            {
            routes.map((route, index) => (
              <Link className='text-xs hover:text-stone-400 transition-colors' key={route.name} href={route.route}>{route.name}</Link>
            ))
            }
          </div>
          
          <div className="flex flex-col gap-2">
            <span className="text-2xl font-inter-tight-display  pb-2 border-b-2 border-jet">Contact Info</span>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold">Open</span>
              <span >Mon - Fri</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold">Hours</span>
              <span>8am - 6pm</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold">Phone</span>
              <span>000-0000-0000</span>
            </div>
            <div className="flex items-center gap-2 text-xs">
              <span className="font-semibold">Email</span>
              <span>roofing@gmail.com</span>
            </div>
          </div>


        </div>

        


      </div>
    </div>
  )
}