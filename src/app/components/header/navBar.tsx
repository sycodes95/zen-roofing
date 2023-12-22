import Link from "next/link"
import { usePathname } from "next/navigation"
import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PhotoIcon from '@mui/icons-material/Photo';
import { Route } from "./header";
import { ReactNode } from "react";



interface NavbarProps {
  routes: Route[];
}

export default function Navbar ( {routes } : NavbarProps) {

  const path = usePathname()
  
  return (
    <div className='hidden md:flex flex-col w-full h-full text-jet grow '>

      <div className='flex justify-end w-full h-full text-black grow  rounded-l-3xl'>
        <div className="flex items-center h-full border-l border-r border-stone-300 bg-white">
          {
          routes.map((data) => (
            <Link className={`${path === data.route ? 'border-opacity-100' : 'border-opacity-0'} hover:text-orange-500 font-inter-tight-display  relative overflow-hidden text-sm w-fit gap-2 border-b-2 transition-all duration-300 h-full flex items-center border-jet pr-4 pl-4`} href={data.route} key={data.name}>
              {
              data.icon
              }
              <span className="whitespace-nowrap w-fit flex">{data.name}</span>
            </Link>

          ))
          }
        </div>
        
      </div>

    </div>
  )
}