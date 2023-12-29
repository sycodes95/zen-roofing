'use client'

import residentialIcon from '../../../../assets/images/residential.png'
import commercialIcon from '../../../../assets/images/commercial.png'
import { FormEvent, useEffect, useState } from 'react'
import Image from 'next/image'
import { Input } from "@/components/ui/input"
import DatePicker from './datePicker'
import { format } from 'date-fns'
import { Textarea } from "@/components/ui/textarea"
import SendIcon from '@mui/icons-material/Send';


import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import config from '@/config'


enum RoofType {
  'Commercial' = 'Commercial',
  'Residential' = 'Residential',
}

export type InspectionFormData = {
  email: string;
  phone: string;
  name: string;
  address: string;
  city: string;
  zipcode: string;
  roofType: RoofType;
  workType: string;
  preferredDate: Date | undefined;
  additionalInfo: string;

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

  const [inspectionFormData, setInspectionFormData] = useState<InspectionFormData>({
    email: '',
    phone: '',
    name: '',
    address: '',
    city: '',
    zipcode: '',
    roofType: RoofType.Residential,
    workType: '',
    preferredDate: undefined,
    additionalInfo: ''
  })

  const [formSubmitted, setFormSubmitted] = useState(false)

  const handleInspectionFormChange = (key: keyof InspectionFormData, value: number | string | undefined | RoofType) => {
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

  const handleFormSubmit = async (e: FormEvent) => {
    e.preventDefault()

    try {
      const fetchPost = await fetch(`${config.domain}/api/bookInspectionMailer`, {
        method: 'POST',
        body: JSON.stringify(inspectionFormData),
        headers: { 
          'Content-Type' : 'application/json'
        }
      })

      const fetchPostResult = await fetchPost.json()

      console.log(fetchPostResult);
    } catch (error) {
      console.error('Error sending booking inspection form to bookInspectionMailer endpoint', error)
    }

  }

  const handleInputChange = (key: string, value: string) => {
    setInspectionFormData(prev => {
      return {
        ...prev,
        [key]: value
      }
    })
  }

  return (
    <div className='w-full h-full flex flex-col gap-8 p-4 rounded-xl border border-stone-300'>
     
      <>
      <div className='flex flex-col md:flex-row justify-between gap-8'>
        <div className='flex flex-col  justify-center p-4 font-inter-tight rounded-xl  bg-opacity-20 text-jet    border-jet '>
          <span className='text-3xl  font-inter-tight-display text-orange-500'>Book A Roofing Inspection !</span>
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
        target="_blank"
        onSubmit={(e)=> handleFormSubmit(e)}>

          <Input className=' outline-none' type='email' name='email' placeholder='Enter Email*' required 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)} 
          value={inspectionFormData.email}
          />

          <Input className=' outline-none' type='text' name='phone' placeholder='Enter Phone #*' required
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.phone} />
          
          <Input className=' outline-none' type='name' name='name' placeholder='Enter Name*' 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)} 
          required value={inspectionFormData.name} />
          
          <Input className=' outline-none' type='text' name='address' placeholder='Enter Address*' required 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.address} />
          
          <Input className=' outline-none' type='text' name='city' placeholder='Enter City*' required 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.city}/>
          
          <Input className=' outline-none' type='text' name='zipcode' placeholder='Enter Zip Code*' required 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.zipcode}/>
          
          <Input className=' outline-none hidden' type='text' name='roofType' 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.roofType} required/> 

          <Input className=' outline-none hidden' type='text' name='workType' 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.workType} />

          <Input className=' outline-none hidden' type='text' name='preferredDate' 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.preferredDate && format(inspectionFormData.preferredDate, 'yyyy-MM-dd')}/> 

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

          <Textarea className='rounded-xl sm:col-span-2 lg:col-span-4 border-stone-300 bg-white placeholder:text-gray-500' name='additionalInfo' placeholder='Additional Information.. (optional)' value={inspectionFormData.additionalInfo}/>

          
          <div className='w-full flex items-center justify-end sm:col-span-2 lg:col-span-4'>
            <button className=" flex text-2xl group items-center justify-center w-full h-10 transition-colors bg-orange-400 rounded-xl hover:bg-opacity-25" type="submit">
              <SendIcon className='text-white group-hover:text-jet' fontSize='inherit'/>
            </button>
          </div>
        </form>
        }
      </div>
      </>
    </div>
  )
}
