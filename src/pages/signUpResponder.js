import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthFormWrapper from "../components/AuthFormWrapper";
import { useAuth } from "../contexts/AuthContext";
import { captureFormData } from "../utils/captureFormData";

// TODO: Check if username is available?
/* <label className="mb-4 text-teal-800">
            Email
            <input
              type="email"
              className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
              // required
            />
          </label>
          <label className="mb-4 text-teal-800">
            First Name
            <input
              type="text"
              className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
              // required
            />
          </label>
          <label className="mb-4 text-teal-800">
            Last Name
            <input
              type="text"
              className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
              // required
            />
          </label>
          <label className="mb-4 text-teal-800">
            Type of Service
            <select
              name="typeOfService"
              className="block w-64 px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
              // required
            >
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
              // required
            />
          </label> */

function SignUpResponder(props) {
  // const [verifyStep, setVerifyStep] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { signup } = useAuth();
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = captureFormData(event);

    if (formData.password !== formData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    try {
      setError("");
      setLoading(true);
      await signup(formData.username, formData.password);
      history.push("/");
    } catch {
      setError("Failed to create an account");
    }
    setLoading(false);

    // setVerifyStep(false);
  };

  return (
    <AuthFormWrapper>
      <form
        className="grid items-center justify-center px-8"
        onSubmit={handleSubmit}
      >
        <h1 className="mb-8 text-xl font-bold text-gray-700">
          Sign Up For A Responder Account
        </h1>

        {error ? <div className="text-red-800">Error: {error}</div> : null}
        <label className="mb-4 text-teal-800" htmlFor="email">
          Email
          <input
            id="email"
            type="text"
            className="block w-full px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
            required
          />
        </label>
        <label className="mb-4 text-teal-800" htmlFor="password">
          Password
          <input
            id="password"
            type="password"
            className="block w-full px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
            required
          />
        </label>
        <label className="mb-4 text-teal-800" htmlFor="passwordConfirm">
          Confirm Password
          <input
            id="passwordConfirm"
            type="password"
            className="block w-full px-2 pt-2 pb-px mt-1 text-gray-900 border-b-2"
            required
          />
        </label>
        <button
          type="submit"
          disabled={loading}
          // onClick={() => setVerifyStep(true)}
          className="w-full p-2 mt-4 text-white border rounded bg-cyan-600 focus:ring"
          style={{ justifySelf: "center" }}
        >
          Sign Up
        </button>
        <div className="pb-12 mt-10 text-center">
          Already have an account?{" "}
          <Link
            className="font-bold text-blue-500 hover:underline"
            to="/signinr"
          >
            Sign In
          </Link>
        </div>
      </form>
    </AuthFormWrapper>
  );
}

export default SignUpResponder;
