"use client";
import { Button } from "@/components/ui/button";
import React from "react";

const SignUp: React.FC = () => {
  const [email, setEmail] = React.useState<string>("test@test.com");
  const [password, setPassword] = React.useState<string>("123456");
  const [error, setError] = React.useState<string>("");

  const handleSubmit = async (e: { preventDefault: () => void }) => {
    e.preventDefault();
    console.log("clicked");
  };
  return (
    <div className="container mx-auto py-5 max-w-lg">
      <h1 className="text-left text-3xl font-bold text-orange-500">
        Join ShortME, <span className="text-blue-500">Save Time</span> Today
      </h1>
      <p className="text-left mt-2">Dont think about it. do it!</p>
      <form
        onSubmit={handleSubmit}
        className="mt-10  rounded-sm bg-gray-500 bg-opacity-30 shadow-sm p-5"
      >
        <div>
          <span className="text-sm">Email</span>
          <input
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mt-2 block w-full bg-gray-300 bg-opacity-30 border rounded-sm px-3 border-gray-500  text-white text-opacity-100 py-2 focus:outline-none"
            type="email"
            placeholder="Enter email"
          />
        </div>
        <div className="my-3">
          <span className="text-sm">Password</span>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-2 block w-full bg-gray-300 bg-opacity-30 border rounded-sm px-3 border-gray-500  text-white text-opacity-100 py-2 focus:outline-none"
            placeholder="Enter password"
          />
        </div>
        <span className="text-sm font-semibold text-blue-500 text-right block">
          Forgot password?
        </span>
        {error && <p className="text-red-500 text-sm">{error}</p>}
        <Button
          type="submit"
          disabled={!email || !password}
          className="block w-full my-5 rounded-sm text-white bg-blue-500 hover:bg-blue-600"
        >
          Sign In
        </Button>

        <p className="text-sm text-center">
          <span className="op"> No account? </span>
          <a href="/signup" className="text-blue-500">
            Sign Up
          </a>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
