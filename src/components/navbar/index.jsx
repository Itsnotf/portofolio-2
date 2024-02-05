"use client";
import { useState, useEffect } from "react";

export default function Navbar({ handleAboutClick, handleSkillClick, handleProjectClick }) {
    const [scroll, setScroll] = useState(false);


    const scrollHandler = () => {
        const heightScroll = window.scrollY;
        if (heightScroll >= 75) {
            setScroll(true);
        } else {
            setScroll(false);
        }
    };

    useEffect(() => {
        window.addEventListener("scroll", scrollHandler);
        return () => {
            window.removeEventListener("scroll", scrollHandler);
        };
    }, []);

    return (

        <div className={`mx-auto w-full flex items-center justify-center h-auto fixed z-50 ${scroll ? 'bg-abu bg-opacity-50' : ''}`}>

            <ul className="flex flex-row gap-10 md:text-[24px] text-[16px] font-medium" >
                <li
                    onClick={handleAboutClick}
                    className='cursor-pointer p-5 transition-all ease-in duration-200 hover:transition-all hover:duration-200 hover:ease-in hover:text-[#BB84E8]'
                >
                    About
                </li>
                <li
                    onClick={handleSkillClick}
                    className='cursor-pointer p-5 transition-all ease-in duration-200 hover:transition-all hover:duration-200 hover:ease-in hover:text-[#BB84E8]'
                >
                    Skill
                </li>
                <li
                    onClick={handleProjectClick}
                    className='cursor-pointer p-5 transition-all ease-in duration-200 hover:transition-all hover:duration-200 hover:ease-in hover:text-[#BB84E8]'
                >
                    Project
                </li>


            </ul>

        </div>

    );
}
