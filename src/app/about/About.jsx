import React from 'react'
import Image from 'next/image'
export default function About() {
  return (
    <div className='flex flex-col justify-center pt-10 text-center 2xl:px-96 bg-[#f0f0f0] text-[#131313]'>
        <div>
            <h1 className='md:text-4xl text-2xl font-semibold'>Founders and Main Host <Image src="/images/sparkle.svg" width={52} height={52} alt='' className='inline'/></h1>
            <div className='flex flex-col'>
                <div className='grid md:grid-cols-2 justify-items-center'>
                    <Image src="/images/1.svg" width={350} height={300} alt='' className='py-4 lg:w-[500px]'/>
                    <Image src="/images/2.svg" width={350} height={300} alt='' className='py-4 lg:w-[500px]'/>
                </div>
            </div>
        </div>
          <div className='mt-6 px-6 pb-6'>
              <h1 className='md:text-4xl pb-4 text-2xl font-semibold'><Image src="/images/sparkle.svg" width={52} height={52} alt='' className='inline' />About and History</h1>
              <div className='grid md:px-12 md:grid-cols-2 text-left'>
                  <div className='py-4 md:px-6'>
                      <h2 className=' text-xl font-semibold'>Founders And Main Host ?</h2>
                      <p className=''>Mustaq Ahmed Ali and Chanakya, co-founders of Side Gigs Design Lab, lead a team of skilled freelancers in frontend and backend development, AWS services, graphic design, digital marketing, photography, videography, and UI/UX design, providing high-quality and comprehensive digital solutions</p>
                  </div>
                  <div className='py-4 md:px-6'>
                      <h2 className=' text-xl font-semibold'>Who We Are?</h2>
                      <p className=''>We offer graphic design, web development, SEO, digital marketing,
                          UI/UX design, e-commerce solutions, branding, consultation, product photography, videography, and short video content creation. Your comprehensive digital partner for success.</p>
                  </div>
                  <div className='py-4 md:px-6'>
                      <h2 className=' text-xl font-semibold'>How's Our Collaborative Partnership Approach?</h2>
                      <p className=''>At Side Gigs Design Lab, our freelancers collaborate seamlessly, crafting customized digital solutions according to client requirements. Our approach is professional and client-centric, ensuring exceptional results</p>
                  </div>
                  <div className='py-4 md:px-6'>
                      <h2 className=' text-xl font-semibold'>How We Work?</h2>
                      <p className=''>In collaboration with our in-house freelancers, our digital agency seamlessly integrates as part of your team. Through expert cooperation, we tailor solutions to ensure your project&apos;s success.</p>
                  </div>
              </div>
          </div>
          <div className='flex justify-center py-10'>
            <Image src="/images/test.svg" width={400} height={350} alt='' className='md:w-[600px]'/>
          </div>
    </div>
  )
}
