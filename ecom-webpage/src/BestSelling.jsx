import img1 from './assets/p_img40.png';
import img2 from './assets/p_img36.png';
import img3 from './assets/p_img24.png';
import img4 from './assets/p_img41.png';
import img5 from './assets/p_img35.png';
import img6 from './assets/p_img27.png';
import img7 from './assets/p_img25.png';
import img8 from './assets/p_img37.png';
import img9 from './assets/p_img33.png';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
const CustomPrevArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 left-3 justify-center items-center transform -translate-y-1/2 z-10 cursor-pointer bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-500"
        onClick={onClick}
    >
        <ArrowBackIosIcon sx={{
            textAlign: "center",
        }}/>
    </div>
);

const CustomNextArrow = ({ onClick }) => (
    <div
        className="absolute top-1/2 right-3 justify-center items-center transform -translate-y-1/2 z-10 cursor-pointer bg-gray-300 p-2 rounded-full shadow-lg hover:bg-gray-500"
        onClick={onClick}
    >
       <ArrowForwardIosIcon />
    </div>
);

export default function BestSelling() {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow: <CustomNextArrow />,
        prevArrow: <CustomPrevArrow />,
    };

    return (
        <>
            <h1 className="mt-32 text-4xl font-bold text-center font-mono">
                Our <span className="text-gray-400">Best Selling</span>
            </h1>
            <div className="w-full mt-10 rounded-lg overflow-hidden relative">
                <Slider {...settings}>
                    {[img1, img2, img3, img4, img5, img6, img7, img8, img9].map((img, index) => (
                        <div key={index} className="p-2">
                            <img
                                src={img}
                                alt={`Best Selling ${index + 1}`}
                                className="w-full border-none lg:h-[33rem] lg:w-[40rem] object-contain rounded-lg"
                            />
                        </div>
                    ))}
                </Slider>
            </div>
        </>
    );
}
