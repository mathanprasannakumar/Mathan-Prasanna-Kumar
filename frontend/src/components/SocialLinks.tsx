import Link  from "next/link";
import {FaGithub,FaLinkedin,FaTwitter,FaFilePdf} from "react-icons/fa";

const SocialLinks=()=>
{
    return(
        <div className="mx-60 rounded-3xl p-5 flex space-x-8 justify-center w-[300px] bg-white ">
            <Link href={"https://www.linkedin.com/in/mathan-prasanna-kumar-s-338821283/"} target="_blank" className="text-5xl text-black hover:text-gray-500 transition-all">
                <FaLinkedin className=""></FaLinkedin>
            </Link>
            <Link href={"https://github.com/mathanprasannakumar"} target="_blank" className="text-5xl text-black hover:text-gray-500 transition-all">
                <FaGithub className=""></FaGithub>
            </Link>
            <a href="/Mathan_Prasanna_Kumar_Resume.pdf" target="_blank" className="text-black text-5xl  hover:text-gray-500 transition-all">
                <FaFilePdf></FaFilePdf>
            </a>
        </div>
    );
}


export default SocialLinks;