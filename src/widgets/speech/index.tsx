import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';


import { WidgetBorderContainer, WidgetContentContainer, } from "../WidgetClassNames"

const quaoteArr = [
    "We've made it easy and \n convenient to search for a home",
    "Find your dream home with \n our user-friendly search tools",
    "Discover the perfect property \n at your fingertips, hassle-free",
    "Simplifying your journey to \nhomeownership, one click at a time",
    "Find your dream home with \n our user-friendly search tools",
    "Streamlined house hunting:\n Your ideal home awaits discovery",
]

const SpeechSlideWidget = () => {
    const pagination = {
        clickable: true,
        currentClass: 'bg-primary',
    };
    return (
        <div className={WidgetBorderContainer}>
            <div className={WidgetContentContainer}>
                <Swiper pagination={pagination}
                    modules={[Pagination, Autoplay, EffectFade]}
                    autoplay={{ delay: 1000 }}
                    // effect={'fade'}
                    loop={true}
                >

                    {quaoteArr.map((val, index) => <SwiperSlide key={index}>
                        <div className='min-h-screen flex flex-col items-center justify-center'>
                            <pre className='font-[500] text-[60px] font-black tracking-[-2.26px] text-center bg-searchCaptionGradient text-transparent search-caption-text font-sans'>
                                {val}
                            </pre>
                            <p className='font-[400] text-[49.78px] text-[#e3e3e3] font-carousel'>oasix</p>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default SpeechSlideWidget