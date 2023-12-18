import PageTitleHeader from "@/components/customUi/pageTitleHeader";

import asphaltShinglesInstallation from './images/asphaltShinglesInstallation.png'
import clayOrConcreteTileRepairsAndInstallation from './images/clayOrConcreteTileRepairsAndInstallation.png'
import faltRoofInstallationHotMopOrBitumenTorch from './images/faltRoofInstallationHotMopOrBitumenTorch.png'
import gutterRepairsAndInstallation from './images/gutterRepairsAndInstallation.png'
import roofRepair from './images/roofRepair.png'
import skylightRepairsAndInstallation from './images/skylightRepairsAndInstallation.png'
import Image from "next/image";

export default function Services() {

  const services = [
    { title: 'Roof Repair' , src: roofRepair },
    { title: 'Flat Roof Installation (Hot Mop or Bitumen Torch)' , src: faltRoofInstallationHotMopOrBitumenTorch },
    { title: 'Gutter Repairs And Installation' , src: gutterRepairsAndInstallation },
    { title: 'Skylight Repairs And Installation' , src: skylightRepairsAndInstallation },
    { title: 'Clay Or Concrete Tile Repairs And Installation' , src: clayOrConcreteTileRepairsAndInstallation },
    { title: 'Asphalt Shingles Installation' , src: asphaltShinglesInstallation },


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
          <div className="flex flex-col gap-2 " key={service.title}>
            <div className="w-full h-full rounded-xl flex justify-center">
              <Image className="rounded-xl grayscale" src={service.src} alt="" />
            </div>

            <div className="w-full flex justify-center">
              <span className="text-sm font-display-2 text-center font-semibold text-jet">{service.title}</span>
            </div>
          </div>
        ))
        }

      </div>
    </div>
  )
}