"use client"

import { Formik, Form, Field, ErrorMessage } from 'formik';
import Image from 'next/image';

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    alert('Form submitted successfully!');
    actions.resetForm();
  };

  return (
    <div className='grid md:grid-cols-2 md:px-80 bg-[#f0f0f0] justify-center gap-3 py-14 px-4'>
      <div className='text-[#131313]'>
        <h1 className='text-4xl font-semibold'>Let&apos;s get started -
          Tell us about your project
          and goals.</h1>
        <p className='text-xl py-8'>Share your details and we&apos;ll get in contact with you and discuss your project over an initial 30-minute discovery call.</p>
        <ul className='pb-8'>
          <li><h1>Select your Subject?</h1></li>
          <li><Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className="inline" /> Request quotation?</li>
          <li className='text-slate-400'><Image src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' fill='gray' viewBox='0 0 24 24'%3E%3Cpath d='M12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22ZM11.0026 16L18.0737 8.92893L16.6595 7.51472L11.0026 13.1716L8.17421 10.3431L6.75999 11.7574L11.0026 16Z'%3E%3C/path%3E%3C/svg%3E" width={24} height={24} alt="" className="inline" /> General enquiry?</li>
        </ul>
      </div>
      <div className='bg-[#CEF62E] px-14 py-10 rounded-2xl text-black'>

        <h1 className='font-semibold text-3xl'>Get in touch</h1>
        <p className='pt-4'>Our friendly team would love to hear from you</p>
        <Formik
          initialValues={{ firstName: '', lastName: '', email: '', phoneNumber: '' }}
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
            if (!values.phoneNumber) {
              errors.phoneNumber = 'Phone number is required';
            }

            return errors;
          }}
          onSubmit={handleSubmit}
        >
          {({ isSubmitting }) => (
            <Form className='mt-6 flex flex-col gap-6'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="firstName">First Name*</label>
                <Field type="text" name="firstName" placeholder="First Name" className="px-2 py-2 outline-none" />
                <ErrorMessage name="firstName" component="div" className='bg-red-300 p-1 text-sm' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="lastName">Last Name</label>
                <Field type="text" name="lastName" placeholder="Last Name" className="px-2 py-2 outline-none" />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email*</label>
                <Field type="text" name="email" placeholder="Email" className="px-2 py-2 outline-none" />
                <ErrorMessage name="email" component="div" className='bg-red-300 p-1 text-sm' />
              </div>

              <div className='flex flex-col gap-2'>
                <label htmlFor="phoneNumber">Phone Number*</label>
                <Field type="text" name="phoneNumber" placeholder="Phone Number" className="px-2 py-2 outline-none" />
                <ErrorMessage name="phoneNumber" component="div" className='bg-red-300 p-1 text-sm' />
              </div>

              <button type="submit" className='bg-black text-white w-full mt-2 py-4 uppercase font-semibold' disabled={isSubmitting} >Request a callback</button>
            </Form>
          )}
        </Formik>
      </div>

    </div>
  );
};
