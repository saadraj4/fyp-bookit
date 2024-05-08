import React from "react";
import {BrowserRouter as Router,Route,Routes} from "react-router-dom";
import Home from "./pages/Home";
import Login from "./admin/Login";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import FindABus from './pages/FindABus'
import ContactUs from "./pages/ContactUs";
import FAQPage from "./pages/FAQ";
import NotFound from "./pages/NotFound";
import AboutUs from "./pages/AboutUs";
import BookingForm from "./pages/BookingForm";
import Dashboard from "./admin/Dashboard";
import AddBusForm from "./admin/AddBusForm";
import RemoveBusForm from "./admin/RemoveBusForm";
import RemoveTicketForm from "./admin/RemoveTicketForm"
import UpdateTicketForm from "./admin/UpdateTicketForm";
import Thanks from "./pages/Thanks";
import Redirect from "./pages/Redirect";


function App() {
  return (
    <>
      <Router>
        <Routes>
          
          <Route path="/" element={<Home />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog-details" element={<BlogDetails />}/>
          <Route path="/find_a_bus" element={<FindABus />}/>
          <Route path="/contact-us" element={<ContactUs />} />
          <Route path="/faq" element ={<FAQPage/>}/>
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/book/:id" element={<BookingForm />} />
          <Route path="/thankyou" element={<Thanks />} />
          <Route path="/redirecting" element={<Redirect/>}/>

          {/*Admin Routes Page redirection*/}
          <Route path="/admin" element={<Login />} />
          <Route path="/dashboard" element = {<Dashboard/>}/>
          <Route path = "/addBus" element= {<AddBusForm/>}/>
          <Route path="/removeBus" element = {<RemoveBusForm/>}/>
          <Route path="/removeTicket" element = {<RemoveTicketForm/>}/>
          <Route path="/updateTicket" element={<UpdateTicketForm/>}/>



          {/*
            Invalid URL Routes
          */}
          <Route path="*" element= {<NotFound />}/>
        </Routes>
      </Router>
    </>
  );
}
export default App;
