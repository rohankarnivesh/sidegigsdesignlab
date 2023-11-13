"use client";
import React, {useRef } from 'react'
import ServiceCard from './ServiceCard'
import { motion, useInView } from "framer-motion";
import Image from 'next/image';
import Link from 'next/link';

const serviceData = [
    {
        id: 1,
        title: "Web Design & Developement",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M4 5V16H20V5H4ZM2 4.00748C2 3.45107 2.45531 3 2.9918 3H21.0082C21.556 3 22 3.44892 22 4.00748V18H2V4.00748ZM1 19H23V21H1V19Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 2,
        title: "UI/UX",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M6.93912 14.0327C6.7072 14.6562 6.51032 15.233 6.33421 15.8154C7.29345 15.1188 8.43544 14.6766 9.75193 14.512C12.2652 14.1979 14.4976 12.5384 15.6279 10.4535L14.1721 8.99878L15.5848 7.58407C15.9185 7.24993 16.2521 6.91603 16.5858 6.58237C17.0151 6.15301 17.5 5.35838 18.0129 4.21479C12.4197 5.08172 8.99484 8.50636 6.93912 14.0327ZM17 8.99728L18 9.99658C17 12.9966 14 15.9966 10 16.4966C7.33146 16.8301 5.66421 18.6635 4.99824 21.9966H3C4 15.9966 6 1.99658 21 1.99658C20.0009 4.99392 19.0018 6.99303 18.0027 7.99391C17.6662 8.33038 17.3331 8.66372 17 8.99728Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 3,
        title: "Search Engine Optimization",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M8 3C4.13401 3 1 6.13401 1 10C1 13.866 4.13401 17 8 17H9.07089C9.02417 16.6734 9 16.3395 9 16C9 15.6605 9.02417 15.3266 9.07089 15H8C5.23858 15 3 12.7614 3 10C3 7.23858 5.23858 5 8 5H16C18.7614 5 21 7.23858 21 10C21 10.3428 20.9655 10.6775 20.8998 11.0008C21.4853 11.5748 21.9704 12.2508 22.3264 13C22.7583 12.0907 23 11.0736 23 10C23 6.13401 19.866 3 16 3H8ZM16 13C14.3431 13 13 14.3431 13 16C13 17.6569 14.3431 19 16 19C17.6569 19 19 17.6569 19 16C19 14.3431 17.6569 13 16 13ZM11 16C11 13.2386 13.2386 11 16 11C18.7614 11 21 13.2386 21 16C21 17.0191 20.6951 17.967 20.1716 18.7574L22.7071 21.2929L21.2929 22.7071L18.7574 20.1716C17.967 20.6951 17.0191 21 16 21C13.2386 21 11 18.7614 11 16Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 4,
        title: "Social Media Marketing",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M16 16C17.6569 16 19 17.3431 19 19C19 20.6569 17.6569 22 16 22C14.3431 22 13 20.6569 13 19C13 17.3431 14.3431 16 16 16ZM6 12C8.20914 12 10 13.7909 10 16C10 18.2091 8.20914 20 6 20C3.79086 20 2 18.2091 2 16C2 13.7909 3.79086 12 6 12ZM16 18C15.4477 18 15 18.4477 15 19C15 19.5523 15.4477 20 16 20C16.5523 20 17 19.5523 17 19C17 18.4477 16.5523 18 16 18ZM6 14C4.89543 14 4 14.8954 4 16C4 17.1046 4.89543 18 6 18C7.10457 18 8 17.1046 8 16C8 14.8954 7.10457 14 6 14ZM14.5 2C17.5376 2 20 4.46243 20 7.5C20 10.5376 17.5376 13 14.5 13C11.4624 13 9 10.5376 9 7.5C9 4.46243 11.4624 2 14.5 2ZM14.5 4C12.567 4 11 5.567 11 7.5C11 9.433 12.567 11 14.5 11C16.433 11 18 9.433 18 7.5C18 5.567 16.433 4 14.5 4Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 5,
        title: "Commercial Photography & Videography",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M9.82726 21.7633L14.3094 14L17.8413 20.1175C16.198 21.3021 14.1805 22 12 22C11.2538 22 10.5268 21.9183 9.82726 21.7633ZM7.88985 21.119C5.3115 19.955 3.31516 17.7297 2.4578 15H11.4226L7.88985 21.119ZM2.04938 13C2.01672 12.6711 2 12.3375 2 12C2 9.39284 2.99773 7.0187 4.6322 5.23859L9.11325 13H2.04938ZM6.15866 3.88251C7.80198 2.6979 9.81949 2 12 2C12.7462 2 13.4732 2.08172 14.1727 2.2367L9.6906 10L6.15866 3.88251ZM16.1101 2.88101C18.6885 4.04495 20.6848 6.27028 21.5422 9H12.5774L16.1101 2.88101ZM21.9506 11C21.9833 11.3289 22 11.6625 22 12C22 14.6072 21.0023 16.9813 19.3678 18.7614L14.8868 11H21.9506Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 6,
        title: "Graphic Design",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M5 4.99658V7.99658H19V4.99658H5ZM4 2.99658H20C20.5523 2.99658 21 3.4443 21 3.99658V8.99658C21 9.54887 20.5523 9.99658 20 9.99658H4C3.44772 9.99658 3 9.54887 3 8.99658V3.99658C3 3.4443 3.44772 2.99658 4 2.99658ZM6 11.9966H12C12.5523 11.9966 13 12.4443 13 12.9966V15.9966H14V21.9966H10V15.9966H11V13.9966H5C4.44772 13.9966 4 13.5489 4 12.9966V10.9966H6V11.9966ZM17.7322 13.7288L19.5 11.961L21.2678 13.7288C22.2441 14.7051 22.2441 16.288 21.2678 17.2643C20.2915 18.2407 18.7085 18.2407 17.7322 17.2643C16.7559 16.288 16.7559 14.7051 17.7322 13.7288Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 7,
        title: "Brand strategy",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M9 18H4V10H9V18ZM7 16V12H6V16H7ZM13 16V8H12V16H13ZM15 18H10V6H15V18ZM19 16V4H18V16H19ZM21 18H16V2H21V18ZM22 22H3V20H22V22Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
    {
        id: 8,
        title: "Mobile app Design & Development",
        iconUrl:"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='white' viewBox='0 0 24 24'%3E%3Cpath d='M6.75 2.5C9.09721 2.5 11 4.40279 11 6.75V11H6.75C4.40279 11 2.5 9.09721 2.5 6.75C2.5 4.40279 4.40279 2.5 6.75 2.5ZM9 9V6.75C9 5.50736 7.99264 4.5 6.75 4.5C5.50736 4.5 4.5 5.50736 4.5 6.75C4.5 7.99264 5.50736 9 6.75 9H9ZM6.75 13H11V17.25C11 19.5972 9.09721 21.5 6.75 21.5C4.40279 21.5 2.5 19.5972 2.5 17.25C2.5 14.9028 4.40279 13 6.75 13ZM6.75 15C5.50736 15 4.5 16.0074 4.5 17.25C4.5 18.4926 5.50736 19.5 6.75 19.5C7.99264 19.5 9 18.4926 9 17.25V15H6.75ZM17.25 2.5C19.5972 2.5 21.5 4.40279 21.5 6.75C21.5 9.09721 19.5972 11 17.25 11H13V6.75C13 4.40279 14.9028 2.5 17.25 2.5ZM17.25 9C18.4926 9 19.5 7.99264 19.5 6.75C19.5 5.50736 18.4926 4.5 17.25 4.5C16.0074 4.5 15 5.50736 15 6.75V9H17.25ZM13 13H17.25C19.5972 13 21.5 14.9028 21.5 17.25C21.5 19.5972 19.5972 21.5 17.25 21.5C14.9028 21.5 13 19.5972 13 17.25V13ZM15 15V17.25C15 18.4926 16.0074 19.5 17.25 19.5C18.4926 19.5 19.5 18.4926 19.5 17.25C19.5 16.0074 18.4926 15 17.25 15H15Z'%3E%3C/path%3E%3C/svg%3E",
        demo:"Request a Demo"
    },
];

export default function Services() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const cardVariants = {
    initial: { y: 50, opacity: 0 },
    animate: { y: 0, opacity: 1 },
  };
  return (
    <div className="bg-[#f0f0f0] text-black text-center text-2xl lg:px-32 2xl:px-96 px-4 lg:text-4xl font-bold py-10" id='services'>
        <h1 className='mb-16'>THE SERVICE WE PROVIDE FOR YOU</h1>
        <div>
            <ul ref={ref} className='grid md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-10'>
                {serviceData.map((service, index) => (
                  <motion.li
                      key={index}
                      variants={cardVariants}
                      initial="initial"
                      animate={isInView ? "animate" : "initial"}
                      transition={{ duration: 0.8, delay: index * 0.4 }}
                      className="lg:px-0 px-10 w-full"
                  >
                    <ServiceCard
                        key={service.id}
                        title={service.title}
                        iconUrl={service.iconUrl}
                        demo={service.demo}
                        
                    />
                  </motion.li>
                ))}
            </ul>
        </div>
        <div className="mt-20 px-8 leading-loose">
            <h2>WHY WE STARTED SIDE GIGS DESIGN LABS</h2>
              <p className='text-base font-normal lg:text-xl text-justify px-4 py-8'>We&apos;re a team of freelancers who are crazy about creativity and dedicated to delivering top-notch services. We don&apos;t just focus on being budget-friendly; we&apos;re all about giving you incredible value without emptying your wallet. Our secret ingredient? Efficiency. We get your projects done fast and flawlessly.</p>
              <p className='text-base font-normal lg:text-xl text-justify px-4'>Side Gigs Design Lab was established on October 4th, 2023, by a group of passionate digital enthusiasts. However, we&apos;re not your ordinary creative agency; we&apos;re a vibrant and professional community. Join us for straightforward solutions infused with a touch of innovation and creativity!.
              </p>
        </div>
        <div className='mt-20 grid md:grid-cols-2 xl:gap-44 px-10 leading-loose'>
            <div>
                <h3 className='lg:text-left text-md mb-4' >HOW WE WORK?</h3>
                <p className='text-lg lg:text-2xl text-left font-medium'>Our approach thrives on four guiding principles: Simplicity, Functionality, the Art of Side Gigs, and the Power of Partnership.</p>
                <ul className='py-4'>
                    <li className='flex gap-8 py-2'>
                        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className=''/>
                        <p className='text-left font-normal text-base'>
                            <span className='text-lg font-semibold'>Simplicity Rules <br/></span>
                            We Keep Things Clear And Elegant</p>
                    </li>
                    <li className='flex gap-8 py-2'>
                        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className=''/>
                        <p className='text-left font-normal text-base'>
                            <span className='text-lg font-semibold'>Crafting Form, Function, And Side Gigs <br/></span>
                            Stylish & Smart Designs, Side Gigs Ignite Innovationt</p>
                    </li>
                    <li className='flex gap-8 py-2'>
                        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className=''/>
                        <p className='text-left font-normal text-base'>
                            <span className='text-lg font-semibold'>Unleashing Creativity Beyond <br/></span>
                            Our Personal Design And Development Ventures Ignite Innovation</p>
                    </li>
                    <li className='flex gap-8 py-2'>
                        <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M16.1716 10.9999L10.8076 5.63589L12.2218 4.22168L20 11.9999L12.2218 19.778L10.8076 18.3638L16.1716 12.9999H4V10.9999H16.1716Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className=''/>
                        <p className='text-left font-normal text-base'>
                            <span className='text-lg font-semibold'>Collaborative Partnerships Drive Success <br/></span>
                            Together, We Solve & Create</p>
                    </li>
                </ul>

            </div>
            <div className='flex flex-col justify-center lg:py-px py-8'>
                <Image src="/images/thoughts.svg" width={400} height={300} alt="" className='lg:w-96'/>
                <Link href="/project" className='border rounded-md text-xl xl:mr-20 font-medium bg-[#CEF62E] mt-8 py-2 transition-all ease-in-out hover:bg-[#131313] hover:text-[#CEF62E]'>Get a Free Consultation</Link>
            </div>
        </div>
    </div>
  )
}
