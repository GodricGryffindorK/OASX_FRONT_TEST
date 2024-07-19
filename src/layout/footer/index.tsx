import Image from "next/image"
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import TelegramIcon from '@mui/icons-material/Telegram';
const Footer = () => {
    return (
        <footer className='my-[4] text-white py-6'>
            <div className='container mx-auto flex justify-between items-center'>
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
                    <a href='#' className='hover:text-gray-400 border-[1px] rounded-full p-2'>
                        <TelegramIcon />
                    </a>
                    <a href='#' className='hover:text-gray-400 ml-3 border-[1px] rounded-full p-2'>
                        <WhatsAppIcon />
                    </a>
                </div>
            </div>
            <hr className='mt-8 mb-4 border-gray-700' />
            <div className='flex justify-between items-center mb-8'>
                <div className='text-sm  font-montserrat'>© 2024 — Copyright</div>
                <Image src='/imgs/oasix_logo.png' alt='Oasix Logo' width={101} height={38} />
            </div>
        </footer>
    )
}
export default Footer