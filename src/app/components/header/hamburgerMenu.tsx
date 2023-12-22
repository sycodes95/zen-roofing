import MenuIcon from '@mui/icons-material/Menu';

interface HamburgerMenuProps {
  showMobileMenuContext?: {
    showMobileMenu: boolean;
    setShowMobileMenu: React.Dispatch<React.SetStateAction<boolean>>
  }
}
export default function HamburgerMenu ( {showMobileMenuContext} : HamburgerMenuProps ) {

  return (
    <div className='md:hidden flex w-fit h-full items-center bg-white text-black p-4'>
      <MenuIcon />
    </div>
  )
}