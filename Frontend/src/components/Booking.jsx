import React, { useEffect, useState } from "react";
import { Formik, Form, Field } from "formik";
import { Square } from "lucide-react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const getBusData = async (busId) => {
  try {
      // Replace 'http://localhost:3000/api' with your actual backend server URL
      const response = await axios.get(`http://localhost:80/bus/${busId}`);
      return response.data;
  } catch (error) {
      console.error('Failed to fetch bus data:', error);
      throw error; // Re-throw the error to handle it where the function is called
  }
};

const Booking = (props) => {
  const navigate = useNavigate();
  console.log(props.params);
  const [busDetails, setBusDetails] = useState({});
  const [busId, setBusId] = useState(props.params.id);
  const [bookedSeat, setBookedSeats] = useState([]);
  const [seats, setSeats] = useState(
    Array.from({ length: 40 }, (_, i) => ({ id: i + 1, status: 0 }))
  );

  useEffect(() => {
    getBusData(busId).then(setBusDetails).catch(console.error);

    axios
      .get(`http://localhost:80/booking/bus/${busId}`)
      .then((res) => {
        let oldSeats = seats;
        let bookedSeats = res.data.bookings;
        let updatedSeats = oldSeats.map((seat) => {
          if (bookedSeats.includes(seat.id)) {
            return { ...seat, status: 1 };
          } else {
            return seat;
          }
        });
        setSeats(updatedSeats);
      })
      .catch((err) => {
        console.log(err);
      });
      
  }, []);

 

  // Initial values for Formik
  const initialValues = {
    selectedSeats: [],
    name: "",
    email: "",
    CNIC: "",
    phoneNumber: "",
  };

  useEffect(() => {}, []);

  // State to track form submission
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleSubmit = async (values, { resetForm }) => {
    setFormSubmitted(true);

    await axios
      .post("http://localhost:80/booking", {
        busId: busId,
        customerDetails: {
          name: values.name,
          CNIC: values.CNIC,
          contact: values.phoneNumber,
          email: values.email,
        },
        seatNumbers: values.selectedSeats,
      })
      .then((res) => {
        
        navigate("/thankyou", { state: { data: {...values} } });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <>
      <div className={`background-image `}>
        <Formik initialValues={initialValues} onSubmit={handleSubmit}>
          {({ values, setFieldValue }) => (
            <Form className="w-full mx-auto flex flex-wrap ">
              <div className="w-1/3 px-4 py-10 ">
                <div className="flex flex-wrap grid-cols-4 gap-2">
                  {seats.map((seat) => (
                    <label
                      key={seat.id}
                      className={`rounded-md py-3 w-20 flex items-center justify-center cursor-pointer ${
                        (seat.id - 2) % 4 === 0 ? "mr-10" : "mr-0"
                      } ${
                        values.selectedSeats.includes(seat.id.toString())
                          ? "bg-green-600"
                          : seat.status === 1
                          ? "bg-red-600 cursor-not-allowed"
                          : "bg-blue-600"
                      }`}
                    >
                      <Field
                        type="checkbox"
                        name="selectedSeats"
                        value={seat.id.toString()}
                        className="hidden"
                        disabled={seat.status === 1}
                        onClick={() => {
                          if (!formSubmitted && seat.status !== 1) {
                            const updatedSeats = values.selectedSeats.includes(
                              seat.id.toString()
                            )
                              ? values.selectedSeats.filter(
                                  (id) => id !== seat.id.toString()
                                )
                              : [...values.selectedSeats, seat.id.toString()];
                            setFieldValue("selectedSeats", updatedSeats);
                          }
                        }}
                      />
                      <span className="text-white">{seat.id}</span>
                    </label>
                  ))}
                </div>
              </div>

              {/**********************  Middle ************ */}
              <div className="w-1/3 px-4 pb-10 flex flex-col justify-around  rounded-md my-2 h-fit ">
                <div className="flex justify-between my-10">
                  <section className="flex gap-3 ">
                    <Square className="bg-green-600 rounded-md" stroke="none" />
                    Selected
                  </section>
                  <section className="flex gap-3 ">
                    <Square className="bg-red-600 rounded-md" stroke="none" />
                    Booked
                  </section>
                  <section className="flex gap-3 ">
                    <Square className="bg-blue-600 rounded-md" stroke="none" />
                    Available
                  </section>
                </div>
                <div className=" bg-slate-500 bg-opacity-40 p-3 rounded-md">
                  <label className="text-white ml-1  text-lg">Name</label>
                  <Field
                    type="text"
                    name="name"
                    placeholder="Full Name"
                    id="name"
                    className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                  <label className="text-white ml-1  text-lg">Email</label>
                  <Field
                    type="text"
                    name="email"
                    placeholder="Email"
                    id="email"
                    className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                  <label className="text-white ml-1  text-lg">CNIC</label>
                  <Field
                    type="text"
                    name="CNIC"
                    placeholder="CNIC without -"
                    id="CNIC"
                    className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                  <label className="text-white ml-1  text-lg">Contact</label>
                  <Field
                    type="text"
                    name="phoneNumber"
                    placeholder="Mobile phone Number"
                    id="phoneNumber"
                    className="block w-full px-4 py-2 mb-2 border rounded focus:outline-none focus:border-blue-500"
                  />
                  <button
                    type="submit"
                    className="w-full mt-10 bg-blue-600 hover:bg-blue-800 text-white  py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                  >
                    Book Selected Seats
                  </button>
                </div>
              </div>

              {/**************** right *********************/}
              <div className="w-1/3 px-4 py-10 flex  items-center">
                <div className="bg-gray-800 flex-1 bg-opacity-50 text-white  py-4 rounded">
                  <div className="text-center text-yellow-400 mb-4">
                    <label className=" text-lg">Booking Summary</label>
                  </div>
                  <p className="px-4">Origin </p>
                  <p className="bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold ">
                    {busDetails.origin ? busDetails.origin: '--'}
                  </p>
                  <p className="px-4">Destination</p>
                  <p className="bg-blue-300  px-4 pt-2 bg-opacity-50 font-semibold">
                  {busDetails.destination ? busDetails.destination: '--'}

                  </p>
                  <p className="px-4">Date</p>
                  <p className="bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold">
                  {busDetails.date ? busDetails.date: '--'}

                  </p>
                  <p className="px-4">Time</p>
                  <p className="bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold">
                  {busDetails.time ? busDetails.time: '--'}

                  </p>
                  <p className="px-4">Price</p>
                  <p className="bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold">
                  {busDetails.price ? busDetails.price: '--'}

                  </p>
                  <p className="px-4">Total Seats Selected</p>
                  <p className="bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold">
                    {values.selectedSeats.length
                      ? values.selectedSeats.length
                      : "--"}
                  </p>
                  <p className="px-4">Selected Seat Numbers </p>
                  <p className="bg-blue-300 px-4 pt-2 bg-opacity-50 font-semibold">
                    {values.selectedSeats.length
                      ? values.selectedSeats.join(", ")
                      : "--"}
                  </p>
                </div>
              </div>
            </Form>
          )}
        </Formik>
      </div>
    </>
  );
};

export default Booking;
