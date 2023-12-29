import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function TopBar () {
  return (
    <div className='hidden bg-orange-500  w-full md:flex items-center justify-center backdrop-blur-sm'> 
      <div className="flex gap-4 items-center  text-xs w-full max-w-7xl justify-start pl-2 pr-2">

        <div className="flex gap-2 items-center text-white text-xs ">

          <div className='flex gap-2 items-center'>
            <LocalPhoneIcon fontSize='inherit'/>
            <span className='text-xs'>213-858-7485</span>

          </div>

          <div> | </div>
          
          <div className='flex gap-2 items-center'>
            <EmailIcon fontSize='inherit'/>
            <span className=''>zenroofingcorp@gmail.com</span>
          </div>
          
        </div>

      </div>
    </div>
  ) 
}