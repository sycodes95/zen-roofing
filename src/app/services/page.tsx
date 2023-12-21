import PageTitleHeader from "@/components/customUi/pageTitleHeader";

import asphaltShinglesInstallation from './images/asphaltShinglesInstallation.png'
import roofClay from './images/roofClay.webp'
import flatRoof from './images/flatRoof.webp'
import roofGutter from './images/roofGutter.webp'
import roofRepair from './images/roofRepair.webp'
import roofSkylight from './images/roofSkylight.webp'
import roofAsphaltShingles from './images/roofAsphaltShingles.webp'
import Image from "next/image";

export default function Services() {

  const services = [
    { title: 'Roof Repair' , src: roofRepair },
    { title: 'Flat Roof Installation (Hot Mop or Bitumen Torch)' , src: flatRoof },
    { title: 'Gutter Repairs And Installation' , src: roofGutter },
    { title: 'Skylight Repairs And Installation' , src: roofSkylight },
    { title: 'Clay Or Concrete Tile Repairs And Installation' , src: roofClay },
    { title: 'Asphalt Shingles Installation' , src: roofAsphaltShingles },
  ]
  return (
    <div className="pt-12 pb-12 p-4 flex flex-col gap-4">
      <PageTitleHeader 
      title="Services"
      description="Different services we offer."
      />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 ">
        {
        services.map((service) => (
          <div className="relative flex flex-col gap-2 h-full" key={service.title}>
            <div className="w-full h-72 rounded-xl flex justify-center">
              <Image className="rounded-xl object-cover grayscale contrast-125 hover:grayscale-0 transition-all duration-300" height={500} width={500} src={service.src} alt="" />
            </div>

            <div className="absolute bottom-0 left-0 rounded-b-xl bg-black bg-opacity-90 w-full flex justify-center p-2">
              <span className="text-sm font-inter-tight text-center font-semibold text-white">{service.title}</span>
            </div>
          </div>
        ))
        }

      </div>
    </div>
  )
}