import React from 'react'
import Image from 'next/image'
import HeroImage from '../../../public/assets/HeroImage.png'
import ButtonDownload from '../button/ButtonDownload'
export default function HeroSection() {
    return (
        <div className='mx-auto w-full h-auto flex flex-row justify-center items-center'>
            <div className='flex flex-col md:w-[50%] mx-[60px] md:mx-0 w-full h-auto '>
                <h1 className='md:text-[90px] text-[50px] font-extrabold text-pink text-center md:text-left leading-tight'>FAIZ AFLAH HAFIZUDDIN</h1>
                <Image src={HeroImage} priority={true} className='w-[100%] md:hidden mt-[30px]' alt='HeroImage' />
                <div className='md:w-[70%] w-full mt-[25px]  mx-auto md:mx-0 '>
                    <h2 className='text-putih md:text-[35px] text-center md:text-left text-[24px] font-bold'>FRONT END DEVELOPER</h2>
                    <p className='md:text-[20px] text-[14px] text-center md:text-left text-putih2 mt-[10px]'>“I am Faiz aflah hafizuddin, an experieced with a for crafting engaging user experiences. Welcome to my
                        Portfolio!” </p>
                    <div className='flex w-full  md:justify-start justify-center'>
                        <ButtonDownload />
                    </div>
                </div>
            </div>
            <div className='w-[35%]  '>
                <Image src={HeroImage} className=' md:flex justify-start  hidden' alt='HeroImage' />
            </div>
        </div>
    )
}
