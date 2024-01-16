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
import { Oval } from 'react-loader-spinner'

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import config from '@/config'
import { BookInspectionResponse } from '@/app/api/bookInspectionMailer/route'

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
    additionalInfo: '',
  })

  const [fileAttachments, setFileAttachments] = useState<FileList | null>(null)

  const [submitIsLoading, setSubmitIsLoading] = useState(false)

  const [formSubmitFailed, setFormSubmitFailed] = useState(false)

  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false)


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

    let formData = new FormData()

    Object.entries(inspectionFormData).forEach(([key, value]) => {
      console.log(key, value);
      formData.append(key, value as string);
      console.log(formData.getAll(key));
    
    })

    if(fileAttachments) {
      for (let i = 0; i < fileAttachments.length; i++) {
        const file = fileAttachments[i];
        formData.append('file', file, file.name);
      }
    }

    try {
      setSubmitIsLoading(true)
      const fetchPost = await fetch(`${config.domain}/api/bookInspectionMailer`, {
        method: 'POST',
        body: formData,
      })

      const fetchPostResult: BookInspectionResponse = await fetchPost.json()
      if(fetchPostResult.status === 'failed') {
        setFormSubmitFailed(true)
      } else if (fetchPostResult.status === 'success') {
        setFormSubmitSuccess(true)
      }
      setSubmitIsLoading(false)

    } catch (error) {
      console.error('Error sending booking inspection form to bookInspectionMailer endpoint', error)
      setSubmitIsLoading(false)

    }

  }

  const handleInputChange = (key: string, value: string) => {
    setInspectionFormData(prev => { return { ...prev,  [key]: value }})
  }

  useEffect(()=> {
    if(formSubmitFailed) {
      //toast
    }
  },[formSubmitFailed])

  useEffect(() => {
    setFormSubmitFailed(false)
    setFormSubmitSuccess(false)
  },[inspectionFormData, fileAttachments])

  return (
    <div className='w-full h-full flex flex-col gap-8 p-4 rounded-xl border border-stone-300'>
     
      <>
      <div className='flex flex-col md:flex-row justify-between gap-8 border-b border-gray-300 pb-4'>
        <div className='flex flex-col  justify-center font-inter-tight rounded-xl  bg-opacity-20 text-jet    border-jet '>
          <span className='text-3xl  font-inter-tight-display text-orange-500'>Book A Roofing Inspection !</span>
          <span className='text-sm'>Save time and get a quick estimate from the professionals.</span>
          <span className='text-sm'>We operate only in the Los Angeles County area.  </span>

        </div>
        {
        !formSubmitSuccess &&
        <div className='flex gap-4 sm:flex-row flex-col text-jet '>
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
        formSubmitSuccess ?
        <div className='flex justify-between gap-8 p-4'>
          <div className='flex flex-col gap-1'>
            <span className='text-2xl font-semibold font-inter-tight-display'>Thank you for your submission, we will get back to you ASAP!</span>
          </div>
        </div>
        : 
        <form className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 w-full gap-4 h-full" 
        target="_blank"
        onSubmit={(e)=> handleFormSubmit(e)}>


          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' htmlFor='email'> Enter Email * </label>
            <Input id='email' className=' outline-none' type='email' name='email' placeholder='...'  
            onChange={(e)=> handleInputChange(e.target.name, e.target.value)} 
            value={inspectionFormData.email}
            required
            />
          </div>

          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' htmlFor='phone'> Enter Phone * </label>
            <Input className=' outline-none' id='phone' type='tel' name='phone' placeholder='Ex. 000-000-0000' 
            onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
            value={inspectionFormData.phone} 
            required
            />
          </div>

          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' htmlFor='name'> Enter Name * </label>
            <Input className=' outline-none' id='name' type='text' name='name' placeholder='...' 
            onChange={(e)=> handleInputChange(e.target.name, e.target.value)} 
            value={inspectionFormData.name} 
            required
            />
          </div>

          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' htmlFor='name'> Enter Address * </label>
            <Input className=' outline-none' type='text' name='address' placeholder='...'  
            onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
            value={inspectionFormData.address} 
            required
            />

          </div>

          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' htmlFor='city'> Enter City * </label>
            <Input className=' outline-none' type='text' name='city' placeholder='...'  
            onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
            value={inspectionFormData.city}
            required
            />
          </div>

          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' htmlFor='zipcode'> Enter Zipcode * </label>
            <Input className=' outline-none' id='zipcode' type='text' name='zipcode' placeholder='...'  
            onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
            value={inspectionFormData.zipcode}
            required
            />
          </div>

          <Input className=' outline-none hidden' type='text' name='workType' 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.workType} />

          <Input className=' outline-none hidden' type='text' name='preferredDate' 
          onChange={(e)=> handleInputChange(e.target.name, e.target.value)}
          value={inspectionFormData.preferredDate && format(inspectionFormData.preferredDate, 'yyyy-MM-dd')}/> 
          
          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' > Select Work Type * </label>
            <Select required onValueChange={(value) => handleInspectionFormChange('workType', value)} >
              <SelectTrigger className="w-full h-full p-2 outline-none border border-stone-300 rounded-xl">
                <SelectValue className='outline-none' placeholder="..." />
              </SelectTrigger>
              <SelectContent className='w-full h-full flex flex-col gap-2 rounded-lg '>
                {
                workTypes.map((work) => (
                  <SelectItem className='cursor-pointer hover:bg-zinc-400 transition-all' key={work} value={work} >{work}</SelectItem>
                ))
                }
              </SelectContent>
            </Select>

          </div>

          <div className='flex flex-col gap-2  '>
            <label className='h-fit text-sm' > Preferred Date (optional) </label>
            <DatePicker
            inspectionFormData={inspectionFormData}
            setInspectionFormData={setInspectionFormData}
            />
          </div>


          <div className='flex flex-col gap-2  w-full col-span-full h-fit'>
            <label className='h-fit text-sm' > Additional Info (optional) </label>
            <Textarea className='rounded-xl sm:col-span-2 lg:col-span-4 border-stone-300 bg-white placeholder:text-gray-500' name='additionalInfo' placeholder='...' value={inspectionFormData.additionalInfo} onChange={(e)=> handleInputChange(e.target.name, e.target.value)}/>
          
          </div>

          
          <div className='flex flex-col gap-2 w-full col-span-1 items-start'>
            <label className=' text-sm whitespace-nowrap' htmlFor='files'>Attach Pictures (optional)</label>
            <Input id='files' className='cursor-pointer w-full'  name='fileAttachment' type='file' accept="image/png, image/jpeg. image/webp" multiple onChange={(e)=> setFileAttachments(e.target.files)}  />
          </div>
          
          <div className='w-full flex items-center justify-end sm:col-span-2 lg:col-span-4'>
            <button className=" flex text-2xl group items-center justify-center w-full h-10 transition-colors bg-orange-400 rounded-xl hover:bg-opacity-25" type="submit">
              {
              submitIsLoading ? 
              <Oval
              visible={true}
              height="24"
              width="24"
              color="#FFFFFF"
              secondaryColor='#000000'
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
              />
              :
              <SendIcon className='text-white group-hover:text-jet' fontSize='inherit'/>
              }
            </button>
          </div>
        </form>
        }
      </div>
      </>
    </div>
  )
}
