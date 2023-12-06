import RoofingIcon from '@mui/icons-material/Roofing';


export default function Footer() {
  return (
    <div className="flex justify-center w-full h-full bg-white text-jet z-50 border-t border-zinc-300">
      <div className="max-w-7xl justify-between flex items-start gap-8 w-full p-12">
        <div className='flex flex-col justify-between h-full gap-2'>
          <div className="flex items-center mt-1 text-jet">
            <RoofingIcon className='mb-2 mr-1 text-rose-600 ' fontSize='large'/>
            <span className="text-4xl font-bold font-display"> ZEN</span>
            <span className="flex mt-2 text-xl font-bold font-display"> roofing</span>
          </div>
          <div>
            <span className='text-xs'>Copyright © 2023 Zen Roofing Corp, All rights reserved</span>
          </div>

        </div>
        
        <div className="flex flex-col gap-2">
          <span className="text-2xl font-display-2 font-bold pb-2 border-b border-zinc-400">Contact Info</span>
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
  )
}