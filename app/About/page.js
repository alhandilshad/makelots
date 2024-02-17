"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
    <title>About Us - Business App</title>
    <Header />
    <div className='flex flex-col items-center justify-center gap-4 mt-12 mb-32'>
        <div className='flex items-center gap-1'>
            <Link href="/Home" className='font-semibold hover:text-[#1bb0ce]'>Home</Link>
            <MdKeyboardArrowRight />
            <h1 className='font-semibold'>About Us</h1>
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>About Us</h1>
        </div>
    </div>
    <div className='flex justify-center items-center gap-14 mb-28'>
        <div>
            <p className='text-blue-600 text-[14px] font-semibold'>ABOUT THE COMPANY</p>
            <h1 className='text-4xl font-semibold'>MAKE LOTS</h1>
            <p className='text-[14px] pt-2'>Make Lots Foundation is more than just a web development company that<br /> is founded to give small business owners a chance to have a<br /> professionally designed website without breaking the bank.</p>
            <p className='text-[14px] pt-4'>We’re a community of tech-savvy dreamers and doers, united in our<br /> passion for helping small business owners succeed. Our team of<br /> experienced developers is dedicated to providing top-notch services and<br /> creating websites that meet the unique needs of our clients.</p>
            <p className='text-[14px] pt-3'>We believe that every small business deserves a website that reflects the<br /> quality of its products and services, and that’s why we’re committed to<br /> delivering high-quality websites that are both functional and aesthetically<br /> pleasing.</p>
            <p className='text-[14px] pt-3'>Our commitment to education and empowerment sets us apart and makes<br /> us more than just a provider of web development services, it makes us a<br /> partner in the success of small businesses everywhere.</p>
            <p className='text-[14px] pt-4'>Are you ready to take your business to the next level? Let’s join hands!</p>
            <div className='border-[3px] border-blue-600 w-[10%] mt-7'></div>
        </div>
        <div>
            <img src='/about.jpg' className='w-[470px] h-[480px] rounded-[20px]' id='about-img'></img>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page;