import Image from "next/image";
import SkillIcons from "../../../public/assets/SkillIcons.svg";
import Carousel from "./carousel";
import { forwardRef } from "react";

const Skill = forwardRef((props, ref) => {
    return (
        <div ref={ref} className="w-full h-auto flex flex-col  bg-[#060817] pb-10">
            <div className="w-full flex flex-row items-center justify-between   ">
                <div className="font-extrabold md:mx-[100px]  ">
                    <h1 className="text-abu md:text-[120px] text-[64px] w-[250px] leading-[0px] text-center ">
                        SKILL <span className="text-putih  md:text-[30px] text-[32px] ">SKILL</span>
                    </h1>
                </div>
                <Image src={SkillIcons} alt="Icons" className="md:mx-[100px]  mr-10 md:w-[100px] w-[50px]" />
            </div>
            <div className="w-full">
                <Carousel />
            </div>
        </div>
    );
});

Skill.displayName = "Skill";

export default Skill;
