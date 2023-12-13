'use client'

import { ReactNode, useEffect } from "react";
import Atropos from 'atropos';

type AtroposEffectProps = {
  children: ReactNode;
}

export default function AtroposEffect ({children} : AtroposEffectProps) {
  useEffect(() => {
    const myAtropos = Atropos({
      el: '.my-atropos',
      activeOffset: 10,
      shadow: false,
      highlight: false,
    });
    return () => {
      myAtropos.destroy();
    }
  }, []); 
  return (
    <div className="flex items-center w-full h-full atropos my-atropos grow">
       <div className="w-full h-full atropos-scale">
        <div className="atropos-rotate">
          <div className="atropos-inner" >
            {children}
          </div>
        </div>
      </div>
    </div>
  )
}