"use client"
import Header from '@/components/Header';
import Link from 'next/link';
import { FaCheckCircle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaStar } from "react-icons/fa";
import FirstDropdown from '@/components/FirstDropdown';
import Footer from '@/components/Footer';
import AnimatedNumbers from '@/components/AnimatedNumbers';

const page = () => {
  return (
    <>
    <Header />
    <div className='w-full h-[130vh]'>
    <div className='bg-[#DCF1F7] w-full h-[70vh]'>
        <div className='flex justify-center'>
            <div>
                <h1 className='bg-[#1E9EB9] p-2 text-white text-[14px] font-[400] mt-12'>ELEVATE YOUR BRAND: PROFESSIONALLY CRAFTED WEBSITE FOR YOUR BUSINESS</h1>
                <h1 className='text-[32px] leading-[42px] font-semibold pt-4'>LET’S BUILD AN EXCEPTIONAL<br /> WEBSITE TOGETHER.</h1>
                <p className='pt-4'>We are the Make Lots Foundation. We design professional websites for<br /> those in need. We are currently offering a <span className='text-[#c30000] font-bold'>FREE</span> website for small<br /> businesses that need assistance in establishing their online presence.</p>
                <div className='h-[88vh] w-full flex flex-col rounded-[13px] mt-8' id='box'>
                    <div className='h-[15vh] bg-[#083248] text-white text-center rounded-t-[13px]'>
                        <h1 className='text-2xl font-semibold pt-6 text-[28px]'>TELL US ABOUT YOUR PROJECT</h1>
                        <p className='leading-[20px] text-[14px] pt-1'>Complete the form below and we will get right back to you.</p>
                    </div>
                    <div className='bg-white w-[100%] h-[85vh] flex flex-col'>
                        <div className='flex justify-center gap-8 pt-10'>
                        <div className='flex flex-col gap-3'>
                            <label>Full Name</label>
                            <input type='text' id='input-box' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label>Company Name</label>
                            <input type='text' id='input-box' />
                        </div>
                        </div>
                        <div className='flex justify-center gap-8 pt-5'>
                        <div className='flex flex-col gap-3'>
                            <label>business Email</label>
                            <input type='text' id='input-box' />
                        </div>
                        <div className='flex flex-col gap-3'>
                            <label>Phone Number</label>
                            <input type='text' id='input-box' />
                        </div>
                        </div>
                        <div className='flex flex-col gap-3 pt-5 pl-10'>
                            <label>Please tell us a little about your Business:</label>
                            <textarea className='border-[1px] border-[#00000070] h-[100px] w-[500px]'></textarea>
                        </div>
                        <div className='pl-10 pt-5'>
                            <input type='checkbox' />
                            <label> I need a domain for my business</label>
                        </div>
                        <div className='pl-10 pt-5'>
                            <button type='button' className='bg-[#219EBC] text-white px-48 py-2 rounded'>SUBMIT FORM</button>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <img src='/flt.png' className='absolute top-[140px] w-[170px] h-[140px]'></img>
            </div>
            <div>
                <img src='/office-image5.png' className='w-[620px] h-[512px]'></img>
                <h1 className='text-[21px] font-semibold pt-16 pl-16'>CRAFTING OUTSTANDING WEB EXPERIENCES</h1>
                <p className='font-[500] pt-4 pl-16'>RESPONSIVE, USER-FRIENDLY, VISUALLY STUNNING DESIGNS</p>
                <div className='flex flex-col gap-2 mt-7 ml-36'>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Responsive Layouts</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Intuitive User Experience</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Visually Striking Designs</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Seamless Navigation</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Accessible Content</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Fast Loading Times</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Engaging Interactions</h1>
                    </div>
                    <div className='flex items-center gap-2'>
                        <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                        <h1>Cross-Browser Compatibility</h1>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    <div>
        <p className='text-[14px] pl-44 pt-4'>*Monthly maintenance fee required to host your website and keep it up to date.</p>
        <div className='flex justify-center items-center gap-7 mt-5'>
            <div className='h-[30vh] w-[36%] border-[1px] border-black flex justify-center items-center gap-4'>
                <div>
                    <img src='/tyimg-1.png' className='w-[150px] h-[150px]'></img>
                </div>
                <div>
                    <p className='text-[14px]'>Because of your support, we are able to provide our<br /> professional web design services at little to no cost<br /> to those in need. Our mission is to leave no business<br /> behind. Lets get started today!</p>
                    <p className='text-[14px] pt-4'>If you would like to donate to our cause please visit<br /> HERE. Thank you for your generosity!</p>
                </div>
            </div>
            <div className='flex flex-col gap-5'>
                <img src='/quote.jpg' className='w-[410px] ml-28'></img>
                <p className='text-center text-[17px]'>“I can’t tell you how much I appriciate your complimentary website service. My<br /> business is really taking off and I am so thankful to you!”</p>
                <p className='font-semibold text-center'>Torri Attenborough</p>
            </div>
        </div>
        <div className='flex justify-center items-center mt-5 gap-24'>
            <div>
                <h1 className='font-semibold text-[23px]'>ACHIEVE INCREDIBLE RESULTS THAT ARE UNRIVALED IN<br /> THE WEB DESIGN INDUSTRY.</h1>
                <p className='text-[15px] leading-[24px] pt-4'>Our mission is to empower fledgling business owners by providing them with<br /> professional, high-quality websites at an affordable cost. We strive to level the<br /> playing field and give small business owners the tools they need to succeed in today’s<br /> digital age and unleash their full potential.</p>
                <p className='text-[15px] leading-[24px] pt-4'>Our clients are at the heart of everything we do. We’re dedicated to providing<br /> personalized, attentive service to each and every one of our clients, and believe</p>
                <p className='text-[15px] leading-[24px] pt-4'>that building strong relationships is the key to our success. Moreover, we believe in<br /> building websites that are sustainable and scalable, ensuring that our clients are able<br /> to achieve their long-term goals.</p>
            </div>
            <div>
                <div id='youtube-back'>
                    <div className='pt-32 pl-52'>
                    <Link href="https://www.youtube.com/watch?v=uO9sm7jMfVU" target='_blank'>
                        <FaYoutube className='text-[#f00] text-[70px]' />
                    </Link>
                    </div>
                </div>
                <div className='mt-5'>
                    <button type='button' className='bg-[#219EBC] text-white px-[158px] py-2 rounded'>START YOUR WEBSITE</button>
                </div>
            </div>
        </div>
        <h1 className='text-2xl font-semibold text-center pt-16'>FEATURED IN</h1>
        <div className='flex justify-center items-center mt-6 gap-4'>
            <img src='/retro-systems-logo.png'></img>
            <img src='/appalachian-solutions.png'></img>
            <img src='/union-city-logo.png'></img>
            <img src='/vayonin-logo.png'></img>
            <img src='/bpdailynews-logo.png'></img>
        </div>
        <div className='bg-[#083248] w-full h-[75vh] mt-14'>
            <h1 className='text-white text-center text-3xl font-semibold pt-10'>WE OFFER BUSINESS SOLUTIONS</h1>
            <h1 className='text-white text-center text-3xl font-semibold pt-1'>THAT ENSURE YOUR SUCCESS</h1>
            <div className='flex justify-center items-center gap-5 mt-10'>
                <div className='flex flex-col justify-center items-center gap-4 bg-white w-[12%] h-[35vh]'>
                    <img src='/4.jpg'></img>
                    <h1 className='text-[20px] text-center'>Payment<br /> Gateway</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-white w-[12%] h-[35vh]'>
                    <img src='/5.jpg'></img>
                    <h1 className='text-[20px] text-center'>Dedicated<br /> Support</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-white w-[12%] h-[35vh]'>
                    <img src='/1.jpg'></img>
                    <h1 className='text-[20px] text-center'>Website<br /> Maintenance</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-4 bg-white w-[12%] h-[35vh]'>
                    <img src='/3.jpg'></img>
                    <h1 className='text-[20px] text-center'>Website <br /> Maintenance</h1>
                </div>
                <div className='flex flex-col justify-center items-center gap-2 bg-white w-[12%] h-[35vh]'>
                    <img src='/2.jpg'></img>
                    <h1 className='text-[20px] text-center'>Terms of<br /> Service<br /> Agreements</h1>
                </div>
            </div>
            <div className='text-center mt-10'>
                <button type='button' className='bg-[#219EBC] text-white px-[35px] py-3 rounded'>START YOUR WEBSITE</button>
            </div>
        </div>
        <div>
            <h1 className='text-3xl font-semibold text-[#203548] text-center pt-20'>THE POWER OF PROFESSIONAL<br /> WEBSITE DESIGN</h1>
            <p className='text-center pt-8'>Investing in a professionally designed website is crucial for businesses seeking online<br /> success. It enhances credibility, user experience, and brand visibility driving growth<br /> and customer engagement.</p>
            <div className='flex justify-center items-center gap-8'>
                <div>
                    <img src='/img.jpg'></img>
                </div>
                <div className='flex flex-col gap-6'>
                    <h1 className='font-semibold text-xl'>UNLOCKING SUCCESS:</h1>
                    <img src='/line.png' className='w-[400px]'></img>
                    <div className='flex flex-col gap-3 ml-8'>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Elevates brand credibility and trust.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Enhances user experience and navigation.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Enhances user experience and navigation.</h1>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Drives business growth through customer<br /> engagement.</h1>
                        </div>
                    </div>
                    <p>A professionally designed website serves as a dynamic tool,<br /> propelling your business towards unparalleled success in the digital<br /> landscape. Don't miss out on the transformative impact a well-<br />crafted online presence can bring to your brand.</p>
                    <div>
                        <button type='button' className='bg-[#219EBC] text-white px-[30px] py-3 rounded'>START YOUR WEBSITE</button>
                    </div>
                </div>
            </div>
        </div>
        <div className='flex justify-center items-center gap-24 mt-14'>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[#219EBC] text-xl font-medium pb-2'>OVER</h1>
                <h1 className='text-[#203548] text-5xl font-semibold'><AnimatedNumbers start={0} end={500} />+</h1>
                <h1 className='pt-2'>WEBSITES CREATED</h1>
            </div>
            <div className='h-[20vh] border-[1px] border-[gray]'></div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[#219EBC] text-xl font-medium pb-2'>OVER</h1>
                <h1 className='text-[#203548] text-5xl font-semibold'><AnimatedNumbers start={0} end={250} />+</h1>
                <h1 className='pt-2'>COMPANIES HELPED</h1>
            </div>
            <div className='h-[20vh] border-[1px] border-[gray]'></div>
            <div className='flex flex-col items-center justify-center'>
                <h1 className='text-[#219EBC] text-xl font-medium pb-2'>OVER</h1>
                <h1 className='text-[#203548] text-5xl font-semibold'><AnimatedNumbers start={0} end={100} />+</h1>
                <h1 className='pt-2'>YEARS COMBINED EXPERIENCE</h1>
            </div>
        </div>
        <div className='w-full h-[120vh] bg-[#DCF1F7] mt-10'>
            <div className='h-[94vh] w-[64%] pt-24 ml-[270px]'>
                <img src='/portfolio.jpg' className='w-[100%] h-[94vh]'></img>
            </div>
        </div>
        <div id='background-section'>
            <h1 className='text-center text-3xl font-semibold text-white pt-14'>GET MORE WITH A WEBSITE<br /> DESIGNED BY MAKELOTS</h1>
            <div className='flex justify-center items-center gap-8 mt-14'>
                <div className='h-[60vh] w-[31%] bg-white rounded-md'>
                    <div className='bg-[#DCF1F7] p-2 rounded-t-md'>
                        <img src='/MAKELOTS-logo-1.webp' className='w-[150px] h-[77px] ml-36'></img>
                    </div>
                    <div className='flex flex-col gap-2 mt-8 ml-8'>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Innovative Designs for Unique Branding</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Seamless User Experience for Engagement</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Mobile-Friendly for Wider Reach</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Fast Loading for Improved Performance</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>SEO-Optimized for Higher Visibility</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Robust Security Measures in Place</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Dedicated Support for Client Satisfaction</h1>
                        </div>
                    </div>
                </div>
                <div className='h-[60vh] w-[31%] bg-white rounded-md'>
                    <div className='bg-[#E6E6E6] p-[30px] rounded-t-md'>
                        <h1 className='text-center text-2xl font-semibold'>OUR COMPETITORS</h1>
                    </div>
                    <div className='flex flex-col gap-2 mt-8 ml-8'>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Limited Customization Options</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Longer Turnaround Time for Projects</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>High Initial Startup Expenses</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Learning Curve for New Features</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Dependency on Slower Hosting Services</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Limited Integration with Third-Party Apps</h1>
                        </div>
                        <div className='border-[1px] border-gray-200 w-[75%]'></div>
                        <div className='flex items-center gap-2'>
                            <FaCheckCircle className='text-[#27A1B8] text-[20px]' />
                            <h1>Continuous Updates May Require Downtime</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-10'>
                <button type='button' className='bg-[#219EBC] text-white px-[30px] py-3 rounded'>START YOUR WEBSITE</button>
            </div>
        </div>
        <div>
            <h1 className='text-4xl font-semibold text-center text-[#203548] pt-16'>What Our Clients Are Saying</h1>
            <div className='border-2 border-[#203548] w-[20%] ml-[600px] mt-5'></div>
            <div className='flex justify-center gap-7 mt-20'>
                <div className='bg-[#EFEFEF] h-[60vh] w-[22%]' id='shadow-box'>
                    <img src='/1-1.png' className='w-[30%] ml-28 mt-5'></img>
                    <div className='flex justify-center gap-1 mt-5'>
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                    </div>
                    <p className='text-center text-[#333333B3] pt-7'>“They delivered a website that not only<br /> looks great but also functions flawlessly.<br /> Their expertise and dedication made our<br /> online presence stand out and boosted<br /> our business. Highly recommended!”</p>
                    <h1 className='text-2xl text-[#EA9016] font-semibold text-center pt-10'>Sandra C.</h1>
                    <h1 className='text-center text-[#333333B3]'>Co-Founder at DigitalRFX</h1>
                </div>
                <div className='bg-[#EFEFEF] h-[75vh] w-[22%]' id='shadow-box'>
                    <img src='/2-2.png' className='w-[30%] ml-28 mt-5'></img>
                    <div className='flex justify-center gap-1 mt-5'>
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                    </div>
                    <p className='text-center text-[#333333B3] pt-7'>Our experience working with the Make<br /> Lots team was exceptional. They<br /> transformed our outdated website into a<br /> visually stunning and user-friendly<br /> platform that perfectly represents our<br /> brand. Their creativity attention to detail,<br /> and seamless communication made the<br /> entire process a breeze. We couldn’t be<br /> happier with the results!</p>
                    <h1 className='text-2xl text-[#EA9016] font-semibold text-center pt-10'>Bernard Renfro</h1>
                    <h1 className='text-center text-[#333333B3]'>Manager at OBCR LLC</h1>
                </div>
                <div className='bg-[#EFEFEF] h-[60vh] w-[22%]' id='shadow-box'>
                    <img src='/3.png' className='w-[30%] ml-28 mt-5'></img>
                    <div className='flex justify-center gap-1 mt-5'>
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                        <FaStar className='text-orange-400 text-[24px]' />
                    </div>
                    <p className='text-center text-[#333333B3] pt-7'>Within just three months of launching my<br /> new website, I’ve seen a significant<br /> increase in leads and sales compared to<br /> the two years with my old design.<br /> Prioritizing an effective user experience<br /> has been a game-changer for my business</p>
                    <h1 className='text-2xl text-[#EA9016] font-semibold text-center pt-7'>Joyce M.</h1>
                    <h1 className='text-center text-[#333333B3]'>Founder/CEO at WLJ</h1>
                </div>
            </div>
        </div>
        <div className='w-full h-[72vh] bg-[#DCF1F7] flex justify-center mt-20'>
            <div>
                <h1 className='text-3xl font-semibold pt-12'>The Impact of Effective Website<br /> Design and Development</h1>
                <p className='pt-6 text-[15px]'>Your online presence is significantly influenced by the design and development<br /> of your website. Even minor enhancements can significantly impact your success<br /> in the market. A basic and poorly optimized website is no longer sufficient for<br /> businesses.</p>
                <p className='pt-5 text-[15px]'>In the evolving digital landscape, customer discernment plays a crucial role in<br /> choosing business partners.</p>
                <p className='pt-5 text-[15px]'>For the past decade, The Make Lots Foundation has consistently out performed<br /> other web design companies. Our commitment to delivering superior outcomes<br /> sets us apart and ensures our clients’ success</p>
                <button type='button' className='bg-[#219EBC] text-white px-[30px] py-3 rounded mt-8'>START YOUR WEBSITE</button>
            </div>
            <div>
                <img src='/business-lady-1-1.png' className='w-[660px] h-[525px]'></img>
            </div>
        </div>
        <div>
            <img src='/quote.jpg' className='w-[410px] ml-[550px] mt-4'></img>
            <h1 className='text-center text-xl pt-4'>The entire team is highly supportive and truly <br />knowledgeable in research and development.</h1>
            <h1 className='text-center text-xl pt-8 font-semibold'>Ellawese Jackson-Smith</h1>
            <h1 className='text-3xl font-semibold text-center pt-6'>FREQUENTLY ASKED QUESTIONS</h1>
            <div className='w-[45%] ml-[420px] mt-8'>
                <FirstDropdown />
            </div>
        </div>
        <div id='back-section' className='text-white text-center mt-4'>
            <h1 className='font-semibold text-3xl pt-10'>READY TO GET STARTED?</h1>
            <h1 className='font-semibold text-3xl pt-2'>LET US KNOW WHAT YOU NEED TODAY!</h1>
            <p className='pt-7'>Don't wait to start your professionally designed website at a fraction of the cost charged by<br /> other companies. Explore all our current web design packages.</p>
            <button type='button' className='bg-[#219EBC] text-white px-[30px] py-3 rounded mt-10'>START YOUR WEBSITE</button>
        </div>
    </div>
    <Footer />
    </>
  )
}

export default page; 