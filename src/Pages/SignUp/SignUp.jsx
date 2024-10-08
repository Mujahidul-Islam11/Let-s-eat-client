import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";
import { toast } from "sonner";

const SignUp = () => {
  const { createUser, updateUser, logOut } = useContext(AuthContext);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.pass)
      .then((result) => {
        toast.success("Successfully created account");
        // update user
        updateUser(data.name, data.photoURL)
          .then(() => {
            logOut()
            .then(() => {
              navigate("/login");
            })
            .catch((err)=>{
              console.log(err);
            })
          })
          .catch((err) => {
            console.error(err);
          });
      })
      .catch((err) => {
        console.error(err);
        toast.error("Oops! Something went wrong");
      });
  };

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
                {...register("name", { required: true })}
                placeholder="Your name"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Photo Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Photo Url</label>
              <input
                type="text"
                {...register("photoURL", { required: true })}
                placeholder="Profile photo url"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
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
                {...register("pass", {
                  required: true,
                  pattern:
                    /^(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z]).{6,}$/,
                })}
                placeholder="Create password"
                className="w-full px-4 py-2 text-black dark:bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              {errors.pass?.type === "pattern" && (
                <h3 className="text-sm text-red-600">
                  Password must have one uppercase, one lowercase, one number
                  and a special character
                </h3>
              )}
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
