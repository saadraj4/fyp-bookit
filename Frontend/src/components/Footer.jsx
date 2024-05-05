import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineFacebook, AiOutlineTwitter, AiOutlineWhatsApp, AiOutlineInstagram, AiOutlineBank, AiOutlineCreditCard, AiOutlineAlipay, AiOutlinePayCircle } from "react-icons/ai";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

export default function Footer() {
  const subscribeSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email address").required("Email is required"),
  });

  const handleSubscribe = (values, { setSubmitting, resetForm }) => {
    alert(`Thank you for subscribing with email: ${values.email}`);
    console.log("Form submitted with values:", values);
    setSubmitting(false);
    resetForm(); // Reset form after submission
  };

  return (
    <div className="footer w-full bg-[#140e35] h-auto p-20">
      <div className="sections grid grid-cols-3">
        <div className="payments px-4 col md:col-span-1 col-span-3">
          <div className="font-bold text-white md:text-3xl text-2xl my-5">
            Payment Systems
          </div>

          <div className="payment-systems gap-6 flex justify-center items-center">
            <div className="Bank">
              <Link to="#" className="text-xl text-white">
                <AiOutlineBank className="text-3xl" />
              </Link>
            </div>

            <div className="Card">
              <Link to="#" className="text-xl text-white">
                <AiOutlineCreditCard className="text-3xl" />
              </Link>
            </div>
            <div className="AliPay">
              <Link to="#" className="text-xl text-white">
                <AiOutlineAlipay className="text-3xl" />
              </Link>
            </div>

            <div className="PayCircle">
              <Link to="#" className="text-xl text-white">
                <AiOutlinePayCircle className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="subscribe px-4 col md:col-span-1 col-span-3">
          <div className="font-bold text-white md:text-3xl text-2xl md:my-5 my-10">
            Get Notified
          </div>
          <Formik
            initialValues={{ email: "" }}
            validationSchema={subscribeSchema}
            onSubmit={handleSubscribe}
          >
            {({ isSubmitting }) => (
              <Form className="form my-5 flex">
                <Field
                  name="email"
                  className="input rounded-tl-md rounded-bl-md p-2 w-[70%]"
                  placeholder="Enter your email"
                />
                <button
                  type="submit"
                  className="w-[30%] bg-slate-900 text-white hover:bg-slate-700 duration-300 rounded-tr-md rounded-br-md"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Subscribing..." : "Subscribe"}
                </button>
                <ErrorMessage
                  name="email"
                  component="div"
                  className="text-white"
                />
              </Form>
            )}
          </Formik>
          <p className="text-white">
            We only send you promo codes, vouchers, and other offers for our top services of Book Karo.
          </p>
        </div>

        <div className="social col md:col-span-1 px-4 col-span-3">
          <div className="font-bold text-white md:text-3xl text-2xl md:my-5 my-10">
            Keep in touch
          </div>
          <div className="icons flex justify-around px-5">
            <div className="Facebook">
              <Link to="https://www.facebook.com/saad.raj4" className="text-4xl text-white">
                <AiOutlineFacebook />
              </Link>
            </div>

            <div className="Whatsapp">
              <Link to="https://wa.me/+923025784042" className="text-4xl text-white">
                <AiOutlineWhatsApp />
              </Link>
            </div>

            <div className="Twitter">
              <Link to="https://www.twitter.com/saadraj4" className="text-4xl text-white">
                <AiOutlineTwitter />
              </Link>
            </div>

            <div className="Instagram">
              <Link to="https://www.instagram.com/saad.raj4" className="text-4xl text-white">
                <AiOutlineInstagram />
              </Link>
            </div>
          </div>
          <p className="px-5 mt-5 text-white">
            Our app has all your booking needs covered: Secure payment channels and an easy booking process.
          </p>
        </div>
      </div>

      <hr className="mt-10 border w-full" />
      <div className="text-center text-white">
        <div className="other-services my-5">
          <ul className="md:flex block gap-10 justify-center">
            <li>
              <Link to="/about-us">About Us</Link>
            </li>
            <li>
              <Link to="#">Terms and Conditions</Link>
            </li>
            <li>
              <Link to="/faq">FAQs</Link>
            </li>
            <li>
              <Link to="#">Contact Us</Link>
            </li>
            <li>
              <Link to="#">Privacy Policy</Link>
            </li>
            <li>
              <Link to="#">Support</Link>
            </li>
          </ul>
        </div>
        <p className="my-10 text-slate-200">
          Copyright &copy; {new Date().getFullYear()} Book Karo. All Rights Reserved.
        </p>
      </div>
    </div>
  );
}
