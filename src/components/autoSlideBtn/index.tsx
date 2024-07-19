"use client";
import React, { useState, useEffect } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward'; // Import the arrow icon

const AutoScrollBtn = () => {
    const [showButton, setShowButton] = useState(true);

    useEffect(() => {
        const handleScroll = () => {
            // Show button if scroll position is at the top, hide otherwise
            if (window.scrollY < window.innerHeight) {
                setShowButton(true);
            } else {
                setShowButton(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        // Clean up the event listener on component unmount
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToNextPage = () => {
        window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
    };

    return (
        <>
            {showButton && (
                <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 text-center">
                    <button
                        onClick={scrollToNextPage}
                        className="pb-4 px-1 shadow-md hover:bg-blue-600 transition border-[2px] border-autoScrollBtn rounded-full"
                    >
                        <ArrowDownwardIcon fontSize="inherit" className='text-autoScrollBtn' />
                    </button>
                    <pre className="pt-3 text-autoScrollBtn text-[12px] leading-[16px]] font-montserrat">{`Scroll down to learn more \n about the project`}</pre>
                </div>
            )}
        </>
    );
};

export default AutoScrollBtn;
