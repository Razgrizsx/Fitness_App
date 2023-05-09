import NicePng from '@/assets/NicePng.png'



const Footer = () => {
  return (
    <footer className='bg-gray-700 py-16'>
        <div className='justify-content mx-auto w-5/6 gap-16 md:flex'>
            <div className='mt-16 basis-1/2 md:mt-0'>
            <img className='w-15 h-10' alt='logo' src={NicePng}/>
                <p className='my-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                <p>© Swat-Fitness All Rights Reserved.</p>
            </div>
            <div className='mt-16 basis-1/4 md:mt-0'>
                <h4 className='font-bold'>Links</h4>
                <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                <p>More Random latin</p>
            </div>
            <div>
                <h4 className='font-bold'>Contact Us</h4>
                <p className='mt-5 '>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <p>(222)432-4532</p>
            </div>
        </div>
    </footer>
    
  )
}

export default Footer