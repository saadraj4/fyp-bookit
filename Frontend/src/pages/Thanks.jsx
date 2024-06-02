import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Banknote, Wallet, CreditCard } from 'lucide-react';
import { useLocation, useNavigate } from "react-router-dom";



function Thanks() {
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state);
    const { data } = location.state;


    const initialValues = {
        ...data
    };

    const [payment, setPayment] = useState('null')

    if (!data){
        return <h2>Could not load data</h2>
    }


    return (
        <>
            <Header />

            {/* Thank You component */}
            <div className="h-[90vh] background-image py-10">
                <h4 className="text-center text-4xl font-bold">THANK YOU FOR CHOOSING OUR SERVICES</h4>
                <div className="flex gap-5 justify-around items-center py-10">

                    <div className="bg-gray-700 bg-opacity-80 rounded-lg p-4 text-white">
                        <h3 className="font-semibold text-2xl text-center my-3">Booking Details</h3>
                        <div className="w-fit h-fit  overflow-hidden border border-gray-600">

                            <table className="table-fixed border w-[500px]">
                                <tbody >
                                    <tr>
                                        <td className="border border-gray-600 p-3 ">Full Name</td>
                                        <td className="border border-gray-600 p-3">{initialValues.name}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-600 p-3 ">Email</td>
                                        <td className="border border-gray-600 p-3">{initialValues.email}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-600 p-3 ">CNIC</td>
                                        <td className="border border-gray-600 p-3">{initialValues.CNIC}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-600 p-3 ">Phone Number</td>
                                        <td className="border border-gray-600 p-3">{initialValues.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-600 p-3 ">Total Seats</td>
                                        <td className="border border-gray-600 p-3">{initialValues.selectedSeats.length}</td>
                                    </tr>
                                    <tr>
                                        <td className="border border-gray-600 p-3 ">Seat No</td>
                                        <td className="border border-gray-600 p-3">{initialValues.selectedSeats.join(', ')}</td>
                                    </tr>
                                  
                                </tbody>

                            </table>
                        </div>
                    </div>


                    <div className="p-4 bg-gray-700 bg-opacity-40 rounded-lg">
                        <h3 className="text-center text-3xl font-semibold px-10 text-white">Choose Payment Method</h3>
                        <div onClick={() => setPayment('cash')} className={` ${(payment === 'cash') ? 'bg-green-700' : 'bg-gray-400'} h-10  border rounded-lg flex justify-between items-center px-4 my-4 cursor-pointer  hover:bg-green-400`}>
                            <Banknote />
                            <p className="font-semibold">Cash Payment</p>

                        </div>
                        <div onClick={() => setPayment('wallet')} className={` ${(payment === 'wallet') ? 'bg-green-700' : 'bg-gray-400'} h-10  border rounded-lg flex justify-between items-center px-4 my-4 cursor-pointer  hover:bg-green-400`}>
                            <Wallet />
                            <p className="font-semibold">Mobile Wallet</p>
                        </div>
                        <div onClick={() => setPayment('card')} className={` ${(payment === 'card') ? 'bg-green-700' : 'bg-gray-400'} h-10  border rounded-lg flex justify-between items-center px-4 my-4 cursor-pointer  hover:bg-green-400`}>
                            <CreditCard />
                            <p className="font-semibold">Card Payment</p>
                        </div>
                        <div className="h-10  border rounded-lg justify-between items-center px-4 my-4 cursor-pointer bg-blue-700 w-fit hover:bg-green-400 block mx-auto">
                        <button onClick={()=>navigate("/redirecting")}>
                        Proceed
                        </button>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </>
    )
}



export default Thanks;