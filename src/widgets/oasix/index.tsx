"use client"

const OasixWidget = () => {
    return (
        <div className="w-full h-screen flex items-center justify-center overflow-hidden bg-landingBorderGradient rounded-[30px] p-[1px] my-4">
            <div className="w-landingContentWidth h-landingContentWidthHeight flex items-center justify-center overflow-hidden bg-landingBack rounded-[30px]">
                <div className='min-h-screen flex flex-col items-center justify-center'>
                    <img src='./oasix_logo.png' />
                    <p className='font-[500] text-[33.89px] tracking-[-2.26px] search-caption'>Smart property search</p>
                    <div className='relative flex items-center bg-gray-800 rounded-full p-2'>
                        <input
                            type='text'
                            placeholder='Find real estate'
                            className='bg-landing text-white w-[336px] placeholder-gray-400 focus:outline-none flex-grow p-4 rounded-full hero-border font-montserrat'
                        />
                        <button className='absolute right-2 top-1/2 transform -translate-y-1/2 rounded-full p-[14px] search-btn'>
                            <svg xmlns='http://www.w3.org/2000/svg' x='0px' y='0px' width='30' height='30' viewBox='0,0,256,256'>
                                <g
                                    fill='#ffffff'
                                    fill-rule='nonzero'
                                    stroke='none'
                                    stroke-width='1'
                                    stroke-linecap='butt'
                                    stroke-linejoin='miter'
                                    stroke-miterlimit='10'
                                    stroke-dasharray=''
                                    stroke-dashoffset='0'
                                    font-family='none'
                                    font-weight='none'
                                    font-size='none'
                                    text-anchor='none'
                                >
                                    <g transform='scale(5.12,5.12)'>
                                        <path d='M21,3c-9.37891,0 -17,7.62109 -17,17c0,9.37891 7.62109,17 17,17c3.71094,0 7.14063,-1.19531 9.9375,-3.21875l13.15625,13.125l2.8125,-2.8125l-13,-13.03125c2.55469,-2.97656 4.09375,-6.83984 4.09375,-11.0625c0,-9.37891 -7.62109,-17 -17,-17zM21,5c8.29688,0 15,6.70313 15,15c0,8.29688 -6.70312,15 -15,15c-8.29687,0 -15,-6.70312 -15,-15c0,-8.29687 6.70313,-15 15,-15z'></path>
                                    </g>
                                </g>
                            </svg>
                        </button>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default OasixWidget