"use client"
import { useRef, useEffect, useState } from 'react';
import Image from 'next/image';
import { Grid } from '@mui/material';
const YourComponent = ({ mockData }) => {
    const containerRef = useRef(null);
    const [showScrollbar, setShowScrollbar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current.scrollTop > 0) {
                setShowScrollbar(true);
            } else {
                setShowScrollbar(false);
            }
        };

        const container = containerRef.current;
        container.addEventListener('scroll', handleScroll);

        return () => {
            container.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div
            ref={containerRef}
            className={`overflow-x-auto  ${showScrollbar ? 'show-scrollbar' : 'hide-scrollbar'}`}
            style={{ overflowY: 'auto' }} // Adjust height as needed
        >
            <div className="flex space-x-2">
                {mockData.map((item, index) => (
                    <Grid item xs={6} md={8} key={index} className="inline-flex flex-none">
                        <div className="p-[1px] bg-landingBorderGradient rounded-[30px] w-full">
                            <div className="flex flex-col sm:flex-row hero-border p-4 rounded-[30px] bg-landingBack">
                                <Image
                                    className="w-full sm:w-[270px] mb-4 sm:mb-0"
                                    src={`/imgs/iPhone_screenshots/${item.imgUrl}`}
                                    alt="iPhone ScreenShot"
                                    width={298}
                                    height={589}
                                />
                                <div className="flex flex-col justify-center bg-gray-800 rounded-lg p-6 w-full sm:w-96">
                                    <h2 className="text-primary text-2xl font-bold mb-2">{item.title}</h2>
                                    <p className="text-gray-300 text-lg mb-4">{item.description}</p>
                                </div>
                            </div>
                        </div>
                    </Grid>
                ))}
            </div>
        </div>
    );
};

export default YourComponent;
