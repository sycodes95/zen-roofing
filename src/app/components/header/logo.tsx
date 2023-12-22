import Link from "next/link";
import RoofingIcon from '@mui/icons-material/Roofing';
import zenRoofingLogo from '../../../assets/images/zenroofinglogo.png'
import Image from "next/image";

interface LogoProps {
  variant?: 'header' | 'default'
}

export default function Logo ({
  variant
}: LogoProps) {

  const headerVariant = 'flex items-center h-full text-jet bg-black bg-opacity-90 pl-2 pr-2 rounded-b-xl'
  const defaultVariant = 'flex items-center h-full text-jet  '

  return (
    <Link className={`${variant === 'header' ? `${headerVariant} border-2 border-orange-500 border-t-0 ` : defaultVariant} `} href={'/'}>
      <div className="flex items-center mt-1 text-black h-full ">
        <Image className={`object-contain h-full w-fit p-0 ${variant === 'header' && 'invert'} `} src={zenRoofingLogo} alt="" />
      </div>
    </Link>
  )
}