import { useParams } from "react-router-dom";
import Booking from "../components/Booking";
import { useEffect } from "react";
import Footer from "../components/Footer";
import Features from "../components/Features";

export default function BookingForm() {

    const params = useParams();

    useEffect(() => {
        console.log("Booking Id: ", params.id);
    })

    return (
        <>
        <Booking params={params} />
        <Features />
        <Footer />
        </>
    )
}