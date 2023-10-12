import React, { useState } from "react";
import { Link , useNavigate } from "react-router-dom";
import axios from "axios"; 

const SignUp: React.FC = () => {
  const [error,setError] = useState("");
  const navigate = useNavigate();
  const [loading,setLoading] = useState(false);
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post('http://localhost:4132/api/auth/sign-up', formData, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
      console.log(response);
    } catch (err:any) {
      if (err.response) {
        setError(err.response.data.error);
      } else {
        setError("An error occurred. Please try again later.");
      }
    }
    setLoading(false);
    setError("");
    navigate("/sign-in");
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
        <button disabled={loading} className="bg-slate-700 text-white p-3 rounded-lg uppercase hover:opacity-95 disabled:opacity-80" type="submit">
          {loading ? "Loading..." : "Sign Up"}
        </button>
      </form>
      <div className="flex gap-2 mt-5">
        <p>Already have an account?</p>
        <Link to="/sign-in">
          <span className="text-blue-700 hover:underline">Sign In</span>
        </Link>
      </div>
      {error && <p className="text-red-500 mt-5">{error}</p>}
    </div>
  );
};

export default SignUp;
