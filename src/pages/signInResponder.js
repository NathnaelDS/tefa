import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
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
    <div className="grid items-center h-screen">
      <form onSubmit={handleSubmit} className="grid justify-center">
        <div className="mb-6 font-serif text-6xl font-bold text-center">T</div>
        <div className="text-red-800">Error: {error}</div>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          className="w-64 p-1 mt-3 border-b-2"
        />
        <label className="mt-6" htmlFor="password">
          Password
        </label>
        <input
          id="password"
          type="password"
          required
          className="w-64 p-1 mt-3 border-b-2"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:shadow-outline"
          style={{ justifySelf: "center" }}
        >
          Sign In
        </button>
        <div className="pb-12 mt-10">
          Don't have an account?{" "}
          <Link className="text-blue-500" to="/signupr">
            Sign Up
          </Link>
        </div>
      </form>
    </div>
  );
}

export default SignInResponder;
