import { Swiper, SwiperSlide } from 'swiper/react';
import Image from 'next/image';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface SlideItem {
    imgUrl: string;
    title: string;
    description: string;
}

const mockData: SlideItem[] = [
    {
        imgUrl: "iPhone1.png",
        title: "Artificial Intelligence Daria",
        description: "Our AI assistant Daria will help you remotely find your dream home in a new way."
    },
    {
        imgUrl: "iPhone2.png",
        title: "Save. Compare!",
        description: "Conveniently compare up to 18 apartments, developers and projects"
    },
    {
        imgUrl: "iPhone3.png",
        title: "Predictions and statistics",
        description: "Big data analysis is available to everyone without registrations"
    },
    {
        imgUrl: "iPhone4.png",
        title: "All about infrastructure",
        description: "Calculate the distance to the desired objects with ease"
    },
    {
        imgUrl: "iPhone5.png",
        title: "Detailed information about the facility",
        description: "Housing, developer and unit maps are always at your fingertips, where you expect to find it"
    },
    {
        imgUrl: "iPhone6.png",
        title: "Walk around the facilities and floors",
        description: "We add digital copies of the property and tours so you can feel at home before you buy even if the house hasn't been built yet"
    },
];


const MarketPlaceWidget = () => {
    return (

        <section className='relative'>
            <h1 className='text-white text-[42px] my-8 font-sans'>Explore the functions of the marketplace</h1>
            <Swiper
                spaceBetween={50}
                pagination={{ clickable: true }}
                autoplay={{ delay: 3000, disableOnInteraction: false }}
                className='flex items-center justify-center'
                breakpoints={{
                    1100: {
                        slidesPerView: 1,  // Show only 1 slide for screens less than 600px
                    },
                    1101: {
                        slidesPerView: 2.1,  // Show 2.1 slides for screens larger than 600px
                    }
                }}
            >
                {mockData.map((item: SlideItem, index) => (
                    <SwiperSlide key={index}>
                        <div className='p-[1px] bg-landingBorderGradient rounded-[30px]'>
                            <div className='flex hero-border p-4 rounded-[30px] bg-landingBack flex-col sm:flex-row'>
                                <Image
                                    className='w-full sm:w-[270px] mb-4 sm:mb-0'
                                    src={`/imgs/iPhone_screenshots/${item.imgUrl}`}
                                    alt="iPhone ScreenShot"
                                    width={298}
                                    height={589}
                                />
                                <div className='flex flex-col justify-center bg-gray-800 rounded-lg p-6 w-full sm:w-96'>
                                    <h2 className='text-primary text-2xl font-bold mb-2'>{item.title}</h2>
                                    <p className='text-gray-300 text-lg mb-4'>{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            <div className='flex flex-col items-center justify-center my-6'>
                <a href='#' className='inline-flex items-center px-10 py-5 pb-5 text-[24px] font-semibold text-primary bg-landing rounded-full border border-primary font-sans'>
                    Go to marketplace
                    <ArrowForwardIcon className='ml-4 ' sx={{ fontSize: 30 }} />
                </a>
            </div>
        </section>
    )
}

export default MarketPlaceWidget