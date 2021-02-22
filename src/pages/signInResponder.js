import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import AuthFormWrapper from "../components/AuthFormWrapper";
import { useAuth } from "../contexts/AuthContext";
import { captureFormData } from "../utils/captureFormData";

function SignInResponder(props) {
  const { login } = useAuth();
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = captureFormData(event);

    try {
      setError("");
      setLoading(true);
      await login(formData.email, formData.password);
      history.push("/");
    } catch {
      setError("Failed to log in");
    }

    setLoading(false);
  }

  return (
    <AuthFormWrapper>
      <form onSubmit={handleSubmit} className="grid justify-center px-8">
        <h1 className="mb-3 text-xl font-bold text-gray-700">
          Sign In To Your Responder Account
        </h1>
        <p className="text-sm text-gray-600 mb-7">
          If you meant to report issues,{" "}
          <Link
            className="font-bold text-blue-500 hover:underline"
            to="/signin"
          >
            Sign In Here
          </Link>
          .
        </p>
        {error ? <div className="text-red-800">Error: {error}</div> : null}
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          className="w-full p-1 mt-3 border-b-2"
        />
        <label className="mt-6" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="w-full p-1 mt-3 border-b-2"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-full p-2 mt-4 text-white border rounded-lg bg-cyan-600 focus:ring"
          style={{ justifySelf: "center" }}
        >
          Sign In
        </button>
        <div className="pb-12 mt-10">
          Don't have an account?{" "}
          <Link
            className="font-bold text-blue-500 hover:underline"
            to="/signupr"
          >
            Sign Up
          </Link>
        </div>
      </form>
    </AuthFormWrapper>
  );
}

export default SignInResponder;
