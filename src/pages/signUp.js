import React, { useState } from "react";
import { Link } from "react-router-dom";
import { captureFormData } from "../utils/captureFormData";

function SignUp(props) {
  const [verifyStep, setVerifyStep] = useState(false);

  return (
    <div className="grid items-center h-screen">
      {verifyStep ? (
        <form
          key="verificationForm"
          onSubmit={(event) => {
            event.preventDefault();

            // todo: Check verification code and login if correct
            const formData = captureFormData(event);

            setVerifyStep(false);
          }}
        >
          <div className="grid justify-center">
            <div className="mb-6 font-serif text-6xl font-bold text-center">
              T
            </div>
            <label htmlFor="verificationCode">Verification Code</label>
            <input
              id="verificationCode"
              name="verificationCode"
              type="number"
              required
              className="w-64 p-1 mt-3 border-b-2"
            />
            <button
              type="submit"
              className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:shadow-outline"
              style={{ justifySelf: "center" }}
            >
              Verify
            </button>
          </div>
        </form>
      ) : (
        <form
          key="signupForm"
          onSubmit={(event) => {
            event.preventDefault();

            const formData = captureFormData(event);
            // todo: send the name, phoneNumber to back-end

            setVerifyStep(true);
          }}
        >
          <div className="grid justify-center">
            <div className="mb-6 font-serif text-6xl font-bold text-center">
              T
            </div>
            <label htmlFor="fullName">Name</label>
            <input
              id="fullName"
              type="text"
              required
              className="w-64 p-1 mt-3 border-b-2"
            />
            <label className="mt-6" htmlFor="phoneNumber">
              Phone Number
            </label>
            <input
              id="phoneNumber"
              type="tel"
              // pattern="[0-9]{4}-[0-9]{2}-[0-9]{3}"
              required
              className="w-64 p-1 mt-3 border-b-2"
            />
            <button
              type="submit"
              className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:shadow-outline"
              style={{ justifySelf: "center" }}
            >
              Sign Up
            </button>
            <div className="pb-12 mt-10">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/signin">
                Sign In
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignUp;
