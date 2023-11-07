"use client"

import { Formik, Form, Field, ErrorMessage } from 'formik';

export default function ContactForm() {
  const handleSubmit = (values, actions) => {
    alert('Form submitted successfully!');
    actions.resetForm();
  };

  return (
    <div className='flex flex-col items-center py-14 px-4'>
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
              <ErrorMessage name="phoneNumber" component="div" className='bg-red-300 p-1 text-sm'/>
            </div>

            <button type="submit" className='bg-black text-white w-full mt-2 py-4 uppercase font-semibold' disabled={isSubmitting} >Request a callback</button>
          </Form>
        )}
      </Formik>
      </div>

    </div>
  );
};
