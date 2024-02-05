import React from 'react';
import { IoLogoInstagram } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";


export default function SocialMedia() {
    return (
        <div className='fixed right-0 w-[50px] h-[122px] flex flex-col gap-5 justify-center items-center rounded-tl-[10px] rounded-bl-[10px] mt-40 bg-putih2' style={{ zIndex: 9999 }}>
            <a href="https://www.instagram.com/faizaflahh" target="_blank" rel="noopener noreferrer">
                <IoLogoInstagram className='text-[30px] transition-all ease-in duration-150 hover:transition-all hover:duration-150 hover:ease-in  hover:text-pink' />
            </a>
            <a href="https://github.com/Itsnotf" target="_blank" rel="noopener noreferrer">
                <FaGithub className='text-[30px]  transition-all ease-in duration-150 hover:transition-all hover:duration-150 hover:ease-in  hover:text-pink' />
            </a>
        </div>
    );
}
