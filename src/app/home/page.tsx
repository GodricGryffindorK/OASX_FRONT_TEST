"use client";

import OasixWidget from "@/widgets/oasix";
import VideoWidget from "@/widgets/video";
import SpeechSlideWidget from "@/widgets/speech";
import MarketPlaceWidget from "@/widgets/marketplace";
import AutoScrollBtn from '@/components/autoSlideBtn';
import Footer from "@/layout/footer"
import './home.css';

const Home = () => {
    return (
        <div className='container mx-auto'>
            <AutoScrollBtn />
            <OasixWidget />
            {/* <br/> */}
            <VideoWidget />
            {/* <br/> */}
            <SpeechSlideWidget />
            {/* <br/> */}
            <MarketPlaceWidget />
            {/* <br/> */}
            <Footer />
        </div>
    );
};

export default Home;
