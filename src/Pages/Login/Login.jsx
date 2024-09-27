import React from 'react';

const Login = () => {
    const handleLogin = (e) =>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const pass = form.pass.value;
        console.log(email, pass)
    }
  return (
    <div className="flex items-center justify-center py-6">
      <div className="bg-white border p-6 rounded-lg shadow-lg max-w-7xl w-full flex flex-col md:flex-row">
        
        {/* Left Side Illustration */}
        <div className="md:w-1/2 hidden md:flex items-center justify-center p-4 rounded-l-lg">
          <img
            src="https://imagizer.imageshack.com/img923/3541/P7t4U1.png" // Replace with your image URL
            alt="Login Illustration"
            className=""
          />
        </div>

        {/* Right Side Form */}
        <div className="md:w-1/2 w-full p-6 px-6 md:px-14 flex flex-col justify-center ">
          
          <form onSubmit={handleLogin}>
            {/* Email Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Email</label>
              <input
                type="email"
                name='email'
                placeholder="Enter your email"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Password Input */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Password</label>
              <input
                type="password"
                name='pass'
                placeholder="Enter your password"
                className="w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Captcha */}
            <div className="mb-4">
              <label className="block text-gray-600 mb-1">Captcha</label>
              <div className="flex items-center gap-3">
                <div className="bg-gray-200 px-3 py-2 rounded-md border border-gray-300">
                  p d 2 h 2 J {/* Change this static text as needed */}
                </div>
                <button type="button" className="text-sm text-blue-500 hover:underline">
                  Reload Captcha
                </button>
              </div>
              <input
                type="text"
                placeholder="Type the text above"
                className="mt-2 w-full px-4 py-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* Sign In Button */}
            <input
              type="submit"
              value={"Login"}
              className="w-full bg-yellow-400 hover:bg-yellow-500 text-black py-3 rounded-md font-semibold transition duration-300"
            />

            {/* Additional Links */}
            <div className="text-center mt-6">
              <p className="text-gray-600">
                New here?{' '}
                <a href="#" className="text-yellow-500 font-medium hover:underline">
                  Create a New Account
                </a>
              </p>
            </div>

            <div className="text-center mt-4">
              <p className="text-gray-600">Or sign in with</p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
