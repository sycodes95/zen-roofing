import PageTitleHeader from "@/components/customUi/pageTitleHeader";
import aboutCoverImage from "../../assets/images/aboutCoverImage.webp"
import Image from "next/image";
import AtroposEffect from "../components/atropos/atroposEffect";
export default function About() {
  return (
    <div className="bg-white flex flex-col h-full w-full grow p-2 md:p-12 overflow-visible">
      <PageTitleHeader title="About" />
      <div className="relative p-1  bg-opacity-70 rounded-xl  text-left flex flex-col gap-1 text-sm overflow-hidden">
        <span className="font-display-2 text-4xl  p-2"  data-atropos-opacity="1;0.7" data-atropos-offset="4">Our Values</span>
        <Image className="object-cover absolute top-0 left-0 opacity-50 grayscale w-full h-full rounded-2xl" data-atropos-opacity="0.7;0.7" data-atropos-offset="-5" height={1920} width={1080} src={aboutCoverImage} alt="" priority />
        <span className="p-4 bg-white bg-opacity-60 rounded-xl z-10">
          At Zen Roofing Corp, we believe in the importance of superior craftsmanship. 
          Our highly trained and certified roofers possess extensive knowledge of the latest roofing techniques and use only premium materials to ensure long-lasting and durable results.
        </span>
        <span className="p-4 bg-white bg-opacity-60 rounded-xl z-10">
          Whether it’s a small repair, a complete roof replacement, or a new construction project, we have the expertise to handle it all.
        </span>
        <span className="p-4 bg-white bg-opacity-60 rounded-xl z-10">
          What sets us apart is our commitment to customer satisfaction. We work closely with our clients, listening to their needs and providing tailored solutions that meet their budget and timeline. Our team conducts thorough inspections, provides detailed estimates, and communicates transparently throughout the entire process, keeping our clients informed every step of the way.
        </span>
        <span className="p-4 bg-white bg-opacity-60 rounded-xl z-10">
          Being a family-owned business, we understand the importance of affordability. We strive to offer competitive pricing without compromising on the quality of our workmanship. Additionally, we are fully licensed, bonded, and insured, providing our clients with peace of mind knowing that they are working with a reliable and responsible roofing contractor.
        </span>
      </div>
    </div>
  )
}