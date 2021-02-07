import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
// import { captureFormData } from "../utils/captureFormData";

function SignIn(props) {
  const [verifyStep, setVerifyStep] = useState(false);

  return (
    <div className="grid items-center h-screen">
      {verifyStep ? (
        <form
          key="verificationForm"
          onSubmit={(event) => {
            // todo: Check verification code and login if correct
            event.preventDefault();

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
          key="signinForm"
          onSubmit={(event) => {
            event.preventDefault();

            // todo: Send verification code to phone number
            // const formData = captureFormData(event);

            setVerifyStep(true);
          }}
        >
          <div className="grid justify-center">
            <div className="mb-6 font-serif text-6xl font-bold text-center">
              T
            </div>
            <label className="mt-6" htmlFor="number">
              Phone Number
            </label>
            <input
              id="number"
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
              Sign In
            </button>
            <div className="pb-12 mt-10">
              Don't have an account?{" "}
              <Link className="text-blue-500" to="/signup">
                Sign Up
              </Link>
            </div>
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
