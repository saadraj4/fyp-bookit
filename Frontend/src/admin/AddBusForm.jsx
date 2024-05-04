// AddBusForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';

const AddBusForm = ({ onAddBus }) => {
  return (
    <Formik
      initialValues={{ origin: '', destination: '' }}
      onSubmit={(values, { resetForm }) => {
        onAddBus({ ...values, seats: 40 });
        resetForm();
      }}
    >
      {({ isSubmitting }) => (
        <Form>
          <Field name="origin" type="text" placeholder="Origin" className="input input-bordered" />
          <Field name="destination" type="text" placeholder="Destination" className="input input-bordered" />
          <button type="submit" disabled={isSubmitting} className="btn btn-primary">
            Add Bus
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddBusForm;
