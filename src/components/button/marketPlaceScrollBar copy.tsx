import React from 'react';
import { useIntersectionObserver } from 'usehooks-ts';
import Image from 'next/image';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import 'react-horizontal-scrolling-menu/dist/styles.css';
import 'tailwindcss/tailwind.css';

interface CardProps {
    title: string;
    description: string;
    imgUrl: string;
}

interface SimpleExampleProps {
    mockData: CardProps[];
}

const OnScreenContext = React.createContext(true);

function Card({ title, description, imgUrl }: CardProps) {
    return (
        <div className="flex flex-col sm:flex-row hero-border p-8 rounded-[30px] bg-landingBack border-t-2 border-l-2 border-iPhoneCardBorder mx-2 w-[700px]">
            <Image
                className="mb-4 sm:mb-0"
                src={`/imgs/iPhone_screenshots/${imgUrl}`}
                alt="iPhone ScreenShot"
                width={288}
                height={576}
            />
            <div className="flex flex-col justify-center bg-gray-800 rounded-lg p-6 w-full sm:w-96">
                <h2 className="text-primary text-2xl font-bold mb-2">{title}</h2>
                <p className="text-gray-300 text-lg mb-4">{description}</p>
            </div>
        </div>
    );
}

function onWheel(apiObj: VisibilityContext, ev: React.WheelEvent): void {
    const isThouchpad = Math.abs(ev.deltaX) !== 0 || Math.abs(ev.deltaY) < 15;

    if (isThouchpad) {
        ev.stopPropagation();
        return;
    }

    if (ev.deltaY < 0) {
        apiObj.scrollPrev();
    } else {
        apiObj.scrollNext();
    }
}

const SimpleExample: React.FC<SimpleExampleProps> = ({ mockData }) => {
    const { isIntersecting: isVisible, ref } = useIntersectionObserver({
        threshold: 1,
    });

    return (
        <div ref={ref}>
            <OnScreenContext.Provider value={isVisible}>
                <ScrollMenu onWheel={onWheel}>
                    {mockData.map((item, id) => (
                        <Card
                            title={item.title}
                            description={item.description}
                            imgUrl={item.imgUrl}
                            key={id}
                        />
                    ))}
                </ScrollMenu>
            </OnScreenContext.Provider>
        </div>
    );
}

export default SimpleExample;
