'use client'

import residentialIcon from '../../../../assets/images/residential.png'
import commercialIcon from '../../../../assets/images/commercial.png'
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


enum RoofType {
  'Commercial' = 'Commercial',
  'Residential' = 'Residential',
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

export type InspectionFormData = {
  email: string;
  name: string;
  address: string;
  city: string;
  zipcode: string;
  roofType: RoofType;
  workType: string;
  preferredDate: Date | undefined;

}

export default function BookInspection () {

  const inspectionDefaultData = {
    email: '',
    name: '',
    address: '',
    city: '',
    zipcode: '',
    roofType: RoofType.Residential,
    workType: '',
    preferredDate: undefined

  }

  const [inspectionFormData, setInspectionFormData] = useState<InspectionFormData>(inspectionDefaultData)

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInspectionFormChange = (key: string, value: number | string) => {
    setInspectionFormData(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  const handleRoofTypeSelect = (roofType: RoofType) => {

    if(inspectionFormData.roofType !== roofType) {
      setInspectionFormData(prev => { return { ...prev, roofType } })

    } 
  }

  const handleResetFormData = () => {
    setInspectionFormData(inspectionDefaultData)
  }

  useEffect(()=> {
    console.log(inspectionFormData);
  },[inspectionFormData])

  return (
    <div className='w-full h-full bg-white flex flex-col gap-8'>
     
      <>
      <div className='flex justify-between gap-8'>
        <div className='flex flex-col gap-1'>
          <span className='text-2xl font-semibold font-display-2'>Book Roofing Inspection</span>
          <span className='text-sm'>Save time and get a quick estimate from the professionals.</span>
          <span className='text-sm'>We operate only in the Los Angeles County area.  </span>

        </div>
        {
        !formSubmitted &&
        <div className='flex items-center gap-4'>
          <button className={`${inspectionFormData.roofType === RoofType.Residential ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 items-center flex flex-col gap-2 p-4 border-4 transition-colors`} onClick={()=> handleRoofTypeSelect(RoofType.Residential)}>
            <Image className='object-contain w-12 h-12' src={residentialIcon} alt=""  />
            <span>Residential</span>
          </button>
          <button className={`${inspectionFormData.roofType === RoofType.Commercial ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 flex flex-col items-center gap-2 p-4 border-4 transition-colors `} onClick={()=> handleRoofTypeSelect(RoofType.Commercial)}>
            <Image className='object-contain w-12 h-12' src={commercialIcon} alt=""  />
            <span>Commercial</span>
          </button>
        </div>
        }
      </div>
      <div className='flex justify-between gap-4 '>

        {
        formSubmitted ?
        <div className='flex justify-between gap-8'>
          <div className='flex flex-col gap-1'>
            <span className='text-2xl font-semibold font-display-2'>Thank you for your submission, we will get back to you ASAP!</span>
          </div>
        </div>
        :
        <form className="grid grid-cols-4 w-full gap-4" 
        target="_blank" action={`https://formsubmit.co/d8e105c261b4429d4d9bc2eea8d16131`} method="POST"
        onSubmit={()=> setTimeout(() => {
          setFormSubmitted(true)
        },1000)}>

          <input className="hidden" type="text" name="_honey"/>
          <input type="hidden" name="_captcha" value="false"/>

          <Input className='rounded-none outline-none' type='email' name='email' placeholder='Enter Email' required />
          
          <Input className='rounded-none outline-none' type='name' name='name' placeholder='Enter Name' required />
          
          <Input className='rounded-none outline-none' type='text' name='address' placeholder='Enter Address' required />
          
          <Input className='rounded-none outline-none' type='text' name='city' placeholder='Enter City' required />
          
          <Input className='rounded-none outline-none' type='text' name='zipcode' placeholder='Enter Zip Code' required />
          
          <Input className='rounded-none outline-none hidden' type='text' name='roofType' value={inspectionFormData.roofType} required/> 
          <Input className='rounded-none outline-none hidden' type='text' name='workType' value={inspectionFormData.workType} /> 
          <Input className='rounded-none outline-none hidden' type='text' name='preferredDate' value={inspectionFormData.preferredDate && format(inspectionFormData.preferredDate, 'yyyy-MM-dd')}/> 

          <DatePicker
          inspectionFormData={inspectionFormData}
          setInspectionFormData={setInspectionFormData}
          />

          <Select onValueChange={(value) => handleInspectionFormChange('workType', value)} required>
            <SelectTrigger className="w-full h-full p-2 outline-none">
              <SelectValue className='outline-none' placeholder="Work Type" />
            </SelectTrigger>
            <SelectContent className='w-full h-full flex flex-col gap-2 rounded-none'>
              {
              workTypes.map((work) => (
                <SelectItem className='cursor-pointer hover:bg-zinc-400 transition-all' key={work} value={work} >{work}</SelectItem>
              ))
              }
            </SelectContent>
          </Select>
          

          <button className="z-50 flex items-center justify-center h-full w-full transition-colors bg-green-400 bg-opacity-50 rounded-sm hover:bg-opacity-25" type="submit">Submit</button>
        </form>
        }
      </div>
      </>
    </div>
  )
}
