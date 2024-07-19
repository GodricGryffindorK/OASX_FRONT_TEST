"use client"
import React from 'react';
import Radio from '@mui/material/Radio';
import Image from 'next/image';

import { BuildingsRadioListContainer, BuildingsRadioListHeader, BuildingsRadioListItemContainer, BuildingsRadioListItemContent } from './classNames';

import "./gradient.css"

const BuildingsRadioList = () => {
    return (
        <div className={BuildingsRadioListContainer}>
            <p className={BuildingsRadioListHeader}>Buildings</p>
            {[1, 2, 3].map((index) =>
                <div className={BuildingsRadioListItemContainer} key={index}>
                    <Image src="/imgs/building.png" width={24} height={24} alt="Building Icon" />
                    <p className={BuildingsRadioListItemContent}>Building {index}</p>
                    <Radio checked={true} color="success" />
                </div>
            )}
        </div>
    )
};

export default BuildingsRadioList;
