import Header from '@/components/Header';
import React from 'react'
import Link from 'next/link';
import { MdKeyboardArrowRight } from "react-icons/md";
import Footer from '@/components/Footer';

const page = () => {
  return (
    <>
    <title>Mission Statement - Business App</title>
    <Header />
    <div className='flex flex-col items-center justify-center gap-4 mt-12 mb-24'>
        <div className='flex items-center gap-1'>
            <Link href="/Home" className='font-semibold hover:text-[#1bb0ce]'>Home</Link>
            <MdKeyboardArrowRight />
            <h1 className='font-semibold'>Mission Statement</h1>
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>Mission Statement</h1>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center gap-4 mb-32'>
        <div className='flex gap-4'>
            <img src='/group-300x300.jpeg'></img>
            <div className='flex flex-col gap-3'>
                <p className='text-center text-[14px]'>To empower fledgling business<br /> owners by providing them with<br /> professional, high-quality websites<br /> at an affordable cost. We strive to<br /> level the playing field and give<br /> small business owners the tools<br /> they need to succeed in today’s<br /> digital age and unleash their full<br /> potential.</p>
                <p className='text-center text-[14px]'>Our clients are at the heart of<br /> everything we do. We’re dedicated<br /> to providing personalized, attentive<br /> service to each and every one of<br /> our clients, and believe that building</p>
            </div>
        </div>
        <div>
            <p className='text-center text-[14px]'>strong relationships is the key to our success. Moreover, we believe in building<br /> websites that are sustainable and scalable, ensuring that our clients are able to<br /> achieve their long-term goals.</p>
            <p className='text-center text-[14px] pt-3'>In addition to our services, we also extend a helping hand to businesses in need. Over<br /> time, we’ve graciously donated numerous websites to business owners just like you. If<br /> you require financial assistance for your new business website, please don’t hesitate to<br /> get in touch. We’re wholeheartedly dedicated to your success!</p>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page;