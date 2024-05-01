import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

const initialValues = {
  origin: '',
  destination: '',
  date: '',
};

const origins = [
  { label: 'Lahore', value: 'Lahore' },
  { label: 'Karachi', value: 'Karachi' },
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'Peshawar', value: 'Peshawar' },
  { label: 'Quetta', value: 'Quetta' },
];

const destinations = [
  { label: 'Lahore', value: 'Lahore' },
  { label: 'Karachi', value: 'Karachi' },
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'Peshawar', value: 'Peshawar' },
  { label: 'Quetta', value: 'Quetta' },
];

export default function BookSystem() {
  const [busOptions, setBusOptions] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting }) => {
    const fetchedBuses = await fetchBusData(values.origin, values.destination, values.date);
    setBusOptions(fetchedBuses);
    setSubmitting(false);
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <div className='book-system bg-slate-300 relative w-full px-20 py-8'>
            <p className='text-2xl py-3 pb-5'>Search for a route</p>
            <Form className='form sm:flex items-center justify-evenly'>
              <div className='from sm:w-[25%] py-2'>
                <Field as='select' name='origin' className='w-full input border px-3 py-2 rounded'>
                  <option value="">Select origin</option>
                  {origins.map((origin, index) => (
                    <option key={index} value={origin.value}>{origin.label}</option>
                  ))}
                </Field>
              </div>
              <div className='from sm:w-[25%] py-2'>
                <Field as='select' name='destination' className='w-full input border px-3 py-2 rounded'>
                  <option value="">Select destination</option>
                  {destinations.map((destination, index) => (
                    <option key={index} value={destination.value}>{destination.label}</option>
                  ))}
                </Field>
              </div>
              <div className='from sm:w-[25%] py-2'>
                <Field type='date' name='date' className='w-full input border px-3 py-2 rounded' />
              </div>
              <div className='from sm:w-[15%] py-2'>
                <button type='submit' disabled={isSubmitting} className='w-full input py-2 bg-slate-700 text-white rounded'>
                  Search
                </button>
              </div>
            </Form>
          </div>
        )}
      </Formik>
      <div className="space-y-4 mt-8">
        {busOptions.map((bus, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center justify-center h-12 w-12 rounded-full bg-green-500 text-white">
                <span>KT</span>
              </div>
              <div className="text-lg font-semibold">{bus.name}</div>
            </div>
            <div className="flex items-center space-x-10">
              <div className="flex items-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="h-6 w-6 text-green-500">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <div>{bus.features ? bus.features.join(', ') : 'No features available'}</div>
              </div>
              <div className="text-lg">{bus.time}</div>
              <div className="text-lg font-bold">{bus.price}</div>
            </div>
            <button onClick={() => navigate(`/book/${bus.id}`)} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors">
              Select
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

async function fetchBusData(origin, destination, date) {
  // Simulate an API call
  return new Promise(resolve => setTimeout(() => resolve([
    {id: "1", name: 'Executive Class', time: '09:00', price: 'Rs 6200', features: ['30 KG per Seat', 'Movies & Entertainment', 'Mobile Charging', 'Meal', 'Free Internet', 'Extra Legroom'] },
    {id: "2", name: 'Standard Class', time: '12:00', price: 'Rs 4500', features: ['30 KG per Seat', 'Movies & Entertainment', 'Mobile Charging'] },
  ]), 1000));
}
