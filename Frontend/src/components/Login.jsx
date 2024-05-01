import React from 'react';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';


const initialValues = {
  email: '',
  password: ''
}

// Validation schema
const LoginSchema = Yup.object().shape({
  email: Yup.string().email('Invalid email').required('Email is required'),
  password: Yup.string().required('Password is required'),
});


export default function Login() {
  const navigate = useNavigate()
  const onSubmit = (values) => {
    console.log(values)
    if (values.email == "admin@gmail.com" && values.password == "admin") {
      alert("Login Successful")
      navigate("/dashboard")
    }
  }

  return (
    <div className="login">
      <div className="w-full bg-slate-700 p-20 flex justify-around align-middle items-center gap-10">
        <div className="login_area w-[50%] p-10">
          <div className="form">
            <div className="text-5xl my-5 text-white font-bold">Sign In</div>
            <Formik
              initialValues={initialValues}
              validationSchema={LoginSchema}
              onSubmit={onSubmit}
            >
              {({ errors, touched }) => (
                <Form className="login-form my-10">
                  <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                    <div className="icons w-[10%] text-center">
                      <AiOutlineMail className="p-0 text-white text-2xl w-full text-center" />
                    </div>
                    <div className="input w-[90%]">
                      <Field
                        name="email"
                        type="text"
                        className="p-2 outline-none w-full"
                        placeholder="Email"
                      />
                      {errors.email && touched.email ? (
                        <div className="text-red-500">{errors.email}</div>
                      ) : null}
                    </div>
                  </div>
                  <div className="form-group my-5 border rounded flex justify-center items-center align-middle">
                    <div className="icons w-[10%] text-center">
                      <AiOutlineLock className="p-0 text-white text-2xl w-full text-center" />
                    </div>
                    <div className="input w-[90%]">
                      <Field
                        name="password"
                        type="password"
                        className="p-2 outline-none w-full"
                        placeholder="Password"
                      />
                      {errors.password && touched.password ? (
                        <div className="text-red-500">{errors.password}</div>
                      ) : null}
                    </div>
                  </div>
                  <div>
                    <a className="text-white hover:text-[#f88c71]" href="#">
                      Forgot Password ?
                    </a>
                  </div>
                  <div>
                    <button
                      type="submit"
                      className="p-2 my-5 px-16 border bg-slate-700 text-white duration-300 hover:bg-white hover:text-slate-700 rounded-md"
                    >
                      Login
                    </button>
                  </div>
                </Form>
              )}
            </Formik>
          </div>
        </div>
        {/*
        <div className="engage text-center p-10 w-[50%] bg-white rounded">
          <div className="text-3xl my-5 text-slate-800 font-bold">New Here ?</div>
          <div className="text-xl text-slate-800 font-bold">
            Please register first to make booking.
          </div>
          <div className="my-10">
            <a
              href="/register"
              className="p-3 px-14 border hover:bg-slate-700 hover:text-white duration-300 border-slate-700 rounded-full"
            >
              Register
            </a>
          </div>
        </div>
            */}
      </div>
    </div>
  );
}
