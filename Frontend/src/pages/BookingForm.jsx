import { useParams } from "react-router-dom";
import Booking from "../components/Booking";
import { useEffect } from "react";

export default function BookingForm() {

    const params = useParams();

    useEffect(() => {
        console.log("Booking Id: ", params.id);
    })

    return <Booking id={params.id} />
}