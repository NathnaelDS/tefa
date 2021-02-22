import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import AuthFormWrapper from "../components/AuthFormWrapper";
import { useAuth } from "../contexts/AuthContext";
import { captureFormData } from "../utils/captureFormData";

function SignIn(props) {
  const [verifyStep, setVerifyStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const { onSignInSubmit, confirm } = useAuth();
  const history = useHistory();

  return (
    <AuthFormWrapper>
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
          <div className="grid justify-center px-8 pb-12">
            <h1 className="mb-3 text-xl font-bold text-gray-700">
              Verification
            </h1>
            {/* Max-width to limit text width for alignment on small screens */}
            <p className="max-w-xs text-sm text-gray-600 mb-7">
              An SMS has been sent to your number. Fill in the code you have
              received.
            </p>
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
              className="w-full p-2 mt-8 font-bold text-white border rounded-lg bg-cyan-600 focus:ring"
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
          <div className="grid justify-center px-8 pb-12">
            <h1 className="mb-3 text-xl font-bold text-gray-700">
              Sign In To Report Issues
            </h1>
            {/* Max-width to limit text width for alignment on small screens */}
            <p className="max-w-xs text-sm text-gray-600 mb-7">
              If you don't have an account, one will be created for you as you
              sign in here.
            </p>
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
              className="w-full p-1 mt-3 border-b-2"
            />
            <button
              type="submit"
              id="sign-in-button"
              disabled={loading}
              className="w-full p-2 mt-8 font-bold text-white border rounded-lg bg-cyan-600 focus:ring"
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
    </AuthFormWrapper>
  );
}

export default SignIn;
