import Image from 'next/image';
import { Tech } from '@/data';



export default function Carousel() {
    return (
        <div className='w-full m-auto  '>
            <div className='md:mt-[100px] mt-[50px] flex flex-wrap h-auto w-full justify-center items-center gap-[20px] md:gap-[70px] '>
                {Tech.map((content, index) => (
                    <div key={index} className=' flex flex-col md:gap-1  transition-all duration-200 ease-in hover:transition-all hover:ease-in hover:duration-200 hover:text-putih text-[#060817]' >
                        <div className='md:w-[200px] md:h-[200px] w-[64px] h-[64px] transition-all ease-in duration-200 hover:duration-200 hover:transition-all hover:ease-in md:hover:-translate-y-10 hover:-translate-y-2 hover:shadow-2xl hover:shadow-pink'>
                            <Image src={content.foto} alt='Tech' />
                        </div>
                        <p className='text-center font-normal md:text-[30px] text-[10px]  '>{content.judul}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

``