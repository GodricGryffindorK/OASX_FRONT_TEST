import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import MarketPlaceScrollBar from "@/components/marketPlaceScrollBar"
// Install modules

interface SlideItem {
    imgUrl: string;
    title: string;
    description: string;
}

const mockData: SlideItem[] = [
    {
        imgUrl: "iPhone1.png",
        title: "Artificial Intelligence Daria",
        description: "Our AI assistant Daria will help you remotely find your dream home in a new way."
    },
    {
        imgUrl: "iPhone2.png",
        title: "Save. Compare!",
        description: "Conveniently compare up to 18 apartments, developers and projects"
    },
    {
        imgUrl: "iPhone3.png",
        title: "Predictions and statistics",
        description: "Big data analysis is available to everyone without registrations"
    },
    {
        imgUrl: "iPhone4.png",
        title: "All about infrastructure",
        description: "Calculate the distance to the desired objects with ease"
    },
    {
        imgUrl: "iPhone5.png",
        title: "Detailed information about the facility",
        description: "Housing, developer and unit maps are always at your fingertips, where you expect to find it"
    },
    {
        imgUrl: "iPhone6.png",
        title: "Walk around the facilities and floors",
        description: "We add digital copies of the property and tours so you can feel at home before you buy even if the house hasn't been built yet"
    },
];

const MarketPlaceWidget = () => {
    return (

        <section className='my-10 mx-16'>
            <h1 className='text-white text-[42px] my-8 font-sans'>Explore the functions of the marketplace</h1>
            <MarketPlaceScrollBar mockData={mockData} />
            <div className='flex flex-col items-center justify-center my-6'>
                <a href='#' className='inline-flex items-center px-10 py-5 pb-5 text-[24px] font-semibold text-primary bg-landing rounded-full border border-primary font-sans'>
                    Go to marketplace
                    <ArrowForwardIcon className='ml-4 ' sx={{ fontSize: 30 }} />
                </a>
            </div>
        </section>
    )
}

export default MarketPlaceWidget