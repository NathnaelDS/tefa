import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { captureFormData } from "../utils/captureFormData";

function ForgotPasswordResponder(props) {
  const { resetPassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = captureFormData(event);

    try {
      setMessage("");
      setError("");
      setLoading(true);
      await resetPassword(formData.email);
      setMessage("Check your inbox for further instructions");
    } catch {
      setError("Failed to reset password");
    }

    setLoading(false);
  }

  return (
    <div className="grid items-center h-screen">
      <form onSubmit={handleSubmit} className="grid justify-center">
        <div className="mb-6 font-serif text-6xl font-bold text-center">T</div>
        <h2 className="mb-4 text-center">Password Reset</h2>
        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          required
          className="w-64 p-1 mt-3 border-b-2"
        />
        <button
          disabled={loading}
          type="submit"
          className="w-24 p-2 mt-8 text-white bg-green-900 border rounded focus:ring"
          style={{ justifySelf: "center" }}
        >
          Reset Password
        </button>
        <div className="pb-12 mt-10">
          Already have an account?{" "}
          <Link className="text-blue-500" to="/signinr">
            Sign In
          </Link>
        </div>
      </form>
    </div>
  );
}

export default ForgotPasswordResponder;
