import Image from "next/image"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return (
        <footer className='text-white mx-16 my-10'>
            <div className='flex justify-between items-center border-b-2 border-gray-300 pb-8 mb-4 b'>
                <div className='flex flex-col'>
                    <a href='#' className='hover:underline font-montserrat'>
                        Menu
                    </a>
                    <a href='#' className='hover:underline font-montserrat'>
                        Home page
                    </a>
                    <a href='#' className='hover:underline font-montserrat'>
                        Marketplace
                    </a>
                </div>
                <div className='flex'>
                    <a href='#' className='hover:text-gray-400 border-[2px] rounded-full p-4'>
                        <TelegramIcon className="w-[35px] h-[35px]" />
                    </a>
                    <a href='#' className='hover:text-gray-400 ml-3 border-[2px] rounded-full p-4'>
                        <WhatsAppIcon className="w-[35px] h-[35px]" />
                    </a>
                </div>
            </div>
            {/* <hr className='mt-8 mb-4 border-gray-700 h-4' /> */}
            <div className='flex justify-between items-center mb-8'>
                <div className='font-montserrat text-[16px]'>© 2024 — Copyright</div>
                <Image src='/imgs/oasix_logo.png' alt='Oasix Logo' width={101} height={38} />
            </div>
        </footer>
    )
}
export default Footer