import PageTitleHeader from "@/components/customUi/pageTitleHeader";
import aboutCoverImage from "../../assets/images/metalRoof.webp"
import Image from "next/image";

import metalRoof from './images/metalRoof.webp'
import AtroposEffect from "../components/atropos/atroposEffect";
export default function About() {

  const values = [
    'At Zen Roofing Corp, we believe in the importance of superior craftsmanship. Our highly trained and certified roofers possess extensive knowledge of the latest roofing techniques and use only premium materials to ensure long-lasting and durable results.',
    ' Whether it’s a small repair, a complete roof replacement, or a new construction project, we have the expertise to handle it all.',
    'What sets us apart is our commitment to customer satisfaction. We work closely with our clients, listening to their needs and providing tailored solutions that meet their budget and timeline. Our team conducts thorough inspections, provides detailed estimates, and communicates transparently throughout the entire process, keeping our clients informed every step of the way.',
    'Being a family-owned business, we understand the importance of affordability. We strive to offer competitive pricing without compromising on the quality of our workmanship. Additionally, we are fully licensed, bonded, and insured, providing our clients with peace of mind knowing that they are working with a reliable and responsible roofing contractor.'
    

  ]
  return (
    <div className="bg-white flex flex-col h-full w-full grow p-2 overflow-visible md:pt-12 md:pb-12">
      <PageTitleHeader title="About" />
      <div className="relative p-4  bg-opacity-70 rounded-xl text-white text-left flex flex-col gap-2 text-sm font-inter-tight overflow-hidden">
        <span className="font-display text-black text-4xl z-10 text-opacity-90 p-2">Our Values</span>
        <Image className="object-cover absolute top-0 left-0 opacity-70 grayscale  w-full h-full rounded-2xl" data-atropos-opacity="0.7;0.7" data-atropos-offset="-5" height={1080} width={1080} src={aboutCoverImage} alt="" priority={true} loading={'eager'} />

        {
        values.map((value, index) =>(
          <span key={index} className="p-4 text-black bg-white bg-opacity-70 rounded-xl z-10 ">
            {value}
          </span>
        ))
        }
      </div>
    </div>
  )
}