import React, { useState } from 'react';
import { Formik, Field, Form } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Luggage, Tv, Cable, Utensils, Wifi, Armchair } from 'lucide-react';

import image from "../assets/logo/logo.png"


const initialValues = {
  startLocation: '',
  endLocation: '',
  date: '',
};

const startLocations = [
  { label: 'Lahore', value: 'Lahore' },
  { label: 'Karachi', value: 'Karachi' },
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'Peshawar', value: 'Peshawar' },
  { label: 'Quetta', value: 'Quetta' },
];

const endLocations = [
  { label: 'Lahore', value: 'Lahore' },
  { label: 'Karachi', value: 'Karachi' },
  { label: 'Islamabad', value: 'Islamabad' },
  { label: 'Peshawar', value: 'Peshawar' },
  { label: 'Quetta', value: 'Quetta' },
];

export default function BookSystem() {
  const [busOptions, setBusOptions] = useState([]);
  const navigate = useNavigate();

  const onSubmit = async (values, { setSubmitting, resetForm }) => {
    const fetchedBuses = await fetchBusData(values.startLocation, values.endLocation, values.date);
    setBusOptions(fetchedBuses);
    setSubmitting(false);
    console.log(values);
    resetForm()
  };

  return (
    <div>
      <Formik initialValues={initialValues} onSubmit={onSubmit}>
        {({ isSubmitting }) => (
          <div className='book-system bg-slate-300 relative w-full px-20 py-8'>
            <p className='text-2xl py-3 pb-5'>Search for a route</p>
            <Form className='form sm:flex items-center justify-evenly'>
              <div className='from sm:w-[25%] py-2'>
                <Field as='select' name='startLocation' className='w-full input border px-3 py-2 rounded'>
                  <option value="">Select Origin</option>
                  {startLocations.map((startLocation, index) => (
                    <option key={index} value={startLocation.value}>{startLocation.label}</option>
                  ))}
                </Field>
              </div>
              <div className='from sm:w-[25%] py-2'>
                <Field as='select' name='endLocation' className='w-full input border px-3 py-2 rounded'>
                  <option value="">Select Destination</option>
                  {endLocations.map((endLocation, index) => (
                    <option key={index} value={endLocation.value}>{endLocation.label}</option>
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
          <div key={index} className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-start gap-10">


            <div className="flex flex-col justify-center  w-32  items-center ">
              <img src={image} alt="" srcset="" />

              <div className="text-lg  italic">{bus.time}</div>

            </div>


            <div className="flex flex-col flex-grow justify-center   items-start ">
              <div className="text-lg font-semibold">{bus.name}</div>
              <div className='flex gap-5 my-4'>
                <Luggage stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                <Tv stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                <Cable stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                {(bus.name == "Executive Class") ?
                  <>
                    <Utensils stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                    <Wifi stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                    <Armchair stroke='green' fill='yellow' className='hover:bg-blue-700 rounded-md cursor-pointer' />
                  </> : <></>}
              </div>
            </div>



            <div className="text-lg font-bold mr-20">{bus.time}</div>

            <section className='mr-20'>
              <div className="text-lg font-bold">{bus.price}</div>
              <p className='-mt-2 italic'>Per Person</p>
            </section>

            <button onClick={() => navigate(`/book/${bus.id}`)} className="bg-blue-600 hover:bg-blue-800 text-white font-bold py-2 px-4 rounded transition-colors">
              Book Now
            </button>

          </div>
        ))}
      </div>
    </div>
  );
}

async function fetchBusData(startLocation, endLocation, date) {
  // Simulate an API call

  

  return new Promise(resolve => setTimeout(() => resolve([
    { id: "1", name: 'Executive Class', time: '09:00', price: 'Rs 6200', features: ['30 KG per Seat', 'Movies & Entertainment', 'Mobile Charging', 'Meal', 'Free Internet', 'Extra Legroom'] },
    { id: "2", name: 'Standard Class', time: '12:00', price: 'Rs 4500', features: ['30 KG per Seat', 'Movies & Entertainment', 'Mobile Charging'] },
  ]), 1000));
}
