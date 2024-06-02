// addBusForm.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import Sidebar from './Sidebar';
import axios from 'axios';

const AddBusForm = () => {
  const initialValues = {
    origin: '',
    destination: '',
    date: '',
    time:'',
    type:'',
    price:0,
  };

  const postUrl = 'http://localhost:80/bus';
  

  const handleSubmit = (values,{resetForm}) => {
    console.log(values);
    axios.post(postUrl, values)
  .then(response => {
    console.log('Post request successful:', response.data);
    // Handle response data here
  })
  .catch(error => {
    console.error('Error while making POST request:', error);
    // Handle error here
  });
    resetForm();
  }
  // Mock data for origin and destination options
  const originOptions = ['Lahore', 'Karachi', 'Islamabad', 'Peshawer',"Quetta"];
  const destinationOptions = ['Lahore', 'Karachi', 'Islamabad', 'Peshawer',"Quetta"];
  const types = ["STANDARD","EXECUTIVE"]


  return (
    <div className='flex'>
    <Sidebar/>
    <div className="max-w-lg mx-auto flex-1 my-10">
      <h1 className="text-2xl font-bold mb-4">Add Bus</h1>
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

          <div>
            <label htmlFor="type" className="block text-sm font-medium text-gray-700">
              type
            </label>
            <Field
            as="select"
              id="type"
              name="type"
              className="mt-1 block w-full p-2 border rounded-md"
            >
            <option value="">Select type</option>
                {types.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
            </Field>
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-gray-700">
              Price
            </label>
            <Field
              type="Number"
              id="price"
              name="price"
              className="mt-1 block w-full p-2 border rounded-md"
            />
          </div>



          


            <button
              type="submit"
              className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Add Bus
            </button>
          </Form>
        )}
      </Formik> 
    </div>
  </div>);
};

export default AddBusForm;
