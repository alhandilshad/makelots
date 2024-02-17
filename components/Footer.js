"use client"
import Link from 'next/link';
import React from 'react'
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGooglePlusG } from "react-icons/fa6";
import { GoMoveToTop } from "react-icons/go";

const Footer = () => {
    const gototop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth' // This triggers smooth scrolling
        });
    };
  return (
    <>
    <div id='footer-section'>
        <div id='overlay' className='flex justify-center gap-24'>
            <div className='mt-12'>
                <img src='/MAKELOTS-logo-1.webp' className='w-[180px] h-[100px]'></img>
                <p className='text-white pt-8'>Empowering Small Businesses<br /> to Make Lots of Customers,<br /> Clients, Leads, Connections<br /> and more!</p>
            </div>
            <div className='text-white mt-12'>
                <h1 className='text-2xl font-semibold'>USEFUL LINKS</h1>
                <div className='border-2 border-blue-500 w-[30%] mt-4'></div>
                <div className='flex flex-col gap-2 mt-10'>
                    <Link href="/Donate">Donation</Link>
                    <Link href="/Learning">Learning Resources</Link>
                    <Link href="#">Request A Quote</Link>
                    <Link href="/Portfolio">Our Portfolio</Link>
                    <Link href="#">Website Development<br /> Agreement</Link>
                </div>
            </div>
            <div className='text-white mt-12'>
                <h1 className='text-2xl font-semibold'>COMPANY</h1>
                <div className='border-2 border-blue-500 w-[30%] mt-4'></div>
                <div className='flex flex-col mt-10'>
                    <Link href="/About">About Us</Link>
                    <Link href="/Contact">Contact Us</Link>
                    <Link href="#">FAQs</Link>
                    <Link href="#">Testimonials</Link>
                    <Link href="/Mission">Mission Statement</Link>
                    <Link href="#">Vission Statement</Link>
                    <Link href="#">Core Values</Link>
                    <Link href="#">Privacy Policy</Link>
                    <Link href="#">Terms</Link>
                </div>
            </div>
            <div className='text-white mt-12'>
                <h1 className='text-2xl font-semibold'>SOCIALS</h1>
                <div className='border-2 border-blue-500 w-[30%] mt-4'></div>
                <div className='flex items-center gap-4 mt-14'>
                    <FaFacebookF className='text-[22px]' />
                    <FaTwitter className='text-[24px]' />
                    <FaGooglePlusG className='text-[30px]' />
                </div>
            </div>
        </div>
    </div>
    <div className='h-[10vh] w-[100%] bg-black text-white flex justify-between items-center px-20'>
        <h1>© 2024 Makelots All rights reserved.</h1>
        <button onClick={gototop} className='bg-white text-black p-3 rounded-full hover:bg-[#219EBC] hover:duration-500 duration-500 hover:text-white'> 
            <GoMoveToTop className='text-[20px]' />
        </button>
    </div>
    </>
  )
}

export default Footer;