"use client"

import React, {useState} from "react";
import Link from "next/link";
import Logo from "../../public/Logo.png";
import Image from "next/image";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
    const [showNavbar, setShowNavbar] = useState(false);
    const handleShowNavbar = () => {
        setShowNavbar(!showNavbar)
    }
    return (
        <>
            <div className="w-full h-20 bg-white top-0 drop-shadow">
                <div className="container mx-auto px-4 h-full">
                    <div className="flex justify-between items-center h-full">
                       <div className="flex flex-row items-center gap-1">
                           <Image
                               src={Logo}
                               alt="logo"
                               width={60}
                               height={100}
                           >
                           </Image>
                           <p className="navTitle">West Denver Home Services</p>
                       </div>
                        <ul className="hidden md:flex gap-x-6 text-black">
                            <li>
                                <Link href="#about">
                                    <p>About Us</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#businesses">
                                    <p>Our Businesses</p>
                                </Link>
                            </li>
                            <li>
                                <Link href="#services">
                                    <p>All Services</p>
                                </Link>
                            </li>
                        </ul>
                        <div className="menu-icon" onClick={handleShowNavbar}>
                            <GiHamburgerMenu className="hamburger"/>
                        </div>
                        <div className={`nav-elements  ${showNavbar && 'active'}`}>
                            <ul>
                                <li>
                                    <Link href="#about" className="navMenuLink" onClick={handleShowNavbar}>About</Link>
                                </li>
                                <li>
                                    <Link href="#businesses" className="navMenuLink" onClick={handleShowNavbar}>Businesses</Link>
                                </li>
                                <li>
                                    <Link href="#services" className="navMenuLink" onClick={handleShowNavbar}>Services</Link>
                                </li>
                                <li>
                                    <Link href="#qr" className="navMenuLink" onClick={handleShowNavbar}>QR Code</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Navbar;