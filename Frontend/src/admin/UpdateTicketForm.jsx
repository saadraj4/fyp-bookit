// UpdateTicketForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Sidebar from './Sidebar';

const UpdateTicketForm = ({ onUpdateTicket }) => {
  return (
    <>
    <div className='flex'>
    
      <Sidebar />
      
      <div className='flex-1'>
      <Formik
        initialValues={{ customerId: '', newDetails: '' }}
        onSubmit={(values) => {
          onUpdateTicket(values.customerId, values.newDetails);
          console.log("values changes",values);
        }}
      >
        {({ isSubmitting }) => (
          <Form>
            <Field name="customerId" type="text" placeholder="Customer ID" className="input input-bordered" />
            <Field name="newDetails" type="text" placeholder="New Ticket Details" className="input input-bordered" />
            <button type="submit" disabled={isSubmitting} className="btn btn-primary">
              Update Ticket
            </button>
          </Form>
        )}
      </Formik>
      </div>
      </div>
    </>
  );
};

export default UpdateTicketForm;
