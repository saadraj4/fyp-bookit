import React, { Component, useState } from 'react'
import img from '../assets/img/speed-test.png'

export default function ContactUs(){
    const [formData, SetFormData] = useState({name:"",email:"",message:""});

    const handleChange = (event) =>{
        const {name, value} = event.target;
        SetFormData((prevFormData) => ({...prevFormData, [name]:value})); 
      };

    const handleSubmit = (event) =>{
        event.preventDefault();
        alert(`We are sending your message thanks for your patience ... (Your backend logic will be applied here)`);
        alert(`Name ${formData.name}, Email ${formData.email}, Message ${formData.message}`);
    };

    return (
      <div className='m-20'>
        <h1 className='text-5xl font-bold text-slate-700'>Contact Us</h1>
        <div className='data-here'>
        <div className='grid grid-cols-2'>
            <form className='form-data my-10 col-span-1' onSubmit={handleSubmit}>
            <div className='form-group'>
                <label>Your Name</label>
                <br />
                <input className='border border-slate-300 rounded outline-none px-5 py-2 w-full my-1' name="name" value={formData.name} onChange={handleChange} placeholder='Your Name' />
            </div>
            <div className='form-group'>
                <label>Your Email</label>
                <br />
                <input className='border border-slate-300 rounded outline-none px-5 py-2 w-full my-1' name="email" value={formData.email} onChange={handleChange} placeholder='Your Email' />
            </div>
            <div className='form-group'>
                <label>Message</label>
                <br />
                <textarea className='border border-slate-300 rounded outline-none px-5 py-2 w-full my-1' rows={5} name="message" value={formData.message} onChange={handleChange} placeholder='Write your message...'></textarea>
            </div>
            <div>
            <p>
            If you are facing any issue regarding to bus or routes or anything feel free to ask here.
            </p>
            <input type='submit' className='px-14 py-2 border shadow border-slate-300 bg-slate-800 text-white rounded my-5 cursor-pointer hover:bg-white hover:text-slate-800 duration-300' />
            </div>
            </form>
            <div className='col-span-1 '>
                <img className='w-full px-20' src={img} />
            </div>
        </div>
        </div>
      </div>
    )
}
