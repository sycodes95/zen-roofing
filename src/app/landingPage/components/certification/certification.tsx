import Image from 'next/image'
import roofingLicenseSVG from '../../../../assets/images/roofingLicense.svg'
import satisfactionGuaranteedPNG from '../../../../assets/images/40x40_satisfaction_guaranteed_v2@3x.yji-d28fff31f5ad326ba2ca.png'
import freeEstimatesPNG from '../../../../assets/images/40x40_free_estimates_v2@3x.yji-96b2ab4703045ffacf0c.png'
import locallyOwnedPNG from '../../../../assets/images/40x40_locally_owned_v2@3x.yji-04e733a7f628c96a469c.png'


export default function Certification () {
  
  return (
    <div className='grid grid-cols-4 gap-4 justify-evenly text-center'>
      <div className='flex items-center flex-col gap-8 p-4 rounded-xl  justify-center'>
        <Image className='' width={100} src={roofingLicenseSVG} alt="" />
        <span className='text-2xl font-display-2'>Fully Licensed</span>
      </div>

      <div className='flex items-center flex-col gap-8 p-4'>
        <Image className='' width={100} src={satisfactionGuaranteedPNG} alt="" />
        <span className='text-2xl font-display-2'>Satisfaction Guaranteed</span>

      </div>

      <div className='flex items-center flex-col gap-8 p-4'>
        <Image className=''  width={100} src={freeEstimatesPNG} alt="" />
        <span className='text-2xl font-display-2'>Free Estimates</span>

      </div>

      <div className='flex items-center flex-col gap-8 p-4'>
        <Image className=''  width={100} src={locallyOwnedPNG} alt="" />
        <span className='text-2xl font-display-2'>Locally Owned</span>


      </div>




    </div>
  )
}