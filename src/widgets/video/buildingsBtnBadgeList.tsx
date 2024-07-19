"use client"
import BuildingButton from "@/components/button/buildingBtn"

import { BuildingsBtnsWithBadgesContainer } from './classNames';

const BuildingsBtnsWithBadges = () => {
    return (
        <div className={BuildingsBtnsWithBadgesContainer}>
            <BuildingButton title='Building 1' status={false} />
            <div className="mt-[-20px]" ><BuildingButton title='Building 2' status={true} /></div>
            <BuildingButton title='Building 3' status={false} />
        </div>
    )
}
export default BuildingsBtnsWithBadges