'use client'

import PageTitleHeader from "@/components/customUi/pageTitleHeader";
import workImage1 from '../gallery/images/20231110_101154.webp';
import workImage2 from '../gallery/images/20231110_132044.webp';
import workImage3 from '../gallery/images/20231110_132047.webp';
import workImage4 from '../gallery/images/20231110_134120.webp';
import workImage5 from '../gallery/images/20231208_104444.webp';
import workImage6 from '../gallery/images/20231208_104708.webp';
import workImage7 from '../gallery/images/20231208_104914.webp';
import workImage8 from '../gallery/images/20231208_105047 (1).webp';
import workImage9 from '../gallery/images/20231208_105047.webp';
import workImage10 from '../gallery/images/20231208_105742 (1).webp';
import workImage11 from '../gallery/images/20231208_105742.webp';
import workImage12 from '../gallery/images/20231208_105936 (1).webp';
import workImage13 from '../gallery/images/20231208_105936.webp';
import workImage14 from '../gallery/images/20231208_110250 (1).webp';
import workImage16 from '../gallery/images/20231208_121602.webp';
import workImage17 from '../gallery/images/20231208_122929.webp';
import workImage18 from '../gallery/images/20231208_123300.webp';
import workImage19 from '../gallery/images/20231208_123402.webp';
import Image from "next/image";

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"



export default function Gallery () {

  const galleryImages = [
    workImage1,
    workImage2,
    workImage3,
    workImage4,
    workImage5,
    workImage6,
    workImage7,
    workImage8,
    workImage9,
    workImage10,
    workImage11,
    workImage12,
    workImage13,
    workImage14,
    workImage16,
    workImage17,
    workImage18,
    workImage19
  ];

  // const openImageInNewTab = (url) => {
  //   const newWindow = window.open(url, '_blank')
  //   if(newWindow) newWindow.opener = null
  // }

  return (
    <div className="relative h-full w-full flex-col flex p-12">
      <PageTitleHeader title="Gallery"/>
      <div className="grid grid-cols-2 h-full w-full">

        {
        galleryImages.map((src, index) => (
          
          <Sheet key={index}>
            <SheetTrigger className=" w-full rounded-xl flex grow h-80">
              <Image className="object-cover h-full w-full rounded-xl grayscale hover:grayscale-0 transition-all duration-700 hover:cursor-pointer" src={src} alt="" />
            </SheetTrigger>
            <SheetContent className="h-full w-full mt-18" side={'bottom'}>
              <Image className="object-cover h-full w-full rounded-xl hover:cursor-pointer" src={src} alt="" />

            </SheetContent>
          </Sheet>
          
          
        ))
        }

      </div>
      
    </div>
  )
}