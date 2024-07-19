"use client";
import Image from 'next/image';

interface BuildingButtonProps {
    title: string;
    status: boolean;
}

const BuildingButtonComponent: React.FC<BuildingButtonProps> = ({ title, status }) => {
    return (
        <div className="flex items-center">
            <button className="w-[140.55px] h-[44.94px] relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-full group bg-gradient-to-br from-[rgba(255,255,255,0.8)] to-[rgba(255,255,255,0.1)]">
                <span className="w-[134.55px] h-[38.94px] relative rounded-full px-2.5 py-2.5 transition-all ease-in bg-btnBuildingBack text-white">
                    {title}
                </span>
            </button>
            <Image
                src={`/imgs/btn_badges/${status ? "available.png" : "soldout.png"}`}
                alt={status ? 'Sold out' : 'Available'}
                width={67.63}
                height={23.27}
                className='ml-[-67px] mt-[40px] z-20'
            />
        </div>
    );
};

export default BuildingButtonComponent;
