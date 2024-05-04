// UpdateTicketForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';

const UpdateTicketForm = ({ onUpdateTicket }) => {
  return (
    <Formik
      initialValues={{ customerId: '', newDetails: '' }}
      onSubmit={(values) => {
        onUpdateTicket(values.customerId, values.newDetails);
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
  );
};

export default UpdateTicketForm;
