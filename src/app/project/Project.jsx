"use client"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import React from 'react'
import Image from 'next/image'

export default function Project() {
    const handleSubmit = (values, actions) => {
        alert('Form submitted successfully!');
        actions.resetForm();
    };
    return (
        <div className='pt-10 px-4 md:px-24 2xl:px-72 bg-[#f0f0f0] text-[#131313]'>
            <div className='grid md:grid-cols-2 px-4 justify-center py-10'>
                <div className='px-4 flex flex-col justify-center'>
                    <Image src="/images/smile.gif" width={100} height={100} alt='' className='' />
                    <h1 className='text-3xl font-semibold py-4'>Let&apos;s Talk</h1>
                    <p className='md:text-xl pb-4'>Have some big idea or brand to develop and need help? Then reach out we&apos;d love to hear about your project and provide help.</p>
                    <p className='md:text-xl'>Share your details and we&apos;ll get in contact with you and discuss your project over an initial 30-minute discovery call.</p>
                </div>
                <div className='px-4 md:bg-[#131313] md:px-14 py-10 rounded-2xl mt-10 md:text-[#f0f0f0]'>

                    <h1 className='font-semibold text-xl lg:text-3xl'>Start A Project</h1>
                    <p className='pt-4'>Our friendly Team Love to hear your Ideas</p>
                    <Formik
                        initialValues={{ firstName: '', email: '', service: '' }}
                        validate={values => {
                            const errors = {};

                            if (!values.firstName) {
                                errors.firstName = 'First Name is required';
                            }
                            if (!values.email) {
                                errors.email = 'Email is required';
                            } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                errors.email = 'Please enter a valid email ID';
                            }
                            if (!values.service) {
                                errors.service = 'Domain is required';
                            }

                            return errors;
                        }}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <Form className='mt-6 flex text-md flex-col gap-6'>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="firstName">Name*</label>
                                    <Field type="text" name="firstName" placeholder="First Name" className="px-2 py-2 outline-none" />
                                    <ErrorMessage name="firstName" component="div" className='bg-red-300 p-1 text-sm' />
                                </div>

                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="email">Email*</label>
                                    <Field type="text" name="email" placeholder="Email" className="px-2 py-2 outline-none" />
                                    <ErrorMessage name="email" component="div" className='bg-red-300 p-1 text-sm' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="service">What service are you interested in *</label>
                                    <select type="text" name="service" placeholder=" " className="px-2 py-2 outline-none" >
                                        <option value="" disabled selected hidden>Select Project Type</option>
                                        <option>Website design & Development</option>
                                        <option>UI/UX</option>
                                        <option>Search Engine Optimization</option>
                                        <option>Social Media Marketing</option>
                                        <option>Commercial Photography & Videography</option>
                                        <option>Graphic Design</option>
                                        <option>Brand strategy</option>
                                        <option>Mobile app Design & Development</option>
                                    </select>
                                    <ErrorMessage name="service" component="div" className='bg-red-300 p-1 text-sm' />
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="budget">Budget</label>
                                    <Field type="text" name="budget" placeholder="Type you Budget" className="px-2 py-2 outline-none" />      
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label htmlFor="message">Message</label>
                                    <Field type="text" name="service" placeholder="Any Message for us" className="px-2 py-2 outline-none" />
                                </div>

                                <button type="submit" className='bg-[#CEF62E] text-black w-full mt-2 py-4 uppercase font-semibold' disabled={isSubmitting} >Submit</button>
                            </Form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    )
}
