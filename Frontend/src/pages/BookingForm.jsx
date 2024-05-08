import { useParams, useLocation } from "react-router-dom";
import Booking from "../components/Booking";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Features from "../components/Features";
import Header from "../components/Header";


export default function BookingForm() {

    const params = useParams();

    useEffect(() => {
        console.log("Booking Id: ", params.id);
    })

    return (
        <>
        <Header/>
        <Booking params={params} />
        <Features />
        <Footer />
        </>
    )
}