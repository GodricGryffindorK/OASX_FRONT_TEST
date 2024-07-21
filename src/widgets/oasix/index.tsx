"use client"

import Image from "next/image"
import SearchBox from "./searchBox"
import AutoScrollBtn from "@/components/autoSlideBtn";

import { SearchCaption, WidgetFlexContainer } from "./classNames"
import { WidgetBorderContainer, WidgetContentContainer } from "../WidgetClassNames"

const OasixWidget = () => {
    return (
        <div className={WidgetBorderContainer}>
            <div className={WidgetContentContainer}>
                <div className={WidgetFlexContainer}>
                    <Image src='/imgs/oasix_logo.png' alt="oasix logo" width={193} height={73} />
                    <p className={SearchCaption}>Smart property search</p>
                    <SearchBox />
                    <AutoScrollBtn />
                </div>
            </div>
        </div>
    )
}

export default OasixWidget
