"use client";
import { useState, useRef } from "react";
import ReactPageScroller from "react-page-scroller";
import OasixWidget from "@/widgets/oasix";
import VideoWidget from "@/widgets/video";
import SpeechSlideWidget from "@/widgets/speech";
import MarketPlaceWidget from "@/widgets/marketplace";
import AutoScrollBtn from "@/components/autoSlideBtn";
import Footer from "@/layout/footer";
import './home.css';

const Home = () => {
    const [currentPage, setCurrentPage] = useState(0);
    const pageScrollerRef = useRef<ReactPageScroller | null>(null);

    const goToPage = (eventKey: number) => {
        if (pageScrollerRef.current) {
            pageScrollerRef.current.goToPage(eventKey);
        }
    };

    const pageOnChange = (number: number) => {
        setCurrentPage(number);
    };

    return (
        <div className="container mx-auto">
            {/* <ReactPageScroller ref={pageScrollerRef} pageOnChange={pageOnChange}> */}
            <OasixWidget />
            {/* <AutoScrollBtn /> */} 
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
