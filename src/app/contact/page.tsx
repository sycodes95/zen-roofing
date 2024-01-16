"use client"

import PageTitleHeader from "@/components/customUi/pageTitleHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import config from "@/config";
import { SendIcon } from "lucide-react";
import { FormEvent, useEffect, useState } from "react";
import { Oval } from "react-loader-spinner";

export default function Contact () {

  const [formIsSubmitting, setFormIsSubmitting] = useState(false)
  const [formSubmitFailed, setFormSubmitFailed] = useState(false)
  const [formSubmitSuccess, setFormSubmitSuccess] = useState(false)
  const [contactFormDetails, setContactFormDetails] = useState({
    firstName: '', 
    lastName: '',
    email: '',
    inquiry: '',
  });

  const handleContactFormChange = ( key: string, value: string) => {
    setContactFormDetails(prev => ( { ...prev, [key]: value } ))
  }

  const handleFormSubmit = async (e:FormEvent) => {
    e.preventDefault()
    setFormIsSubmitting(true)

    try {
      const fetchPost = await fetch(`${config.domain}/api/contactUs`, {
        method: 'POST',
        headers: {
          'Content-type' : 'application/json'
        },
        body: JSON.stringify(contactFormDetails)
      });

      const fetchResult = await fetchPost.json()

      if(fetchResult.status === 'success') {
        setFormSubmitSuccess(true)
      } else if (fetchResult.result === 'failed') {
        setFormSubmitFailed(true)
      }
      setFormIsSubmitting(false)

    } catch (error) {
      console.error('Error submitting contact inquiry', error)
      setFormSubmitFailed(true)
      setFormIsSubmitting(false)
    }

  };


  useEffect(() => {
    //do toast
  },[formSubmitFailed])

  useEffect(()=> {
    setFormSubmitFailed(false)
    setFormSubmitSuccess(false)
  },[contactFormDetails])

  return (
    <div className="p-4 md:pt-12 md:pb-12 flex flex-col gap-4">
      <PageTitleHeader 
      title="Contact Us"
      description="Need to get in touch with us? Either fill out the form with your inquiry or contact us directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full relative p-2 rounded-xl">
        {
        !formSubmitSuccess ?
        <form className="grid gap-2 z-10"
        onSubmit={handleFormSubmit}
        > 
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="firstName">First Name</label>
            <Input id="firstName" className="rounded-xl border border-stone-300" type="text" name="firstName" required
            onChange={(e)=> handleContactFormChange(e.target.name, e.target.value)}/>
          </div>
          
          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="lastName">Last Name</label>
            <Input id="lastName" className="rounded-xl border border-stone-300" type="text" name="lastName" required
            onChange={(e)=> handleContactFormChange(e.target.name, e.target.value)}/>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="email">Email</label>
            <Input id="email" className="rounded-xl border border-stone-300" type="email" name="email" required
            onChange={(e)=> handleContactFormChange(e.target.name, e.target.value)}/>
          </div>

          <div className="flex flex-col gap-2">
            <label className="text-sm" htmlFor="inquiry">Inquiry</label>
            <textarea className="text-sm p-2 border border-stone-300 rounded-xl min-h-[350px]" name="inquiry" placeholder="What can we help you with?"  required
            onChange={(e)=> handleContactFormChange(e.target.name, e.target.value)}
            />
          </div>
          
          <button className=" flex text-2xl group items-center justify-center w-full h-10 transition-colors bg-orange-400 rounded-xl hover:bg-opacity-25" type="submit">
            {
            formIsSubmitting ? 
            <Oval
            visible={true}
            height="24"
            width="24"
            color="#FFFFFF"
            secondaryColor='#000000'
            ariaLabel="oval-loading"
            />
            :
            <SendIcon className='text-white group-hover:text-jet' fontSize='inherit'/>
            }
          </button>

        </form>
        :
        <div className="font-display-2 text-2xl">
          Thank you for the inquiry, we will get back to you shortly.
        </div>
        }

        {/* <Image className="grayscale h-full w-full object-cover absolute top-0 left-0 rounded-xl" src={phoneWire} alt="" /> */}

        
      </div>    
    </div>
  )
}