"use client"
import Image from 'next/image';
import { Grid } from '@mui/material';

const YourComponent = ({ mockData }) => {
    return (
        <div
            className={`overflow-x-auto hide-scrollbar`}
            style={{ overflowY: 'auto' }} // Adjust height as needed
        >
            <div className="flex space-x-2" >
                {mockData.map((item, index) => (
                    <Grid item xs={6} md={8} key={index} className="inline-flex flex-none">
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
                ))}
            </div>
        </div>
    );
};

export default YourComponent;
