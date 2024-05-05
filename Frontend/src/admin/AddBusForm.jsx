// addBusForm.js

import React from 'react';
import { Formik, Form, Field } from 'formik';
import Sidebar from './Sidebar';

const AddBusForm = () => {
  const initialValues = {
    startLocation: '',
    endLocation: '',
    date: '',
    time:'',
    seats:40,
  };

  const handleSubmit = (values,{resetForm}) => {
    console.log(values);
    resetForm();
  }
  // Mock data for startLocation and endLocation options
  const startLocationOptions = ['Lahore', 'Karachi', 'Islamabad', 'Peshawer',"Quetta"];
  const endLocationOptions = ['Lahore', 'Karachi', 'Islamabad', 'Peshawer',"Quetta"];


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
              <label htmlFor="startLocation" className="block text-sm font-medium text-gray-700">
                origin
              </label>
              <Field as="select" name="startLocation" className="mt-1 block w-full p-2 border rounded-md">
                <option value="">Select origin</option>
                {startLocationOptions.map((option) => (
                  <option key={option} value={option}>
                    {option}
                  </option>
                ))}
              </Field>
            </div>
            <div>
              <label htmlFor="endLocation" className="block text-sm font-medium text-gray-700">
                destination
              </label>
              <Field
                as="select"
                name="endLocation"
                className="mt-1 block w-full p-2 border rounded-md"
              >
                <option value="">Select destination</option>
                {endLocationOptions.map((option) => (
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
              Add Bus
            </button>
          </Form>
        )}
      </Formik> 
    </div>
  </div>);
};

export default AddBusForm;
