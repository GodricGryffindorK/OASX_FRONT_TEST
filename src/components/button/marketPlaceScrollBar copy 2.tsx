"use client"
import { useEffect, useRef, useState } from 'react';
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider'
import Image from 'next/image';
import { Grid } from '@mui/material';

const MyComponent = ({ mockData }) => {
    const containerRef = useRef(null);
    const [isHorizontalScroll, setIsHorizontalScroll] = useState(false);
    const scrollTimeoutRef = useRef(null);

    useEffect(() => {
        const handleScroll = (event) => {
            // If the scroll is primarily horizontal, set horizontal scroll state
            if (Math.abs(event.deltaX) > Math.abs(event.deltaY)) {
                setIsHorizontalScroll(true);
                clearTimeout(scrollTimeoutRef.current);
                scrollTimeoutRef.current = setTimeout(() => {
                    setIsHorizontalScroll(false);
                }, 100); // Adjust timeout as needed
            }
        };

        const container = containerRef.current;

        if (container) {
            container.addEventListener('wheel', handleScroll);
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleScroll);
            }
        };
    }, []);

    useEffect(() => {
        if (containerRef.current) {
            containerRef.current.style.overflowY = isHorizontalScroll ? 'hidden' : 'auto';
        }
    }, [isHorizontalScroll]);

    return (
        <div
            ref={containerRef}
            className={`overflow-x-auto hide-scrollbar`}
            style={{ overflowY: 'auto' }}
        >
            <div className="flex space-x-2">
                <Shss speed={1}>
                    <ShssWrapper>
                        {mockData.map((item, index) =>
                            <ShssSlide key={index}>
                                <Grid item xs={6} md={8} className="inline-flex flex-none">
                                    <div className="flex flex-col sm:flex-row hero-border p-8 rounded-[30px] bg-landingBack border-t-2 border-l-2 border-iPhoneCardBorder mx-2">
                                        <Image
                                            className="mb-4 mb-0"
                                            src={`/imgs/iPhone_screenshots/${item.imgUrl}`}
                                            alt="iPhone ScreenShot"
                                            width={288}
                                            height={576}
                                        />
                                        <div className="flex flex-col justify-center bg-gray-800 rounded-lg p-6 w-full sm:w-96">
                                            <h2 className="text-primary text-2xl font-bold mb-2">{item.title}</h2>
                                            <p className="text-gray-300 text-lg mb-4">{item.description}</p>
                                        </div>
                                    </div>
                                </Grid>
                            </ShssSlide>
                        )}
                    </ShssWrapper>
                </Shss>
            </div>
        </div>
    );
};

export default MyComponent;
