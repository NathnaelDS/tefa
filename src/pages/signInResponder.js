import React from "react";
import { Link } from "react-router-dom";

function SignInResponder(props) {
  return (
    <div className="grid items-center h-screen">
      <div className="grid justify-center">
        <div className="mb-6 font-serif text-6xl font-bold text-center">T</div>
        <label htmlFor="name">Username</label>
        <input id="name" type="text" className="w-64 p-1 mt-3 border-b-2" />
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
      </div>
    </div>
  );
}

export default SignInResponder;
