'use client'

import residentialIcon from '../../assets/images/residential.png'
import commercialIcon from '../../assets/images/commercial.png'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import DatePicker from './datePicker'
import { format } from 'date-fns'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"


enum RoofTypes {
  'Commercial' = 'Commercial',
  'Residential' = 'Residential',
  '' = ''
}

const workTypes = [
  "Installation",
  "Repair",
  "Maintenance",
  "Replacement",
  "Restoration",
  "Inspection",
  "Waterproofing and Sealing",
  "Gutter Work",
  "Ventilation Solutions",
  "Customization and Specialty Work"
]

export default function BookInspection () {

  const [selectedRoof, setSelectedRoof] = useState<RoofTypes>(RoofTypes.Residential)

  const [selectedWorkType, setSelectedWorkType] = useState('')

  const [preferredDate, setPreferredDate] = useState<Date | undefined>(undefined)

  const handleRoofTypeSelect = (roofType: RoofTypes) => {
    if(!selectedRoof) setSelectedRoof(roofType)
    selectedRoof === roofType ? setSelectedRoof(RoofTypes['']) : setSelectedRoof(roofType)
  }

  useEffect(()=> {
    console.log(selectedWorkType);
  },[selectedWorkType])

  return (
    <div className='w-full h-full bg-white p-12 flex flex-col gap-8'>
      <div className='flex justify-between gap-8'>
        <div className='flex flex-col gap-1'>
          <span className='text-2xl font-semibold font-display-2'>Book Roofing Inspection</span>
          <span className='text-sm'>Save time and get a quick estimate from the professionals.</span>
          <span className='text-sm'>We operate only in the Los Angeles County area.  </span>

        </div>

        <div className='flex items-center gap-4'>
          <button className={`${selectedRoof === RoofTypes.Residential ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 items-center flex flex-col gap-2 p-4 border-4 transition-colors`} onClick={()=> handleRoofTypeSelect(RoofTypes.Residential)}>
            <Image className='object-contain w-12 h-12' src={residentialIcon} alt=""  />
            <span>Residential</span>
          </button>
          <button className={`${selectedRoof === RoofTypes.Commercial ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 flex flex-col items-center gap-2 p-4 border-4 transition-colors `} onClick={()=> handleRoofTypeSelect(RoofTypes.Commercial)}>
            <Image className='object-contain w-12 h-12' src={commercialIcon} alt=""  />
            <span>Commercial</span>
          </button>
        </div>
      </div>
      <div className='flex justify-between gap-4 '>
        <form className="grid grid-cols-4 w-full gap-4" 
        target="_blank" action={`https://formsubmit.co/d8e105c261b4429d4d9bc2eea8d16131`} method="POST">
          <input className="hidden" type="text" name="_honey"/>
          <input type="hidden" name="_captcha" value="false"/>

          <Input className='rounded-none outline-none' type='email' name='email' placeholder='Enter Email' required/>
          <Input className='rounded-none outline-none' type='name' name='name' placeholder='Enter Name' required/>
          <Input className='rounded-none outline-none' type='text' name='address' placeholder='Enter Address' required/>
          <Input className='rounded-none outline-none' type='text' name='city' placeholder='Enter City' required/>
          <Input className='rounded-none outline-none' type='number' name='zipcode' placeholder='Enter Zip Code' required/>
          <Input className='rounded-none outline-none hidden' type='text' name='roof type' value={selectedRoof}/> 
          <Input className='rounded-none outline-none hidden' type='text' name='work type' value={selectedWorkType}/> 
          <Input className='rounded-none outline-none hidden' type='text' name='preferred date' value={preferredDate && format(preferredDate, 'yyyy-MM-dd')}/> 

          <DatePicker
          preferredDate={preferredDate}
          setPreferredDate={setPreferredDate}
          />

          <Select onValueChange={(value) => setSelectedWorkType(value)}>
            <SelectTrigger className="w-full h-full p-2 outline-none">
              <SelectValue className='outline-none' placeholder="Work Type" />
            </SelectTrigger>
            <SelectContent className='w-full h-full flex flex-col gap-2'>
              {
              workTypes.map((work) => (
                <SelectItem className='cursor-pointer hover:bg-zinc-400 transition-all' key={work} value={work} >{work}</SelectItem>
              ))
              }
            </SelectContent>
          </Select>
          

          <button className="z-50 flex items-center justify-center h-full w-full transition-colors bg-green-400 bg-opacity-50 rounded-sm hover:bg-opacity-25" type="submit">Submit</button>
        </form>
      </div>
    </div>
  )
}