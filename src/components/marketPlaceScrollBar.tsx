"use client";
import { useState, useEffect } from 'react';
import { Shss, ShssWrapper, ShssSlide } from 'smooth-horizontal-scroll-slider';
import Image from 'next/image';

interface SlideItem {
    imgUrl: string;
    title: string;
    description: string;
}

interface MyComponentProps {
    mockData: SlideItem[];
}

const MyComponent: React.FC<MyComponentProps> = ({ mockData }) => {

    return (
        <Shss speed={2}>
            <ShssWrapper>
                {mockData.map((item, index) => (
                    <ShssSlide key={index} >
                        <div className={`w-[600px] flex flex-col sm:flex-row hero-border p-8 rounded-[30px] bg-landingBack border-t-2 border-l-2 border-iPhoneCardBorder mx-4 ${index === mockData.length - 1 ? "mr-[150px]" : ""}`}>
                            <Image
                                className="mb-4 sm:mb-0"
                                src={`/imgs/iPhone_screenshots/${item.imgUrl}`}
                                alt="iPhone Screenshot"
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
