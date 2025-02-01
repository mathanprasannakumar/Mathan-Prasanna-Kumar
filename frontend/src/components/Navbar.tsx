"use client"
import Link from "next/link";


const Navbar = ( )=>{


    return (
       <nav>
        {/* flexcontainer */}
            <div className={`px-80 py-10 flex items-center space-x-32 fixed w-full bg-slate-100 text-black z-20 rounded-3xl`}> 
                <div className="font-extrabold text-2xl">
                    <Link href="/" className="hover:text-slate-500">Mathan Prasanna Kumar</Link>
                </div>
                 <div className="font-semibold space-x-10 text-lg">
                    <Link href="#projects" className="hover:text-slate-500">Projects</Link>
                    <Link href="#experience" className="hover:text-slate-500">Experience</Link>
                    <Link href="#articles" className="hover:text-slate-500">Articles</Link>
                    <Link href="#about" className="hover:text-slate-500">About</Link>
                    <Link href="#contact" className="hover:text-slate-500">Contact</Link>
                </div>
            </div>
       </nav> 
    )

}

export default Navbar;