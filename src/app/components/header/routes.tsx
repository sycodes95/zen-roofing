import Link from "next/link"
import { usePathname } from "next/navigation"
import EngineeringIcon from '@mui/icons-material/Engineering';
import InfoIcon from '@mui/icons-material/Info';
import ContactSupportIcon from '@mui/icons-material/ContactSupport';
import PhotoIcon from '@mui/icons-material/Photo';

export default function Routes () {

  const path = usePathname()
  const routes = [
    { name: 'Services', route : '/services', icon: <EngineeringIcon className="text-lg"/>},
    { name: 'About', route : '/about', icon: <InfoIcon className="text-lg"/>},
    { name: 'Contact Us', route : '/contact', icon: <ContactSupportIcon className="text-lg"/>},
    { name: 'Gallery', route : '/gallery', icon: <PhotoIcon className="text-lg"/>}

  ]
  return (
    <div className='flex justify-end w-full h-full pl-4 pr-4 text-black grow  rounded-l-3xl'>
      <div className="flex items-center h-full">
        {
        routes.map((data, index) => (
          <Link className={`${path === data.route ? 'border-opacity-100' : 'border-opacity-0'}  relative overflow-hidden text-sm w-fit gap-2 border-b-2 transition-all duration-300 h-full flex items-center border-jet pr-4 pl-4`} href={data.route} key={data.name}>
            {
            data.icon
            }
            <span className="whitespace-nowrap w-fit flex">{data.name}</span>
            {/* <div className="absolute top-0 left-full h-full w-full border-b-2 border-red-600 z-50"></div> */}
          </Link>
        ))
        }
      </div>
      
    </div>
  )
}