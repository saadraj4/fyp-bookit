import React from 'react';
import { useFormik } from 'formik';
import img from '../assets/img/speed-test.png';
import axios from 'axios';

export default function ContactUs() {
    const formik = useFormik({
        initialValues: { name: "", email: "", message: "" },
        onSubmit: (values,{resetForm}) => {
            
            // make request to server and print the response and catch if any error using axios
            axios.post("http://localhost:80/contact/addcontactus",values)
            .then(
                (response) => {
                    alert("Your request has been created successfully");
                    resetForm()
                }
            ).catch(
                (error) => {
                    alert(error);
                }
            )

        },
    });

    return (
        <div className='p-20 background-image-contact'>
            <div className='data-here'>
                <div className='grid grid-cols-2'>
                    <form className='form-data my-10 font-semibold bg-slate-100 bg-opacity-25 p-4 rounded-md text-black col-span-1' onSubmit={formik.handleSubmit}>
                        <h1 className='text-5xl font-bold text-center '>Contact Us</h1>
                        <div className='form-group'>
                            <label>Your Name</label>
                            <br />
                            <input
                                className='border border-slate-300 rounded outline-none px-5 py-2 w-full my-1'
                                name="name"
                                value={formik.values.name}
                                onChange={formik.handleChange}
                                placeholder='Your Name'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Your Email</label>
                            <br />
                            <input
                                className='border border-slate-300 rounded outline-none px-5 py-2 w-full my-1'
                                name="email"
                                value={formik.values.email}
                                onChange={formik.handleChange}
                                placeholder='Your Email'
                            />
                        </div>
                        <div className='form-group'>
                            <label>Message</label>
                            <br />
                            <textarea
                                className='border border-slate-300 rounded outline-none px-5 py-2 w-full my-1'
                                rows={5}
                                name="message"
                                value={formik.values.message}
                                onChange={formik.handleChange}
                                placeholder='Write your message...'
                            ></textarea>
                        </div>
                        <div>
                            <p>
                                If you are facing any issue regarding to bus or routes or anything feel free to ask here.
                            </p>
                            <input
                                type='submit'
                                className='px-14 py-2 border shadow border-slate-300 bg-slate-800 text-white rounded my-5 cursor-pointer hover:bg-blue-300 font-semibold hover:text-slate-800 duration-300'
                            />
                        </div>
                    </form>
                    <div className='col-span-1 '>
                        <img className='w-full px-20' src={img} alt="Speed Test" />
                    </div>
                </div>
            </div>
        </div>
    );
}
