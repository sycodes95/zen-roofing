'use client'

import residentialIcon from '../../../../assets/images/residential.png'
import commercialIcon from '../../../../assets/images/commercial.png'
import { useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import DatePicker from './datePicker'
import { format } from 'date-fns'
import { Textarea } from "@/components/ui/textarea"

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

const workTypes = [
  "Asphalt Shingles Installation",
  "Flat Roof Installation",
  "Gutter Repairs / Installation",
  "Skylight Repairs / Installation",
  "Clay Or Concrete Tile Repairs / Installation",
  "Roof Repair",
]

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
    <div className='w-full h-full flex flex-col gap-8 p-4 rounded-xl bg-orange-100 border border-orange-200'>
     
      <>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='flex flex-col gap-1 justify-center p-4'>
          <span className='text-3xl font-semibold font-display-2 text-orange-600'>Book Roofing Inspection</span>
          <span className='text-sm'>Save time and get a quick estimate from the professionals.</span>
          <span className='text-sm'>We operate only in the Los Angeles County area.  </span>

        </div>
        {
        !formSubmitted &&
        <div className='flex gap-4 sm:flex-row flex-col'>
          <button className={`${inspectionFormData.roofType === RoofType.Residential ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 items-center flex flex-col gap-2 p-4 border-4 transition-colors rounded-xl h-fit w-full md:w-fit`} onClick={()=> handleRoofTypeSelect(RoofType.Residential)}>
            <Image className='object-contain w-full max-w-[50px] h-full hidden md:flex' src={residentialIcon} alt=""  />
            <span className='text-xs md:text-sm'>Residential</span>
          </button>
          <button className={`${inspectionFormData.roofType === RoofType.Commercial ? 'border-jet' : 'border-zinc-300'} pl-8 pr-8 flex flex-col items-center gap-2 p-4 border-4 transition-colors rounded-xl h-fit w-full md:w-fit`} onClick={()=> handleRoofTypeSelect(RoofType.Commercial)}>
            <Image className='object-contain w-full max-w-[50px] h-12 hidden md:flex' src={commercialIcon} alt=""  />
            <span className='text-xs md:text-sm'>Commercial</span>
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
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 h-full" 
        target="_blank" action={`https://formsubmit.co/d8e105c261b4429d4d9bc2eea8d16131`} method="POST"
        onSubmit={()=> setTimeout(() => {
          setFormSubmitted(true)
        },1000)}>

          <input className="hidden" type="text" name="_honey"/>
          <input type="hidden" name="_captcha" value="false"/>

          <Input className=' outline-none' type='email' name='email' placeholder='Enter Email*' required />

          <Input className=' outline-none' type='tel' name='tel' placeholder='Enter Phone #*' required />
          
          <Input className=' outline-none' type='name' name='name' placeholder='Enter Name*' required />
          
          <Input className=' outline-none' type='text' name='address' placeholder='Enter Address*' required />
          
          <Input className=' outline-none' type='text' name='city' placeholder='Enter City*' required />
          
          <Input className=' outline-none' type='text' name='zipcode' placeholder='Enter Zip Code*' required />
          
          <Input className=' outline-none hidden' type='text' name='roofType' value={inspectionFormData.roofType} required/> 
          <Input className=' outline-none hidden' type='text' name='workType' value={inspectionFormData.workType} /> 
          <Input className=' outline-none hidden' type='text' name='preferredDate' value={inspectionFormData.preferredDate && format(inspectionFormData.preferredDate, 'yyyy-MM-dd')}/> 

          <DatePicker
          inspectionFormData={inspectionFormData}
          setInspectionFormData={setInspectionFormData}
          />

          <Select onValueChange={(value) => handleInspectionFormChange('workType', value)} required>
            <SelectTrigger className="w-full h-full p-2 outline-none border border-stone-300 rounded-xl">
              <SelectValue className='outline-none' placeholder="Work Type*" />
            </SelectTrigger>
            <SelectContent className='w-full h-full flex flex-col gap-2 '>
              {
              workTypes.map((work) => (
                <SelectItem className='cursor-pointer hover:bg-zinc-400 transition-all' key={work} value={work} >{work}</SelectItem>
              ))
              }
            </SelectContent>
          </Select>

          <Textarea className='rounded-xl sm:col-span-2 lg:col-span-4 border-stone-300 bg-white placeholder:text-gray-500' name='additionalInfo' placeholder='Additional Information.. (optional)' />

          
          <div className='w-full flex items-center justify-end sm:col-span-2 lg:col-span-4'>
            <button className="z-50 flex items-center justify-center w-full h-10 transition-colors bg-orange-400 bg-opacity-50 rounded-xl hover:bg-opacity-25" type="submit">Submit</button>
          </div>
        </form>
        }
      </div>
      </>
    </div>
  )
}
