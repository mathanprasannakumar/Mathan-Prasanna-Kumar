"use client"
import Link from "next/link";
import {useState,useEffect} from "react";


const Navbar = ( )=>{


    return (
       <nav>
        {/* flexcontainer */}
            <div className={`px-80 py-10 flex items-center space-x-32 fixed w-full bg-slate-100 text-black z-20 rounded-3xl`}> 
                <div className="font-extrabold text-2xl">
                    <Link href="/">Mathan Prasanna Kumar</Link>
                </div>
                 <div className="font-semibold space-x-10 text-lg">
                    <Link href="#projects">Projects</Link>
                    <Link href="#experience">Experience</Link>
                    <Link href="#articles">Articles</Link>
                    <Link href="#about" >About</Link>
                    <Link href="#contact">Contact</Link>
                </div>
            </div>
       </nav> 
    )

}

export default Navbar;