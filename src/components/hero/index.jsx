'use client'
import Image from 'next/image';
import Navbar from '../navbar';
import HeroSection from './HeroSection';
import pattern from '../../../public/assets/pettern.png';


export default function Hero() {

    return (
        <main className='relative  text-[#fdfdfd] min-h-screen w-full pt-10 md:pt-20 '>
            <div className='mx-auto  h-full flex flex-col justify-center items-center xl:w-[40%] lg:w-[60%] md:w-[80%] sm:w-[100%] '>
                <div className='w-screen h-auto mt-[50px] z-20'>
                    <HeroSection />
                </div>
            </div>
        </main>
    );
}