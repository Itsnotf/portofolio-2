"use client"


import Image from "next/image";
import cardfais from "../../../public/assets/cardfais.png";
import { motion, useScroll } from "framer-motion"
import { useRef } from "react";
import { forwardRef } from "react";


const About = forwardRef((props, ref) => {

    const animateRef = useRef(null)
    const { scrollYProgress } = useScroll({
        target: animateRef,
        offset: ["0 1", "0.8 1"],

    });


    return (


        <div

            ref={ref} className="w-full h-auto flex flex-row md:justify-evenly justify-center items-center bg-[#060817] py-32">
            <div className="w-[424px] h-auto md:flex hidden">
                <motion.div
                    ref={animateRef}
                    style={{
                        opacity: scrollYProgress,
                        scale: scrollYProgress,
                        delay: 0.25
                    }}>
                    <Image
                        src={cardfais}
                        alt="Faiz"
                        className="w-full  drop-shadow-2xl shadow-pink transition-all  hover:transition-all hover:-rotate-12 hover:scale-75 motion-safe:animate-pulse"
                    />
                </motion.div>
            </div>
            <div className="font-extrabold md:gap-20 gap-14 flex flex-col md:w-[37%] w-[80%]">
                <h1 className="text-abu md:text-[96px] text-[64px]  w-[300px] leading-[0px] text-center">
                    ABOUT <span className="text-putih md:text-[30px] text-[32px]  ">ABOUT</span>
                </h1>

                <Image

                    src={cardfais}
                    alt="Faiz"
                    className="w-full md:hidden  drop-shadow-2xl shadow-pink transition-all  hover:transition-all hover:-rotate-12 hover:scale-75 motion-safe:animate-pulse"
                />

                <p className="text-putih2 text-[12px] md:text-[1rem] md:text-left text-center font-normal ">
                    “I am a{" "}
                    <span className="font-extrabold text-[20px] md:text-[30px] text-pink">
                        Front-End Developer
                    </span>{" "}
                    who has more creativity than others, because I also understand UI/UX
                    fundamentals, such as UX laws and usability heuristics which make it
                    easier for me in slicing and plus a basic understanding of creation
                    that prioritizes user experience of algorithms system.”
                </p>
                <div className="flex items-center md:items-start flex-col gap-5 ">
                    <hr className="w-full " />
                    <hr className="w-[80%]" />
                    <hr className="w-[60%]" />
                </div>
            </div>
        </div>


    );
});

export default About;
