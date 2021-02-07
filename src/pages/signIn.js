import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { captureFormData } from "../utils/captureFormData";

function SignIn(props) {
  const [verifyStep, setVerifyStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const { onSignInSubmit, confirm, currentUser } = useAuth();
  const history = useHistory();

  return (
    <div className="grid items-center h-screen">
      {verifyStep ? (
        <form
          key="verificationForm"
          onSubmit={async (event) => {
            event.preventDefault();

            // todo: Check verification code and login if correct
            const formData = captureFormData(event);

            try {
              await confirm(formData.verificationCode);
              history.push("/");
            } catch {
              console.log("ERRORITA");
            }

            // const verified = await confirm(formData.verificationCode);
            // if (verified) {
            //   history.push("/");
            //   // setVerifyStep(false);
            // }
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
              autoFocus
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
          onSubmit={async (event) => {
            event.preventDefault();

            const formData = captureFormData(event);
            // todo: send the name, phoneNumber to back-end

            console.log(formData);
            setLoading(true);
            const codeSent = await onSignInSubmit(formData.phoneNumber);

            console.log(codeSent);

            if (codeSent) {
              setVerifyStep(true);
              setLoading(false);
            }
          }}
        >
          <div className="grid justify-center">
            <div className="mb-6 font-serif text-6xl font-bold text-center">
              T
            </div>
            {/* <label htmlFor="fullName">Name</label>
            <input
              id="fullName"
              type="text"
              required
              className="w-64 p-1 mt-3 border-b-2"
            /> */}
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
              id="sign-in-button"
              disabled={loading}
              className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:shadow-outline"
              style={{ justifySelf: "center" }}
            >
              Sign In
            </button>
            {/* <div className="pb-12 mt-10">
              Already have an account?{" "}
              <Link className="text-blue-500" to="/signin">
                Sign In
              </Link>
            </div> */}
          </div>
        </form>
      )}
    </div>
  );
}

export default SignIn;
