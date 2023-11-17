'use client'

import residentialIcon from '../assets/images/residential.png'
import commercialIcon from '../assets/images/commercial.png'
import { useState } from 'react'
import Image from 'next/image'

enum RoofTypes {
  'commercial', 'residential', ''
}
export default function BookInspection () {

  const [selectedRoof, setSelectedRoof] = useState<RoofTypes>(RoofTypes[''])

  const [roofType, setRoofType] = useState({
    'Commercial' : { selected : false, icon:  commercialIcon} ,
    'Residential' : { selected : false, icon:  residentialIcon}
  })

  const handleRoofTypeSelect = (roofType: RoofTypes) => {
    if(!selectedRoof) setSelectedRoof(roofType)
    selectedRoof === roofType ? setSelectedRoof(RoofTypes['']) : setSelectedRoof(roofType)
  }
  //i think im over engineering lol
  return (
    <div className='w-full h-full bg-white'>
      <div className='flex justify-between p-12'>
        <div className='flex flex-col gap-1'>
          <span className='text-2xl font-semibold font-display-2'>Book Roofing Inspection</span>
          <span className='text-sm'>Save time and get a quick estimate from the professionals.</span>
        </div>

        <div className='flex items-center gap-4'>
          <button className={`${selectedRoof === RoofTypes.residential ? 'border-black' : 'border-zinc-300'} p-4 border-4 transition-colors`} onClick={()=> handleRoofTypeSelect(RoofTypes.residential)}>
            <Image className='object-contain w-20 h-20' src={residentialIcon} alt=""  />
          </button>
          <button className={`${selectedRoof === RoofTypes.commercial ? 'border-black' : 'border-zinc-300'} p-4 border-4 transition-colors `} onClick={()=> handleRoofTypeSelect(RoofTypes.commercial)}>
            <Image className='object-contain w-20 h-20' src={commercialIcon} alt=""  />
          </button>
        </div>
      </div>
    </div>
  )
}