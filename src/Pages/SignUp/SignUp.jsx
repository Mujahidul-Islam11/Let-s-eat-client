import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const SignUp = () => {
  const { createUser } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => console.log(data);

  console.log(watch("email"), watch("pass"));

  return (
    <div className="flex items-center justify-center">
      <div className="p-6 rounded-lg max-w-7xl w-full flex justify-center">
        {/* Form */}
        <div className="md:w-1/2 w-full p-6 px-6 md:px-14 flex flex-col justify-center ">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Name</label>
              <input
                type="text"
                name="name"
                {...register("name", { required: true })}
                placeholder="Your name"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name="email"
                {...register("email", { required: true })}
                placeholder="Your email"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name="pass"
                {...register("pass", { required: true })}
                placeholder="Create password"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Sign Up Button */}
            <input
              type="submit"
              value={"Sign Up"}
              className={`bg-yellow-400 hover:bg-yellow-500 text-black cursor-pointer w-full py-3 rounded-md font-semibold transition-colors duration-300`}
            />

            {/* Additional Links */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                Already have an account?{" "}
                <Link
                  to="/login"
                  className="text-yellow-500 font-medium hover:underline"
                >
                  Please Login here
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
