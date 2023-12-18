import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import EmailIcon from '@mui/icons-material/Email';
export default function TopBar () {
  return (
    <div className='h-6 bg-orange-400 bg-opacity-70 w-full flex items-center justify-center backdrop-blur-sm'> 
      <div className="flex gap-4 items-center text-jet text-xs w-full max-w-7xl justify-start pl-12 pr-12">

        <div className="flex gap-2 items-center text-jet text-xs font-display-2">

          <div className='flex gap-2 items-center'>
            <LocalPhoneIcon fontSize='inherit'/>
            <span className=''>213-745-0000</span>

          </div>

          <div> | </div>
          
          <div className='flex gap-2 items-center'>
            <EmailIcon fontSize='inherit'/>
            <span className=''>zenroofing@gmail.com</span>
          </div>
          
        </div>

      </div>
    </div>
  ) 
}