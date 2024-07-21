"use client";
import { useState, useEffect } from 'react';
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider';
import Image from 'next/image';
import { Grid } from '@mui/material';

const MyComponent = ({ mockData }) => {
    const [initialTransform, setInitialTransform] = useState(0);

    useEffect(() => {
        // Calculate initial transform value here
        const calculateInitialTransform = () => {
            // Assuming each slide has a width of 600px + margin of 8px (4px on each side)
            const slideWidth = 600 + 8;
            const initialPosition = 0 // Total width of all slides
            setInitialTransform(-initialPosition);
        };

        calculateInitialTransform();
    }, [mockData]);

    return (
        <Shss speed={2}>
            <ShssWrapper >
                {mockData.map((item, index) => (
                    <ShssSlide key={index} style={{ transform: `translateX(${initialTransform}px) translateZ(0px)` }}>
                        <div className={`w-[600px] flex flex-col sm:flex-row hero-border p-8 rounded-[30px] bg-landingBack border-t-2 border-l-2 border-iPhoneCardBorder mx-4 ${index == mockData.length - 1 && "mr-[150px]"}`}>
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
                    </ShssSlide>
                ))}
            </ShssWrapper>
        </Shss>
    );
};

export default MyComponent;
