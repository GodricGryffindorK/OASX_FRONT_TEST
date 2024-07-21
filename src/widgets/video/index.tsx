"use client"
import { useRef, useState, useEffect } from 'react';
import PCTimeline from './PCTimeLine';
import MobileTimeline from './MobileTimeLine'; // Import the second Timeline component

import { WidgetVideoContainer, VideoElement, TimeLineContainer } from './classNames';

const VideoPlayer: React.FC = () => {
    const videoRef = useRef<HTMLVideoElement | null>(null);
    const [currentTime, setCurrentTime] = useState<number>(0);
    const [videoSrc, setVideoSrc] = useState<string>('/videos/pc.mp4');
    const [isMobileView, setIsMobileView] = useState<boolean>(false); // State to track mobile view

    useEffect(() => {
        // Function to update video source based on viewport width
        const updateVideoSource = () => {
            const isMobile = window.innerWidth < 800;
            setIsMobileView(isMobile);
            setVideoSrc(isMobile ? '/videos/mobile.mp4' : '/videos/pc.mp4');
        };

        // Set initial video source
        updateVideoSource();

        // Add event listener for window resize
        window.addEventListener('resize', updateVideoSource);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', updateVideoSource);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (!video) return;

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        video.play();
                    } else {
                        video.pause();
                    }
                });
            },
            {
                threshold: 0.5 // Adjust this value to control how much of the video should be visible before playing
            }
        );

        observer.observe(video);

        return () => {
            observer.unobserve(video);
        };
    }, []);

    useEffect(() => {
        const video = videoRef.current;
        if (video) {
            const updateTime = () => setCurrentTime(video.currentTime);
            video.addEventListener('timeupdate', updateTime);
            return () => {
                video.removeEventListener('timeupdate', updateTime);
            };
        }
    }, []);

    return (
        <div className={WidgetVideoContainer}>
            <video
                ref={videoRef}
                className={VideoElement}
                src={videoSrc}
                type="video/mp4"
                autoPlay
                muted
                loop
            >
                Your browser does not support the video tag.
            </video>
            {isMobileView ? <MobileTimeline currentTime={currentTime} duration={26.823264} /> : <PCTimeline currentTime={currentTime} duration={26.823264} />}
        </div>
    );
};

export default VideoPlayer;
