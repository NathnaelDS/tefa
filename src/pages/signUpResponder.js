import React, { useState } from "react";
import { Link } from "react-router-dom";

// TODO: Check if username is available?

function SignUpResponder(props) {
  const [verifyStep, setVerifyStep] = useState(false);

  return (
    <div className="grid items-center h-screen text-gray-900">
      {verifyStep ? (
        <div className="grid justify-center">
          <div className="mb-6 font-serif text-6xl font-bold text-center">
            T
          </div>
          <label htmlFor="verificationCode">Verification Code</label>
          <input
            id="verificationCode"
            name="verificationCode"
            type="number"
            className="w-64 p-1 mt-3 border-b-2"
          />
          <button
            onClick={() => setVerifyStep(false)}
            className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:shadow-outline"
            style={{ justifySelf: "center" }}
          >
            Verify
          </button>
        </div>
      ) : (
        <>
          <div className="mb-6 font-serif text-6xl font-bold text-center">
            T
          </div>
          <form
            className="grid justify-center"
            onSubmit={(event) => {
              event.preventDefault();
              console.log(event);
            }}
          >
            <label className="mb-4 text-teal-800">
              First Name
              <input
                type="text"
                className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
                required
              />
            </label>
            <label className="mb-4 text-teal-800">
              Last Name
              <input
                type="text"
                className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
                required
              />
            </label>
            <label className="mb-4 text-teal-800">
              Type of Service
              <select
                name="typeOfService"
                className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
                required
              >
                {/* // TODO: Update these values */}
                <option value="power">Power</option>
                <option value="water">Water</option>
                <option value="ambulance">Ambulance</option>
                <option value="police">Police</option>
                <option value="fire">Fire</option>
              </select>
            </label>
            <label className="mb-4 text-teal-800" htmlFor="district">
              District
              <input
                id="district"
                type="text"
                className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
                required
              />
            </label>
            <label className="mb-4 text-teal-800" htmlFor="username">
              Username
              <input
                id="username"
                type="text"
                className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
                required
              />
            </label>
            <label className="mb-4 text-teal-800" htmlFor="password">
              Password
              <input
                id="password"
                type="password"
                className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
                required
              />
            </label>
            <button
              type="submit"
              // onClick={() => setVerifyStep(true)}
              className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:shadow-outline"
              style={{ justifySelf: "center" }}
            >
              Sign Up
            </button>
            <div className="pb-12 mt-10">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/signinr">
                Sign In
              </Link>
            </div>
          </form>
        </>
      )}
    </div>
  );
}

export default SignUpResponder;
