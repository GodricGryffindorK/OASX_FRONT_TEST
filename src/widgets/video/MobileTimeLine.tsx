'use client'

import { MobileTimeLineContainer, MobileTimeLineUnactiveProgress, MobileTimeLineActiveProgress } from './classNames';

interface TimelineProps {
    currentTime: number;
    duration: number;
}

const MobileTimeLine: React.FC<TimelineProps> = ({ currentTime, duration }) => {
    return (
        <div className={MobileTimeLineContainer}>
            <div className={MobileTimeLineUnactiveProgress}>
                <div
                    className={MobileTimeLineActiveProgress} 
                    style={{ height: `${(currentTime / duration) * 100}%` }}
                />
            </div>
        </div >
    );
};

export default MobileTimeLine;
