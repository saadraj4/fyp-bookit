// import React from "react";
// import {
//   BrowserRouter as Router,
//   Route,
//   Routes,
//   Navigate,
// } from "react-router-dom";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import Tour from "./pages/Tour";
// import Attraction from "./pages/Attraction";
// import Event from "./pages/Event";
// import Blog from "./pages/Blog";
// import Bus from "./pages/Bus";
// import EventDetails from "./pages/EventDetails";
// import BlogDetails from "./pages/BlogDetails";
// import TourDetails from "./pages/TourDetails";
// import AttractionDetails from "./pages/AttractionDetails";
// import FindABus from './pages/FindABus'
// import ContactUs from "./pages/ContactUs";


// function App() {
//   return (
//     <>
//       <Router>
//         <Routes>
//           {/*
//             Main Routes
//           */}
//           <Route path="/" element={<Home />} />
//           <Route path="/bus" element={<Bus />} />
//           <Route path="/tour" element={<Tour />} />
//           <Route path="/attraction" element={<Attraction />} />
//           <Route path="/event" element={<Event />} />
//           <Route path="/blog" element={<Blog />} />
//           <Route path="/register" element={<Register />} />
//           <Route path="/login" element={<Login />} />
//           <Route path="/contact-us" element={<ContactUs />} />
//           {/*
//             Other Routes
//           */}
//           <Route path="/event-details" element={<EventDetails />}/>
//           <Route path="/blog-details" element={<BlogDetails />}/>
//           <Route path="/tour-details" element={<TourDetails />}/>
//           <Route path="/attraction-details" element={<AttractionDetails />}/>
//           <Route path="/find_a_bus" element={<FindABus />}/>
//           {/*
//             Invalid URL Routes
//           */}
//           <Route path="*" element={<Navigate to={"/"} />} />
//         </Routes>
//       </Router>
//     </>
//   );
// }
// export default App;
