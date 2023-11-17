'use client'

import residentialIcon from '../assets/images/residential.png'
import commercialIcon from '../assets/images/commercial.png'
import { useState } from 'react'
import Image from 'next/image'

enum RoofTypes {
  'Commercial', 'Residential', ''
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
      <div className='flex justify-between gap-8 p-12'>
        <div className='flex flex-col gap-1'>
          <span className='text-2xl font-semibold font-display-2'>Book Roofing Inspection</span>
          <span className='text-sm'>Save time and get a quick estimate from the professionals.</span>
        </div>

        <div className='flex items-center gap-4'>
          <button className={`${selectedRoof === RoofTypes.Residential ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 items-center flex flex-col gap-2 p-4 border-4 transition-colors`} onClick={()=> handleRoofTypeSelect(RoofTypes.Residential)}>
            <Image className='object-contain w-16 h-16' src={residentialIcon} alt=""  />
            <span>Residential</span>
          </button>
          <button className={`${selectedRoof === RoofTypes.Commercial ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 flex flex-col items-center gap-2 p-4 border-4 transition-colors `} onClick={()=> handleRoofTypeSelect(RoofTypes.Commercial)}>
            <Image className='object-contain w-16 h-16' src={commercialIcon} alt=""  />
            <span>Commercial</span>

          </button>
        </div>
      </div>
    </div>
  )
}