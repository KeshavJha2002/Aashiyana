import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios"; // Import Axios

const SignUp: React.FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Add state to store error message

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:4132/api/auth/sign-up', formData, {
        headers: {
          'Content-Type': 'application/json',
        },
      });
      
      console.log(response.data); // Log the response data
    } catch (err:any) {
      // Handle errors
      if (err.response) {
        // The request was made, but the server responded with a status code that falls out of the range of 2xx
        setError(err.response.data.error); // Set the error message
      } else {
        // There was an error in making the request
        setError("An error occurred. Please try again later.");
      }
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  return (
    <div className="p-3 max-w-lg mx-auto">
      <h1 className="text-3xl font-semibold my-7 items-center">SignUp</h1>
      {error && <p className="text-red-600">{error}</p>} {/* Display the error message if it exists */}
      <form action="" className="flex flex-col gap-4" onSubmit={onSubmit}>
        <input
          type="text"
          name="username"
          placeholder="username"
          className="border p-3 rounded-lg"
          id="username"
          onChange={handleChange}
          value={formData.username}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          className="border p-3 rounded-lg"
          id="email"
          onChange={handleChange}
          value={formData.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          className="border p-3 rounded-lg"
          id="password"
          onChange={handleChange}
          value={formData.password}
        />
        <button className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" type="submit">
          Sign Up
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 hover:underline">Sign In</span>
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
