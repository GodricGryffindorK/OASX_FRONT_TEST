'use client'
import React from 'react';

import { TimeLineUnactiveProgress, TimeLineActiveProgress } from './classNames';

interface TimelineProps {
    currentTime: number;
    duration: number;
}

const Timeline: React.FC<TimelineProps> = ({ currentTime, duration }) => {
    return (
        <div className={TimeLineUnactiveProgress}>
            <div
                className={TimeLineActiveProgress}
                style={{ width: `${(currentTime / duration) * 100}%` }}
            />
        </div>
    );
};

export default Timeline;
