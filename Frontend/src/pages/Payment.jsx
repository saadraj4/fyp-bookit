import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const cards = [
    { cardholderName: "Saad Raja", cardNumber: "5096 4658 9012 4876", expiry: "01/30", cvv: "090", status: "valid" },
    { cardholderName: "Ali Raja", cardNumber: "4786 7800 0458 1149", expiry: "12/27", cvv: "234", status: "insufficient" },
    { cardholderName: "Ahmed Raja", cardNumber: "4786 5678 7858 4658", expiry: "06/23", cvv: "345", status: "invalid" },
  ];
  const [foundCard, setFoundCard] = useState({});
  const [status, setStatus] = useState('');

  const validity = (values) => {
    if (values.cardNumber.replace(/\s/g, "").length === 16 && values.expiry.length === 5 && values.cvv.length === 3) {
      return true;
    }
    return false;
  };

  const validCard = (values) => {
    if (validity(values)) {
      const card = cards.find((card) => card.cardNumber === values.cardNumber && card.expiry === values.expiry && card.cvv === values.cvv);
      if (card) {
        setFoundCard(card);
        setStatus(card.status);
        return card.status;
      }
    }
    return "invalid";
  };

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-md w-96">
        <h2 className="text-2xl font-semibold mb-4">Enter Card Details</h2>
        <Formik
          initialValues={{
            cardholderName: "",
            cardNumber: "",
            expiry: "",
            cvv: "",
          }}
          onSubmit={(values, actions) => {
            const cardStatus = validCard(values);
            if (cardStatus === "valid") {
              alert("Payment successful!");
              navigate("/done");
            } else if (cardStatus === "insufficient") {
              alert("Low payment!");
            } else {
              alert("Invalid card details!");
            }
            actions.setSubmitting(false);
          }}
        >
          {({ handleChange, values }) => (
            <Form>
              <div className="mb-4">
                <label
                  htmlFor="cardholderName"
                  className="block text-gray-700 font-semibold"
                >
                  Name
                </label>
                <Field
                  type="text"
                  id="cardholderName"
                  name="cardholderName"
                  className="form-input mt-1 block w-full rounded-md border-gray-300"
                  placeholder="Card Holder Name"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="cardNumber" className="block text-gray-700 font-semibold">
                  Card Number
                </label>
                <Field
                  type="text"
                  id="cardNumber"
                  name="cardNumber"
                  value={values.cardNumber}
                  onChange={(e) => {
                    const { value } = e.target;
                    const formattedValue = value
                      .replace(/\s/g, "")
                      .replace(/(\d{4})/g, "$1 ")
                      .trim()
                      .substring(0, 19);
                    handleChange({
                      target: { name: "cardNumber", value: formattedValue },
                    });
                  }}
                  className="form-input mt-1 block w-full rounded-md border-gray-300"
                  placeholder="1234 5678 9012 3456"
                />
              </div>
              <div className="grid grid-cols-2 gap-4">
                <div className="mb-4">
                  <label htmlFor="expiry" className="block text-gray-700 font-semibold">
                    Expiry Date
                  </label>
                  <Field
                    type="text"
                    id="expiry"
                    name="expiry"
                    value={values.expiry}
                    onChange={(e) => {
                      const { value } = e.target;
                      const formattedValue = value
                        .replace(/\D/g, "")
                        .replace(/(\d{2})(\d{0,2})/, "$1/$2")
                        .substring(0, 5);
                      handleChange({
                        target: { name: "expiry", value: formattedValue },
                      });
                    }}
                    className="form-input mt-1 block w-full rounded-md border-gray-300"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="mb-4">
                  <label htmlFor="cvv" className="block text-gray-700 font-semibold">
                    CVV
                  </label>
                  <Field
                    type="text"
                    id="cvv"
                    name="cvv"
                    maxLength={3}
                    className="form-input mt-1 block w-full rounded-md border-gray-300"
                    placeholder="123"
                  />
                </div>
              </div>
              <div className="mt-6">
                <button
                  type="submit"
                  className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Submit
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default Payment;
