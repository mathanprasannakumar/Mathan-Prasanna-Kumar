import Image from "next/image"
import profile from "../../public/profile-transformed-bff.png";
import SocialLinks from "./SocialLinks";


const About=() =>
{
    return (
        <div className="h-screen bg-gradient-to-tr from-slate-700 to-black" id="about">
            <div className="mx-72  mb-[205px] pt-[300px] ps-[50px] pb-[50px] pr-[50px] text-black rounded-3xl space-y-10">
                <div className="bg-gradient-to-tr from-slate-500 to-white p-10 rounded-3xl w-[800px]">
                    <p className="mb-14 font-extrabold text-5xl"> {`Hi there! I'm Mathan.`}</p>
                    <p className="mb-3 text-xl font-bold">Software Developer specializing in AI and Robotics. </p>
                    <p className="mb-3 text-xl font-bold">I am passionate about working at the intersection of AI and low level systems.</p>
                    <p className="mb-3 text-xl font-bold">These days i am focused on building highly scalable, low-latency applications targeted to resource constraint environments</p>
                </div>
                <SocialLinks></SocialLinks>
            </div>
            <Image className="absolute top-[60px] left-[1100px] z-40 rounded-full" src={profile} height="700" alt="my picture "></Image>
        </div>
    )
}

export default About;