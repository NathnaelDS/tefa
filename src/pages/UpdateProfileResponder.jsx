import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { captureFormData } from "../utils/captureFormData";

function UpdateProfileResponder(props) {
  const { currentUser, updateEmail, updatePassword } = useAuth();
  const [error, setError] = useState("");
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  async function handleSubmit(event) {
    event.preventDefault();

    const formData = captureFormData(event);

    if (formData.password !== formData.passwordConfirm) {
      return setError("Passwords do not match");
    }

    const promises = [];
    setLoading(true);
    setError("");

    if (formData.email !== currentUser.email) {
      promises.push(updateEmail(formData.email));
    }
    if (formData.password) {
      promises.push(updatePassword(formData.password));
    }

    Promise.all(promises)
      .then(() => {
        history.push("/");
      })
      .catch(() => {
        setError("Failed to update account");
      })
      .finally(() => {
        setLoading(false);
      });
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
        <label htmlFor="password">Password</label>
        <input
          id="password"
          type="password"
          required
          className="w-64 p-1 mt-3 border-b-2"
        />
        <label htmlFor="passwordConfirmation">Confirm Password</label>
        <input
          id="passwordConfirmation"
          type="password"
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

export default UpdateProfileResponder;
