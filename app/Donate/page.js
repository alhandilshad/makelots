"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
    <title>Donate - Business App</title>
    <Header />
    <div className='flex flex-col items-center justify-center gap-4 mt-12 mb-16'>
        <div className='flex items-center gap-1'>
            <Link href="/Home" className='font-semibold hover:text-[#1bb0ce]'>Home</Link>
            <MdKeyboardArrowRight />
            <h1 className='font-semibold'>Donate</h1>
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>Donate</h1>
        </div>
    </div>
    <div id='donate-back'>
        <div className='flex justify-center items-center w-[100%] h-[120vh] gap-16'>
            <div className='h-[25vh] w-[48%] bg-white !rounded-[10px]' id='para-box'>
                <p className='pt-7 pl-10'>Your donation today can help make difference in an<br /> inspiring entrepreneur's life. We count on donations<br /> from people just like you to help us continue to keep our<br /> prices so low. We are dedicated to helping small<br /> business owners everywhere.</p>
            </div>
            <div className='h-[100vh] w-[36%] bg-white !rounded-md'>
                <h1 className='text-center text-3xl font-semibold pt-8'>Donate & Support Our Cause</h1>
                <div className='border-2 border-blue-600 w-[18%] ml-[215px] mt-2'></div>
                <p className='text-center pt-4'>Help our organization by donating today! All<br /> donations go directly to making a difference for<br /> our cause.</p>
                <img src='/donation.jpg' className='w-[100%] mt-5'></img>
                <div className='text-center mt-8'>
                    <button type='button' className='bg-[#219EBC] text-white px-[50px] py-4 rounded font-semibold text-xl'>Donate Now</button>
                </div>
                <div className='flex items-center justify-center bg-[#fbfbfb] border-[1px] border-[#f2f2f2] text-[#989898] h-[60px] text-[12px] mt-6'>
                    <p>Secure Donation</p>
                </div>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page;