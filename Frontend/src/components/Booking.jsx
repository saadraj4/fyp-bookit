import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

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
    
    <Formik initialValues={initialValues} onSubmit={handleSubmit}>
      {({ values, setFieldValue }) => (
        <Form className="w-full mx-auto flex flex-wrap ">
          <div className="w-1/3 px-4 py-10 ">
            <div className="flex flex-wrap grid-cols-4 gap-2">
              {seats.map((seat) => (
                <label key={seat.id} className={`rounded-md py-3 w-20 flex items-center justify-center cursor-pointer ${((seat.id-2)%4==0)?'mr-10':'mr-0'} ${values.selectedSeats.includes(seat.id.toString()) ? 'bg-green-500' : seat.status === 1 ? 'bg-red-800 cursor-not-allowed' : 'bg-blue-700'}`}>
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
          <div className="w-1/3 px-4 py-10 flex flex-col justify-around   border-2 rounded-md my-2 ">
   <div>
<section>
Selected
</section>
   </div>
   <div>
   <Field
              type="text"
              name="name"
              placeholder="Full Name"
              id="name"
              className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <Field
              type="text"
              name="email"
              placeholder="Email"
              id="email"
              className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <Field
              type="text"
              name="CNIC"
              placeholder="CNIC without -"
              id="CNIC"
              className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <Field
              type="text"
              name="phoneNumber"
              placeholder="Mobile phoneNumber"
              id="phoneNumber"
              className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
            />
            <button type="submit" className="w-full bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
              Book Selected Seats
            </button>
   </div>
          
          </div>
          <div className="w-1/3 px-4 py-10">
            <div className='bg-gray-800 text-white px-4 py-2 rounded'>
              <div className="text-center text-yellow-400 mb-4">
                <label className='font-bold text-lg'>Booking Summary</label>
              </div>
              <p>Full Name: {values.name}</p>
              <p>Email: {values.email}</p>
              <p>CNIC: {values.CNIC}</p>
              <p>Contact: {values.phoneNumber}</p>
              <p>Total Seats Selected: {values.selectedSeats.length}</p>
              <p>Selected Seat Numbers: {values.selectedSeats.join(', ')}</p>
            </div>
          </div>
        </Form>
      )}
    </Formik>
    
  );
};

export default Booking;