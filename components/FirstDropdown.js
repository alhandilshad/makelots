"use client"
import React from 'react';
import { Collapse, Space } from 'antd';

const FirstDropdown = () => {
    return(
        <>
        <Space direction='vertical' className='w-[100%]'>
        <Collapse
        className='bg-[#219EBC]'
      items={[
        {
          key: '1',
          label: <h1 className='font-semibold text-white'>WHAT MAKES YOUR WEBSITES SO AFFORDABLE?</h1>,
          children: <p className='text-[14px]'>The Make Lots Foundation exists to give business owners an alternative to high prices web design. We<br /> don’t cut back at all on quality. We count on donations from people just like you to help us continue to<br /> keep our prices so low.</p>,
        },
      ]}
    />
    <Collapse
      className='bg-[#219EBC]'
      items={[
        {
          key: '1',
          label: <h1 className='font-semibold text-white'>WHAT IS THE IMPORTANCE OF HAVING A WEBSITE?</h1>,
          children: <p className='text-[14px]'>We started the Make Lots Foundation to give all entrepreneurs a voice at the lowest price we could<br /> offer. Your professionally designed website will be your voice. If you don’t have one your customers<br /> and clients will not find you. Our web design costs are less than 10% of the industry standard.</p>,
        },
      ]}
    />
    <Collapse
      className='bg-[#219EBC]'
      items={[
        {
          key: '1',
          label: <h1 className='font-semibold text-white'>HOW LONG WILL IT TAKE TO BUILD MY WEBSITE?</h1>,
          children: <p className='text-[14px]'>Typical time to complete your website is only 5 to 10 business days once we have all the necessary<br /> information. This time can be extended if changes or additions are needed to be made. E-commerce<br /> websites will take longer.</p>,
        },
      ]}
    />
    <Collapse
      className='bg-[#219EBC]'
      items={[
        {
          key: '1',
          label: <h1 className='font-semibold text-white'>CAN I UPDATE THE WEBSITE MYSELF ONCE IT’S BEEN BUILT?</h1>,
          children: <p className='text-[14px]'>Yes. We provide the option to update text and images yourself through the easy-to-use WordPress<br /> interface. You can add edit and delete content without paying us to do it for you. If you do need us to<br /> make small changes/edits for you please contact us and we will get it done for you at no cost. If it is a<br /> bigger job, we will let you know and give you a quote.</p>,
        },
      ]}
    />
    <Collapse
      className='bg-[#219EBC]'
      items={[
        {
          key: '1',
          label: <h1 className='font-semibold text-white'>WHO PROVIDES HOSTING FOR THE WEBSITE?</h1>,
          children: <p className='text-[14px]'>After we build your website, we will provide the hosting for your website. In addition, we will keep<br /> your website and plugins up to date. Also, we are always available for technical issues and small edits<br /> to your website. We use the same hosting company for our own website and for ALL of our clients</p>,
        },
      ]}
    />
    </Space>
        </>
    )
};
export default FirstDropdown;