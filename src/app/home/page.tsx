"use client";
import OasixWidget from "@/widgets/oasix";
import VideoWidget from "@/widgets/video";
import SpeechSlideWidget from "@/widgets/speech";
import MarketPlaceWidget from "@/widgets/marketplace";
import Footer from "@/layout/footer";
import './home.css';

const Home = () => {
    return (
        <div className="">
            {/* <ReactPageScroller ref={pageScrollerRef} pageOnChange={pageOnChange}> */}
            <OasixWidget />
            <VideoWidget />
            <SpeechSlideWidget />

            <MarketPlaceWidget />
            <Footer />
            {/* {currentPage === 3 && <Footer />} */}
            {/* </ReactPageScroller> */}
        </div>
    );
};

export default Home;
