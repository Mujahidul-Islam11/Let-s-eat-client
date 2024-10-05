import React, { useContext, useEffect, useRef, useState } from "react";
import {
  loadCaptchaEnginge,
  LoadCanvasTemplate,
  validateCaptcha,
} from "react-simple-captcha";
import { AuthContext } from "../../provider/AuthProvider";
import { useForm } from "react-hook-form";

const Login = () => {
  const captchaRef = useRef(null);
  const [disabled, setDisabled] = useState(true);
  const {signIn} = useContext(AuthContext);
  const { register, handleSubmit, watch, formState: { errors } } = useForm()

  const onSubmit = (data) => console.log(data)

  console.log(watch("email"), watch("pass"))


  useEffect(() => {
    loadCaptchaEnginge(6);
  }, []);

  // Login handler
  

  // validation handler
  const handleValidation = () => {
    const user_captcha_value = captchaRef.current.value;
    if (validateCaptcha(user_captcha_value)) {
      setDisabled(false)
    } else {
      setDisabled(true)
    }
  };


  return (
    <div className="flex items-center justify-center">
      <div className="p-6 rounded-lg max-w-7xl w-full flex justify-center">
        {/* Form */}
        <div className="md:w-1/2 w-full p-6 px-6 md:px-14 flex flex-col justify-center ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", {required: true})}
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="pass"
                {...register("pass", {required: true})}
                placeholder="Enter your password"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Captcha */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">
                <LoadCanvasTemplate />
              </label>
              <input
                type="text"
                ref={captchaRef}
                name="captcha"
                placeholder="Type the captcha above"
                className="mt-2 w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <div className="flex justify-start my-2">
                <button
                  onClick={handleValidation}
                  className="py-1 px-4 border text-black text-sm rounded-full border-gray-500 cursor-pointer"
                >
                  Validate
                </button>
              </div>
            </div>

            {/* Sign In Button */}
            <input
              type="submit"
              value={"Login"}
              className={` ${disabled? "bg-[#D7D9DB] text-gray-400 cursor-not-allowed": "bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer"} w-full py-3 rounded-md font-semibold transition-colors duration-300`}
            />

            {/* Additional Links */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                New here?{" "}
                <a
                  href="#"
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Create a New Account
                </a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
