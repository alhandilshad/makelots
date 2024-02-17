"use client"
import Footer from '@/components/Footer';
import Header from '@/components/Header';
import { MdKeyboardArrowRight } from "react-icons/md";
import Link from 'next/link';
import React from 'react'

const page = () => {
  return (
    <>
    <title>Portfolio - Business App</title>
    <Header />
    <div className='flex flex-col items-center justify-center gap-4 mt-12 mb-16'>
        <div className='flex items-center gap-1'>
            <Link href="/Home" className='font-semibold hover:text-[#1bb0ce]'>Home</Link>
            <MdKeyboardArrowRight />
            <h1 className='font-semibold'>Portfolio</h1>
        </div>
        <div>
            <h1 className='text-4xl font-semibold'>Portfolio</h1>
        </div>
    </div>
    <div className='flex flex-col justify-center items-center gap-4 mb-24'>
        <div className='flex justify-center items-center gap-4'>
            <div className='border-[3px] border-black'>
                <img src='/profile-selfassistrail.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/profile-picturesoffish.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/profile-pariswheel.jpg' className='h-[300px] w-[300px]'></img>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className='border-[3px] border-black'>
                <img src='/portfolio4.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio5.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio6.jpg' className='h-[300px] w-[300px]'></img>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className='border-[3px] border-black'>
                <img src='/portfolio7.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio8.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio9.jpg' className='h-[300px] w-[300px]'></img>
            </div>
        </div>
        <div className='flex justify-center items-center gap-4'>
            <div className='border-[3px] border-black'>
                <img src='/portfolio10.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio11.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio12.jpg' className='h-[300px] w-[300px]'></img>
            </div>
        </div>
        <div className='flex mr-80 gap-4'>
            <div className='border-[3px] border-black'>
                <img src='/portfolio13.jpg' className='h-[300px] w-[300px]'></img>
            </div>
            <div className='border-[3px] border-black'>
                <img src='/portfolio14.jpg' className='h-[300px] w-[300px]'></img>
            </div>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page;