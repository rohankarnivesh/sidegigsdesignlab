import React from 'react';
import Image from 'next/image';

export default function Collaborate() {
  return (
    <div className='bg-[#f0f0f0] text-[#131313] px-10 leading-loose py-10'>
        <div className='lg:px-28 xl:px-72 pb-5'>
            <h1 className='text-center text-3xl font-bold md:text-5xl'>How We Collaborate</h1>
            <p className='lg:text-center lg:text-2xl text-justify font-medium py-10'>We are a united force of individual creators, startup champions, UI/UX designers, product designers, front-end and back-end developers, graphic artists, product photographers, and commercial videographers. Our collaborative spirit knows no bounds as we work harmoniously to transform ideas into impactful solutions for our valued clients, whether they&apos;re solo creators or innovative startups</p>
        </div>
        <div className='grid md:grid-cols-3 gap-8 2xl:px-72 lg:px-28 justify-center xl:justify-between'>
            <div className='flex flex-col text-center'>
                <Image src="/images/video.png" width={200} height={200} alt="" className='w-full flex justify-center'/>
                <h1 className='bg-[#131313] text-[#f0f0f0] py-4'>TOGETHER</h1>
                <p className='pt-4 lg:text-left'>Impact can only be made together. We love working together with clients, partners and each other As a team.</p>
            </div>
            <div className='flex flex-col text-center'>
                <Image src="/images/mail.png" width={200} height={200} alt="" className='w-full flex justify-center'/>
                <h1 className='bg-[#131313] text-[#f0f0f0] py-4'>COMMUNICATION</h1>
                <p className='pt-4 lg:text-left'>We will introduce you to our workflow, as well as our way of creating the complete solution. We focus on all things and everything matters to us.</p>
            </div>
            <div className='flex flex-col text-center'>
                <Image src="/images/vid.png" width={200} height={200} alt="" className='w-full flex justify-center'/>
                <h1 className='bg-[#131313] text-[#f0f0f0] py-4'>SIDE GIGS DESIGN LABS</h1>
                <p className='pt-4 lg:text-left'>Your Freelance Hub for Affordable and Efficient Startup Solutions, Bridging Talent and Business Innovation.</p>
            </div>
        </div>
    </div>
  )
}
