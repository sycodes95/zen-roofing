import Link from "next/link"
import { usePathname } from "next/navigation"
import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';

export default function Routes () {

  const path = usePathname()
  const routes = [
    { name: 'Services', route : '/services', icon: <EngineeringIcon className="text-lg"/>},
    { name: 'About', route : '/about', icon: <InfoIcon className="text-lg"/>},
    { name: 'Contact Us', route : '/contact', icon: <ContactSupportIcon className="text-lg"/>}

  ]
  return (
    <div className='flex justify-end w-full h-full pl-4 pr-4 text-white bg-primary grow'>
      <div className="flex items-center h-full">
        {
        routes.map((data) => (
          <Link className={`${path === data.route && 'border-opacity-100'} text-sm w-full gap-2 border-b-2 border-opacity-0 h-12 flex items-center border-white pr-4 pl-4`} href={data.route} key={data.name}>
            {
            data.icon
            }
            <span className="whitespace-nowrap">{data.name}</span>
          </Link>
        ))
        }
      </div>
      
    </div>
  )
}