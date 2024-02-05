import React from "react";
import Image from "next/image";
import ProjectIcons from "../../../public/assets/ProjectIcons.svg";
import CarouselProject from "./CarouselProject";

const Projects = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-full h-auto flex flex-col justify-evenly items-center bg-[#060817] py-32 ">
            <div className="w-full flex flex-row items-center justify-between mb:pb-20  ">
                <div className="font-extrabold md:mx-[100px] ml-5 ">
                    <h1 className="text-abu md:text-[120px]  text-[48px] w-[250px] leading-[0px] text-center ">
                        PROJECT <span className="text-putih  md:text-[30px] text-[32px] ">PROJECT</span>
                    </h1>
                </div>
                <Image src={ProjectIcons} alt="Icons" className="md:mx-[100px] mr-10 md:w-[100px] w-[40px]" />
            </div>
            <CarouselProject />
        </div>
    );
});

export default Projects;
