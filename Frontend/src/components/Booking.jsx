import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';
import { Square } from 'lucide-react';

// Dummy data for seat status: 0 for available, 1 for booked
let seats = Array.from({ length: 40 }, (_, i) => ({ id: i + 1, status: 0 }));

const Booking = (props) => {
  // Initial values for Formik
  const initialValues = {
    selectedSeats: [],
    name: "",
    email: "",
    CNIC: "",
    phoneNumber: "",
  };

  // State to track form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (values, { resetForm }) => {
    // Update seat statuses based on selected seats after form submission
    seats = seats.map(seat => ({
      ...seat,
      status: values.selectedSeats.includes(seat.id.toString()) ? 1 : seat.status
    }));
    // Set form submission flag
    setFormSubmitted(true);

    // Print selected seat numbers and IDs
    console.log("Form Submitted", values);
    console.log("Selected seats", values.selectedSeats);
    resetForm();
  };

  return (
    <>
<div className={`background-image `} >
    <Formik    initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="w-full mx-auto flex flex-wrap ">
          <div className="w-1/3 px-4 py-10 ">
            <div className="flex flex-wrap grid-cols-4 gap-2">
              {seats.map((seat) => (
                <label key={seat.id} className={`rounded-md py-3 w-20 flex items-center justify-center cursor-pointer ${((seat.id - 2) % 4 == 0) ? 'mr-10' : 'mr-0'} ${values.selectedSeats.includes(seat.id.toString()) ? 'bg-green-600' : seat.status === 1 ? 'bg-red-600 cursor-not-allowed' : 'bg-blue-600'}`}>
                  <Field
                    type="checkbox"
                    name="selectedSeats"
                    value={seat.id.toString()}
                    className="hidden"
                    disabled={seat.status === 1}
                    onClick={() => {
                      if (!formSubmitted && seat.status !== 1) {
                        const updatedSeats = values.selectedSeats.includes(seat.id.toString())
                          ? values.selectedSeats.filter(id => id !== seat.id.toString())
                          : [...values.selectedSeats, seat.id.toString()];
                        setFieldValue('selectedSeats', updatedSeats);
                      }
                    }}
                  />
                  <span className="text-white">{seat.id}</span>
                </label>
              ))}
            </div>
          </div>

          {/**********************  Middle ************ */}
          <div className="w-1/3 px-4 pb-10 flex flex-col justify-around  rounded-md my-2 h-fit ">
            <div className='flex justify-between my-10'>
              <section className='flex gap-3 '><Square  className='bg-green-600 rounded-md' stroke='none'/>Selected</section>
              <section className='flex gap-3 '><Square  className='bg-red-600 rounded-md' stroke='none'/>Booked</section>
              <section className='flex gap-3 '><Square  className='bg-blue-600 rounded-md' stroke='none'/>Available</section>
  
            </div>
            <div className=' bg-slate-500 bg-opacity-40 p-3 rounded-md'>
              <label className='text-white ml-1  text-lg'>
                Name
              </label>
              <Field
                type="text"
                name="name"
                placeholder="Full Name"
                id="name"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className='text-white ml-1  text-lg'>
                Email
              </label>
              <Field
                type="text"
                name="email"
                placeholder="Email"
                id="email"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className='text-white ml-1  text-lg'>
                CNIC
              </label>
              <Field
                type="text"
                name="CNIC"
                placeholder="CNIC without -"
                id="CNIC"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <label className='text-white ml-1  text-lg'>
                Contact
              </label>
              <Field
                type="text"
                name="phoneNumber"
                placeholder="Mobile phone Number"
                id="phoneNumber"
                className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
              />
              <button type="submit" className="w-full mt-10 bg-blue-600 hover:bg-blue-800 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                Book Selected Seats
              </button>
            </div>

          </div>

          {/**************** right *********************/}
          <div className="w-1/3 px-4 py-10 flex  items-center">
            <div className='bg-gray-800 flex-1 bg-opacity-50 text-white  py-4 rounded'>
              <div className="text-center text-yellow-400 mb-4">
                <label className=' text-lg'>Booking Summary</label>
              </div>
              <p className='px-4'>Full Name </p>
              <p className='bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold'>{(values.name)?values.name:"--"}</p>
              <p className='px-4'>Email</p>
              <p className='bg-blue-300  px-4 pt-2 bg-opacity-50 font-semibold'>{(values.email?values.email:"--")}</p>
              <p className='px-4'>CNIC</p>
              <p className='bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold'>{(values.CNIC)?values.CNIC:"--"}</p>
              <p className='px-4'>Contact</p>
              <p className='bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold'>{(values.phoneNumber)?values.phoneNumber:'--'}</p>
              <p className='px-4'>Total Seats Selected</p>
              <p className='bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold'>{(values.selectedSeats.length)?values.selectedSeats.length:"--"}</p>
              <p className='px-4'>Selected Seat Numbers </p>
              <p className='bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold'>{(values.selectedSeats.length)?values.selectedSeats.join(', '):"--"}</p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    </div>

    </>
  );
};

export default Booking;