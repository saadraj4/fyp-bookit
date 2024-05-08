// RemoveTicketForm.js
import React, { useState } from "react";
import { Formik, Form, Field } from "formik";
import Sidebar from "./Sidebar";
import axios from "axios";
import { Luggage, Tv, Cable, Utensils, Wifi, Armchair } from "lucide-react";
import image from "../assets/logo/logo.png";

const RemoveTicketForm = () => {
  const [seats, setSeats] = useState([]);
  const [bus, setBus] = useState({});

  const initialValues = {
    origin: "",
    destination: "",
    date: "",
    time: "",
    seats: 40,
  };

  const handleSubmit = (values, { resetForm }) => {
    const params = {
      destination: values.destination,
      origin: values.origin,
      time: values.time,
      date: values.date,
    };

    axios
      .get(`http://localhost:80/booking/bus`, { params })
      .then((response) => {
        console.log(response.data.Bus);
        setBus(response.data.Bus);
        setSeats(response.data.Seats);
      })
      .catch((error) => {
        console.error("Error while making Fetch request:", error);
      });
  };
  // Mock data for origin and destination options
  const originOptions = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Peshawer",
    "Quetta",
  ];
  const destinationOptions = [
    "Lahore",
    "Karachi",
    "Islamabad",
    "Peshawer",
    "Quetta",
  ];

  const handleDeleteTicket = (bookingId) => {
    console.log("Booking Id to Delete: ", bookingId);
    axios
      .delete(`http://localhost:80/booking/${bookingId}`)
      .then((res) => {
        setSeats(seats.filter((seat) => seat.bookingId != bookingId));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1 flex flex-col w-full justify-center  items-center my-10">
        <div className="max-w-lg my-10 flex justify-center align-items-center flex-col">
          <h1 className="text-2xl font-bold mb-4">Remove Tickets</h1>
          <Formik initialValues={initialValues} onSubmit={handleSubmit}>
            {({ handleSubmit }) => (
              <Form
                onSubmit={handleSubmit}
                className="space-y-4 w-full min-w-[400px]"
              >
                <div>
                  <label
                    htmlFor="origin"
                    className="block text-sm font-medium text-gray-700"
                  >
                    origin
                  </label>
                  <Field
                    as="select"
                    name="origin"
                    className="mt-1 block w-full p-2 border rounded-md"
                  >
                    <option value="">Select origin</option>
                    {originOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>
                <div>
                  <label
                    htmlFor="destination"
                    className="block text-sm font-medium text-gray-700"
                  >
                    destination
                  </label>
                  <Field
                    as="select"
                    name="destination"
                    className="mt-1 block w-full p-2 border rounded-md"
                  >
                    <option value="">Select destination</option>
                    {destinationOptions.map((option) => (
                      <option key={option} value={option}>
                        {option}
                      </option>
                    ))}
                  </Field>
                </div>
                <div>
                  <label
                    htmlFor="date"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  <label
                    htmlFor="time"
                    className="block text-sm font-medium text-gray-700"
                  >
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
                  Get Bus Tickets
                </button>
              </Form>
            )}
          </Formik>
        </div>
        {seats.length != 0 ? (
          <>
            <div className="bg-white shadow-lg rounded-lg p-6 flex items-center justify-start gap-10 w-full">
              <div className="flex flex-col justify-center  w-32  items-center ">
                <img src={image} alt="image" srcSet="" />

                <div className="text-lg  italic">{bus.time}</div>
              </div>

              <div className="flex flex-col flex-grow justify-center   items-start ">
                <div className="text-lg font-semibold">{bus.type}</div>
                <div className="flex gap-5 my-4">
                  <Luggage
                    stroke="green"
                    fill="yellow"
                    className="hover:bg-blue-700 rounded-md cursor-pointer"
                  />
                  <Tv
                    stroke="green"
                    fill="yellow"
                    className="hover:bg-blue-700 rounded-md cursor-pointer"
                  />
                  <Cable
                    stroke="green"
                    fill="yellow"
                    className="hover:bg-blue-700 rounded-md cursor-pointer"
                  />
                  {bus.type.toUpperCase() == "EXECUTIVE" ? (
                    <>
                      <Utensils
                        stroke="green"
                        fill="yellow"
                        className="hover:bg-blue-700 rounded-md cursor-pointer"
                      />
                      <Wifi
                        stroke="green"
                        fill="yellow"
                        className="hover:bg-blue-700 rounded-md cursor-pointer"
                      />
                      <Armchair
                        stroke="green"
                        fill="yellow"
                        className="hover:bg-blue-700 rounded-md cursor-pointer"
                      />
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>

              <div className="text-lg font-bold mr-20">Time: {bus.time}</div>
            </div>
            <div className="flex justify-start flex-wrap gap-10 mt-10">
              {seats.map((value, index) => {
                console.log(value);
                return (
                  <div className="border border-1 px-3 py-5 w-fit rounded-lg">
                    <h1 className="text-nowrap">Seat No: {value.seatNumber}</h1>
                    <h6 className="text-nowrap">
                      Name: {value.customerDetail.name}
                    </h6>
                    <h6 className="text-nowrap">
                      CNIC: {value.customerDetail.CNIC}
                    </h6>
                    <button
                      className="bg-red-500 rounded-md px-5 py-2 text-white mt-5"
                      onClick={() => handleDeleteTicket(value.bookingId)}
                    >
                      Cancel Ticket
                    </button>
                  </div>
                );
              })}
            </div>
          </>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default RemoveTicketForm;
