
import { useState } from "react"
import { Route } from "./header"
import Link from "next/link"
import Logo from "./logo"
import HamburgerMenu from "./hamburgerMenu";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
import zenRoofingLogo from '../../../assets/images/zenroofinglogo.png'

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose
} from "@/components/ui/sheet"
import { usePathname } from "next/navigation";
import Image from "next/image";

interface NavMobileProps {
  routes: Route[];
}

export default function NavMobile ( { routes } : NavMobileProps) {

  const path = usePathname()

  return (
    <Sheet>
      <SheetTrigger >
        <HamburgerMenu/> 
      </SheetTrigger>

      <SheetContent className='bg-white p-0 flex flex-col justify-between h-full' >
        <div className="flex flex-col">

          <SheetClose className="w-full h-full" asChild>
            <Link href={'/'} >
              <Image className="object-contain" src={zenRoofingLogo} height={400} width={300} priority={true} alt=""/>
            </Link>
          </SheetClose>

          {
          routes.map((route) => (
            <SheetClose asChild key={route.name}>
              <Link className={`flex gap-4 p-4 items-center w-full ${path === route.route ? 'bg-orange-500 text-white' : 'bg-none'}`}  href={route.route}>
                {route.icon}
                <span className="text-2xl font-inter-tight-display">{route.name}</span>
              </Link>
            </SheetClose>
          ))
          }
          
        </div>

        <div className="flex flex-col gap-2 p-4 font-inter-tight-display text-sm">
          <div className="flex gap-4 items-center">
            <LocalPhoneIcon/>
            <span>213-858-7485</span>
          </div>

          <div className="flex gap-4 items-center">
            <EmailIcon/>
            <span className="">zenroofingcorp@gmail.com</span>
          </div>
        </div>
      </SheetContent>
    </Sheet>
    
  )
}