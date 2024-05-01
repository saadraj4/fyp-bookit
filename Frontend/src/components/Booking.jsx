import React, { useState } from 'react';
import { Formik, Form, Field } from 'formik';

// Dummy data for seat status: 0 for available, 1 for booked
let seats = Array.from({ length: 40 }, (_, i) => ({ id: i + 1, status: 0 }));

const Booking = (props) => {
  // Initial values for Formik
  const initialValues = {
    selectedSeats: [],
    fullname: "",
    email: "",
    cnic: "",
    phone: "",
  };

  // State to track form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = (values, {resetForm}) => {
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
    resetForm()
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} >
      {({ values, setFieldValue }) => (
        <Form>
          <div className="flex flex-wrap gap-2 p-4">
            {seats.map((seat) => (
              <label key={seat.id} className={`w-12 h-12 rounded-full flex items-center justify-center cursor-pointer ${values.selectedSeats.includes(seat.id.toString()) ? 'bg-green-500' : seat.status === 1 ? 'bg-red-500' : 'bg-blue-200'}`}>
                <Field
                  type="checkbox"
                  name="selectedSeats"
                  value={seat.id.toString()}
                  className="hidden"
                  disabled={seat.status == 1}
                  onClick={() => {
                    if (!formSubmitted && seat.status !== 1) { // Check if the form is not submitted and seat is not reserved
                      const updatedSeats = values.selectedSeats.includes(seat.id.toString())
                        ? values.selectedSeats.filter(id => id !== seat.id.toString())
                        : [...values.selectedSeats, seat.id.toString()];
                      setFieldValue('selectedSeats', updatedSeats);
                    }
                  }}
                />
                {seat.id}
              </label>
            ))}
          </div>
          {/*Field for Fullname*/}
          <Field
            type="text"
            name="fullname"
            placeholder="Full Name"
            id="fullname"
          />
          {/*Field for email*/}
          <Field
            type="text"
            name="email"
            placeholder="Email"
            id="email"
          />
          {/*Field for CNIC*/}
          <Field
            type="text"
            name="cnic"
            placeholder="CNIC without -"
            id="cnic"
          />
          {/*Field for Mobile Number*/}
          <Field
            type="text"
            name="phone"
            placeholder="Mobile Phone"
            id="phone"
          />
          <button type="submit" className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Book Selected Seats
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default Booking;
