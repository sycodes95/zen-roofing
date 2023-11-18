import Image from "next/image";
import grandOpening from '../../../../assets/images/grandOpening.webp'

export default function GrandOpeningBanner() {
  return ( 
    <div className=" flex flex-col items-center p-12">
      <div className="flex flex-col relative gap-4">
        <div className="absolute top-0 left-0 bg-blue-950 bg-opacity-60 h-full w-full -z-10"></div>
        <Image className=" w-full h-full object-cover grayscale opacity-80 -z-20" src={grandOpening} alt=""/>
        <div className="flex flex-col absolute top-0 left-0 h-full w-full p-12 gap-4">
          <span className="text-6xl font-display-2 font-semibold text-white">
            Grand Opening Sale
          </span>
          <span className="text-sm font-semibold text-white">
            For a limited time until Aug 2024
          </span>
        </div>
      </div>
      
    </div>
  )
}