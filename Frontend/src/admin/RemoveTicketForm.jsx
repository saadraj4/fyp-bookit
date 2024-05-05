// RemoveTicketForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';
import Sidebar from './Sidebar';

const RemoveTicketForm = ({ onRemoveTicket }) => {
  return (
    <>
    <div className='flex'>
    <Sidebar />
    <h1 className="text-2xl font-bold mb-4">Remove Ticket</h1>
    <br />
    <div className='flex-1'>
    <Formik
      initialValues={{ customerId: '' }}
      onSubmit={(values) => {
        onRemoveTicket(values.customerId);
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="customerId" type="text" placeholder="Customer ID" className="input input-bordered" />
          <button type="submit" disabled={isSubmitting} className="btn btn-error">
            Remove Ticket
          </button>
        </Form>
      )}
    </Formik>
    </div>
    </div>
    </>
  );
};

export default RemoveTicketForm;
