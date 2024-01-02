"use client"

import PageTitleHeader from "@/components/customUi/pageTitleHeader";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

export default function Contact () {

  const [formSubmitted, setFormSubmitted] = useState(false)

  return (
    <div className="p-4 md:pt-12 md:pb-12 flex flex-col gap-4">
      <PageTitleHeader 
      title="Contact Us"
      description="Need to get in touch with us? Either fill out the form with your inquiry or contact us directly."
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 w-full relative p-2 rounded-xl">

        {
        !formSubmitted ?
        <form className="grid gap-2 z-10"
        target="_blank" action={`https://formsubmit.co/d8e105c261b4429d4d9bc2eea8d16131`} method="POST"
        onSubmit={()=> setTimeout(() => {
          setFormSubmitted(true)
        },1000)}
        >
          <input className="hidden" type="text" name="_honey"/>
          <input type="hidden" name="_captcha" value="false"/>
          <Input className="rounded-xl border border-stone-300" type="text" name="First Name" placeholder="First Name*" required/>
          <Input className="rounded-xl border border-stone-300" type="text" name="Last Name" placeholder="Last Name*" required/>
          <Input className="rounded-xl border border-stone-300" type="email" name="email" placeholder="Email*" required/>
          <textarea className="text-sm p-2 border border-stone-300 rounded-xl min-h-[350px]" placeholder="What can we help you with?" name="inquiry" required/>
          <Button className="rounded-xl" >Submit</Button>

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