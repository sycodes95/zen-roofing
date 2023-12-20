import Image from 'next/image'
import roofingLicenseSVG from '../../../../assets/images/roofingLicense.svg'
import satisfactionGuaranteedPNG from '../../../../assets/images/40x40_satisfaction_guaranteed_v2@3x.yji-d28fff31f5ad326ba2ca.png'
import freeEstimatesPNG from '../../../../assets/images/40x40_free_estimates_v2@3x.yji-96b2ab4703045ffacf0c.png'
import locallyOwnedPNG from '../../../../assets/images/40x40_locally_owned_v2@3x.yji-04e733a7f628c96a469c.png'


export default function Certification () {

  const certs = [
    { name: 'Fully Licensed', description: 'Rest assured, we\'re fully licensed professionals in the roofing industry. Our commitment to excellence is underscored by our official licensing, ensuring that every project we undertake meets and exceeds the highest industry standards. Our license signifies our dedication to quality, compliance, and expertise in delivering top-notch roofing solutions for our valued customers.', logoSrc: roofingLicenseSVG },
    { name: 'Satisfaction Guaranteed', description: 'Your satisfaction is our priority. We stand behind our work with a rock-solid guarantee. If you\'re not completely satisfied with our roofing services, we\'ll work tirelessly to make it right. Your peace of mind matters, and we\'re committed to delivering the quality and service you deserve, guaranteed.', logoSrc: satisfactionGuaranteedPNG },
    { name: 'Free Estimates', description: '', logoSrc: freeEstimatesPNG },
    { name: 'Locally Owned', description: '', logoSrc: locallyOwnedPNG },


  ]
  
  return (
    <div className='flex flex-col gap-8 items-center'>
      <div>
        <span className='font-display-2 font-bold text-4xl '>Why choose us?</span>
      </div>
      <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 justify-evenly text-center'>

        {
        certs.map((cert, index) => (
          <div className='flex items-center flex-col p-4 rounded-xl justify-center' key={cert.name}>
            <div className='p-8'>
              <Image className='' width={100} src={cert.logoSrc} alt="" />
            </div>
            <div className='flex flex-col gap-4 w-full h-fit bg-orange-500 rounded-t-xl p-4'>
              <span className='text-lg font-display-2 text-white mt-1'>{cert.name}</span>
            </div>
            <div className='flex flex-col gap-4 w-full h-full border-2 border-orange-500 border-t-0 rounded-b-xl p-6'>
              <span className='text-sm text-black mt-1'>{cert.description ? cert.description :  'Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic mollitia consequatur accusamus eum possimus porro assumenda nesciunt suscipit ab? At dicta dolores consectetur inventore ut? Consequatur eaque vero accusamus beatae.'}</span>
            </div>
          </div>
        ))
        }

      </div>

    </div>
    
  )
}