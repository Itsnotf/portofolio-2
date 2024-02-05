
import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ProjectData } from '../../data';
import { FreeMode } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/free-mode';

([FreeMode]);


export default function CarouselProject() {
    const [spaceBetween, setSpaceBetween] = useState(20);


    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth >= 768) {
                setSpaceBetween(-400);
            } else {
                setSpaceBetween(20);
            }
        };

        // Set initial value
        handleResize();

        // Add event listener for window resize
        window.addEventListener('resize', handleResize);

        // Remove event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className="w-full flex flex-row justify-center items-center mt-10 overflow-x-clip">
            <Swiper
                slidesPerView={1}
                freeMode={true}
                className="max-w-[90%]"
                spaceBetween={spaceBetween}
            >
                {ProjectData.map((content, index) => (
                    <SwiperSlide key={index}>
                        <div className="bg-abu md:w-[800px] w-[350px] rounded-[10px] h-[500px] md:h-[345px] md:mx-10 flex flex-row justify-center items-center">
                            <div className="md:w-[50%] w-full flex flex-col text-white items-start gap-4 mx-4 md:ml-10">
                                <h1 className="md:text-4xl text-3xl">
                                    <span className="text-pink text-3xl md:text-[60px] font-bold">{content.id}</span> {content.head}
                                </h1>
                                <p>{content.title}</p>
                                <div className="md:hidden">
                                    <Image src={content.img} alt="Project1 " />
                                </div>
                                <h2>{content.stack} </h2>
                            </div>
                            <div className="w-[50%] h-full md:flex hidden items-center mx-5">
                                <Image src={content.img} alt="Project1 hidden" />
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
