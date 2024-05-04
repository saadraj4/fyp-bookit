// RemoveTicketForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';

const RemoveTicketForm = ({ onRemoveTicket }) => {
  return (
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
  );
};

export default RemoveTicketForm;
