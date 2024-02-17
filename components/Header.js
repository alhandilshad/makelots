import Link from 'next/link';
import React from 'react'

const Header = () => {
  return (
    <>
    <div className='relative w-full h-[14vh] flex justify-center items-center gap-16' id='header-box'>
        <div>
            <img src='/MAKELOTS-logo-1.webp' className='w-[150px] h-[77px]'></img>
        </div>
        <div className='flex items-center gap-6'>
            <Link href="/Donate" className='font-[500]'>Donate</Link>
            <Link href="/Mission" className='font-[500]'>Mission Statement</Link>
            <Link href="/Learning" className='font-[500]'>Learning Resources</Link>
            <Link href="/Portfolio" className='font-[500]'>Portfolio</Link>
            <Link href="/About" className='font-[500]'>About Us</Link>
        </div>
        <div>
            <Link href="/Contact" id='contact-btn' className='text-white text-[14px] font-[400]'>CONTACT US</Link>
        </div>
    </div>
    </>
  )
}

export default Header;