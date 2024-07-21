"use client"
import HorizontalScrollSlider from "horizontal-scroll-slider";
import Image from 'next/image';
import { Grid } from '@mui/material';

const YourComponent = ({ mockData }) => {
    return (
        <HorizontalScrollSlider
            scrollHeight="900vh"
        >
            <div className="slides mr-[150px]">
                {mockData.map((item, index) => (
                    <Grid item xs={4} md={6} key={index} className="inline-flex flex-none">
                        <div className="flex flex-col sm:flex-row hero-border p-8 rounded-[30px] bg-landingBack border-t-2 border-l-2 border-iPhoneCardBorder mx-4">
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
                ))}
            </div>
        </HorizontalScrollSlider>
    );
};

export default YourComponent;
