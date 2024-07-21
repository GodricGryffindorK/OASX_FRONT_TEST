import Carousel from 'react-material-ui-carousel'

import { WidgetBorderContainer } from "../WidgetClassNames"

const quaoteArr = [
    "We've made it easy and \n convenient to search for a home",
    "Find your dream home with \n our user-friendly search tools",
    "Discover the perfect property \n at your fingertips, hassle-free",
    "Simplifying your journey to \nhomeownership, one click at a time",
    "Find your dream home with \n our user-friendly search tools",
    "Streamlined house hunting:\n Your ideal home awaits discovery",
]

const SpeechSlideWidget = () => {
    return (
        <div className={`${WidgetBorderContainer}`}>
            <Carousel
                indicatorIconButtonProps={{
                    style: {
                        marginLeft: "4px",
                        marginTop: "-40px",
                        color: "rgba(100, 100, 100, 1)",
                    }
                }}
                activeIndicatorIconButtonProps={{
                    style: {
                        marginLeft: "4px",
                        marginTop: "-40px",
                        color: "rgba(32, 215, 149, 1)",
                    }
                }}
                className='w-landingContentWidth bg-landingBack rounded-[30px]'>
                {
                    quaoteArr.map((item, i) => {
                        return <div className='min-h-screen flex flex-col items-center justify-center' key={i}>
                            <div className='font-[500] text-[60px] font-black tracking-[-2.26px] text-center bg-searchCaptionGradient text-transparent search-caption-text font-sans max-w-[900px]'>
                                {item}
                            </div>
                            <p className='font-[400] text-[49.78px] text-[#e3e3e3] font-carousel'>oasix</p>
                        </div>
                    })
                }
            </Carousel>
        </div>
    )
}

export default SpeechSlideWidget