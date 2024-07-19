import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { WidgetBorderContainer, WidgetContentContainer } from "../WidgetClassNames"

const SpeechSlideWidget = () => {
    const pagination = {
        clickable: true,
        currentClass: 'bg-primary',
    };
    return (
        <div className={WidgetBorderContainer}>
            <div className={WidgetContentContainer}>
                <Swiper pagination={pagination} modules={[Pagination]}>
                    {[1, 2, 3, 4, 5, 6].map((index) => <SwiperSlide key={index}>
                        <div className='min-h-screen flex flex-col items-center justify-center'>
                            <h1 className='font-[500] text-[60px] font-black tracking-[-2.26px] text-center bg-searchCaptionGradient text-transparent search-caption-text font-sans'>
                                We've made it easy and
                                <br /> convenient to search for a home
                            </h1>
                            <p className='font-[400] text-[49.78px] text-[#e3e3e3] font-carousel'>oasix</p>
                        </div>
                    </SwiperSlide>)}
                </Swiper>
            </div>
        </div>
    )
}

export default SpeechSlideWidget