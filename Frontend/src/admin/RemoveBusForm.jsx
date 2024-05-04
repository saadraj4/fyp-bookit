// RemoveBusForm.js
import React from 'react';
import { Formik, Form, Field } from 'formik';

const RemoveBusForm = ({ buses, onRemoveBus }) => {
  return (
    <Formik
      initialValues={{ selectedBus: '' }}
      onSubmit={(values) => {
        onRemoveBus(values.selectedBus);
      }}
    >
      {({ setFieldValue }) => (
        <Form>
          <Field as="select" name="selectedBus" onChange={(e) => setFieldValue("selectedBus", e.target.value)} className="select select-bordered">
            {buses.map((bus, index) => (
              <option key={index} value={bus.id}>{bus.origin} - {bus.destination}</option>
            ))}
          </Field>
          <button type="submit" className="btn btn-error">Remove Bus</button>
        </Form>
      )}
    </Formik>
  );
};

export default RemoveBusForm;
