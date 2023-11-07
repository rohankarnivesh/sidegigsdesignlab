import React from 'react'
import Image from 'next/image'

export default function Abo() {
  return (
    <div className='px-6 md:px-24 grid lg:grid-cols-2 bg-[#f0f0f0] text-[#131313] pt-10 text-center 2xl:px-96'>
          <div className='flex flex-col md:px-2'>
              <h3 className='text-left md:text-4xl font-semibold text-xl mb-4' >We hired people who are very passionate about what they do</h3>
              <p className='text-base lg:text-xl text-left'>Within Our Design Agency, we&apos;re a community of freelancers from around the world. Our mission is to collaborate and provide creative solutions for our clients.</p>
              <ul className='py-4'>
                  <li className='flex gap-8 py-2'>
                      <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className='' />
                      <p className='text-left font-normal text-base'>
                          <span className='text-lg font-semibold'>Flexible Scheduling: </span>
                          Employees have the freedom to work when it&apos;s most convenient for them, allowing for a better work-life balance</p>
                  </li>
                  <li className='flex gap-8 py-2'>
                      <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className='' />
                      <p className='text-left font-normal text-base'>
                          <span className='text-lg font-semibold'>Autonomy and Responsibility: </span>
                          Remote work empowers employees to take ownership of their projects and contribute to the brand&apos;s success.</p>
                  </li>
                  <li className='flex gap-8 py-2'>
                      <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className='' />
                      <p className='text-left font-normal text-base'>
                          <span className='text-lg font-semibold'>Career Growth Opportunities: </span>
                          Employees can take on additional projects during their free time to further their career and expand their skill set</p>
                  </li>
                  <li className='flex gap-8 py-2'>
                      <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className='' />
                      <p className='text-left font-normal text-base'>
                          <span className='text-lg font-semibold'>Remote Collaboration Tools: </span>
                          Access to top-notch collaboration tools ensures seamless communication and project management from anywher</p>
                  </li>
              </ul>
          </div>
          <div className='flex justify-center py-6'>
              <Image src="/images/header-image.svg" width={350} height={350} alt='' className='md:w-[500px] '/>
          </div>
</div>
  )
}
