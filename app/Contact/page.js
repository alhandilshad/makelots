"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
    <title>Contact Us - Business App</title>
    <Header />
    <div className='flex flex-col items-center justify-center gap-4 mt-12 mb-16'>
        <div className='flex items-center gap-1'>
            <Link href="/Home" className='font-semibold hover:text-[#1bb0ce]'>Home</Link>
            <MdKeyboardArrowRight />
            <h1 className='font-semibold'>Contact Us</h1>
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>Contact Us</h1>
        </div>
    </div>
    <h1 className='text-center text-3xl font-semibold'>SEND US A MESSAGE</h1>
    <div className='flex flex-col justify-center items-center gap-7 mt-12'>
      <div className='flex flex-col w-[40%] gap-3'>
        <label className='text-xl font-semibold text-gray-600'>Full Name : </label>
        <input type='text' placeholder='Enter Full Name *' className='border-2 border-gray-400 w-[100%] h-[8vh] p-4'></input>
      </div>
      <div className='flex flex-col w-[40%] gap-3'>
        <label className='text-xl font-semibold text-gray-600'>Email Address : </label>
        <input type='text' placeholder='Enter Email Address *' className='border-2 border-gray-400 w-[100%] h-[8vh] p-4'></input>
      </div>
      <div className='flex flex-col w-[40%] gap-3'>
        <label className='text-xl font-semibold text-gray-600'>Phone Number : </label>
        <input type='text' placeholder='Enter Phone Number *' className='border-2 border-gray-400 w-[100%] h-[8vh] p-4'></input>
      </div>
      <div className='flex flex-col w-[40%] gap-3'>
        <label className='text-xl font-semibold text-gray-600'>Message : </label>
        <textarea placeholder='Enter Message *' className='border-2 border-gray-400 w-[100%] h-[18vh] p-4'></textarea>
      </div>
    </div>
    <div className='text-center mt-10 mb-24'>
      <button type='button' className='px-[30px] py-3 bg-blue-500 text-white'>Send Message</button>
    </div>
    <Footer />
    </>
  )
}

export default page;