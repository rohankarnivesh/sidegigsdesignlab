"use client";
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from "framer-motion";

export default function Hero(){

    return (
        <section className="max-h-screen bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-700 w-full">
            <motion.div
                 initial={{ opacity: 0, scale: 0.5 }}
                 animate={{ opacity: 1, scale: 1 }}
                 transition={{
                   duration: 1,
                   ease: [0, 0.71, 0.5, 1.01],
                   scale: {
                     type: "spring",
                     damping: 5,
                     stiffness: 100,
                     restDelta: 0.001
                   }
                 }}
                className="texh text-center text-5xl lg:text-6xl 2xl:text-8xl md:text-6xl p-24 lg:pb-10">
                <h2 className="text-center font-semibold righteous-heading leading-snug">
                    Every Great
                    <Image src="/images/smile.gif" alt="smile" width={50} height={50} className="inline lg:w-18 2xl:w-24" /><br/>
                    
                    Design Begins<br className='hidden md:block'/>
                    <br className="sm:hidden" />
                    with a{' '}
                    <span
                          
                          style={{ whiteSpace: 'nowrap' }}>
                        St
                            <Image
                         src="/eye.gif" alt="o" width={50} height={50} className="inline lg:w-18 2xl:w-24" /> 
                        <Image src="/eye.gif" alt="o" width={50} height={50} className="inline lg:w-18 2xl:w-24" />
                        ry 
                    </span>
                </h2>
            </motion.div>
            <div className="text-center mt-6">
            <Link href="./#who" className='bg-[#CEF62E] text-black p-5 lg:text-lg font-semibold'>Explore us <Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M11.9997 13.1714L16.9495 8.22168L18.3637 9.63589L11.9997 15.9999L5.63574 9.63589L7.04996 8.22168L11.9997 13.1714Z'%3E%3C/path%3E%3C/svg%3E" width={24}height={24} alt="" className="inline"/> </Link>
            </div>  
        </section>
      
    )
}
