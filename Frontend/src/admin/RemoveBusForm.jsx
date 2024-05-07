// removeBusForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Sidebar from './Sidebar';
import axios from 'axios';

const RemoveBusForm = () => {
  const initialValues = {
    origin: '',
    destination: '',
    date: '',
    time:'',
    seats:40,
  };




  const handleSubmit = (values,{resetForm}) => {
    const params = {
      destination: values.destination,
      origin: values.origin,
      time: values.time,
      date: values.date
    }

    axios.
    delete(`http://localhost:80/bus/buses`,{params})
    .then(
      response => {
        console.log('Delete request successful:', response.data);
      }
    ).catch(
      error => {
        console.error('Error while making DELETE request:', error);
      }
    )
    console.log(values);
    resetForm();
  }
  // Mock data for origin and destination options
  const originOptions = ['Lahore', 'Karachi', 'Islamabad', 'Peshawer',"Quetta"];
  const destinationOptions = ['Lahore', 'Karachi', 'Islamabad', 'Peshawer',"Quetta"];


  return (
    <div className='flex'>
    <Sidebar/>
    <div className="max-w-lg mx-auto flex-1 my-10">
      <h1 className="text-2xl font-bold mb-4">Remove Bus</h1>
      <Formik
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        {({ handleSubmit }) => (
          <Form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="origin" className="block text-sm font-medium text-gray-700">
                origin
              </label>
              <Field as="select" name="origin" className="mt-1 block w-full p-2 border rounded-md">
                <option value="">Select origin</option>
                {originOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
            </div>
            <div>
              <label htmlFor="destination" className="block text-sm font-medium text-gray-700">
                destination
              </label>
              <Field
                as="select"
                name="destination"
                className="mt-1 block w-full p-2 border rounded-md"
              >
                <option value="">Select destination</option>
                {destinationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
            </div>
            <div>
            <label htmlFor="date" className="block text-sm font-medium text-gray-700">
              Date
            </label>
            <Field
              type="date"
              id="date"
              name="date"
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="time" className="block text-sm font-medium text-gray-700">
              Time
            </label>
            <Field
              type="time"
              id="time"
              name="time"
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>
            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Remove Bus
            </button>
          </Form>
        )}
      </Formik> 
    </div>
  </div>);
};

export default RemoveBusForm;
