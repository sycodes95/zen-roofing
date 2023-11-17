import Link from "next/link"
import { usePathname } from "next/navigation"

export default function Routes () {

  const path = usePathname()
  const routes = [
    { name: 'Services', route : '/services'},
    { name: 'About', route : '/about'},
    { name: 'Contact Us', route : '/contact'}

  ]
  return (
    <div className='flex justify-end grow text-white h-full w-full bg-rose-600 pr-4 pl-4'>
      <div className="flex items-center h-full">
        {
        routes.map((data) => (
          <Link className={`${path === data.route && 'border-opacity-100'} text-sm w-full border-b-2 border-opacity-0 h-12 flex items-center border-white pr-2 pl-2`} href={data.route} key={data.name}>
            <span className="whitespace-nowrap">{data.name}</span>
          </Link>
        ))
        }
      </div>
      
    </div>
  )
}