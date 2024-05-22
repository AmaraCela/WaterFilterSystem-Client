import React, { createContext, useContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import '../styles/waterBtn.scss';


const UserContext = createContext(null);


const LoginWidget = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({ message: "", fields: { email: "", password: "" } });
  const navigate = useNavigate(); // Use useNavigate hook to get the navigation function

  const handleSubmit = () => {
    const apiUrl = process.env.REACT_APP_API_ENDPOINT;

    fetch(`${apiUrl}/session`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    }).then((response) => {
      if (!response.ok) {
        return response.json().then(data => {
          if (data.errors) {
            console.log("Errors: ", data.errors);
            setErrors({ message: "Please correct the following errors", fields: data.errors });
          } else {
            console.log("Failed to login", data.message);
            setErrors({ message: data.message, fields: data.errors || { email: "", password: "" } });
            console.log(data); 
          }
        });
      } else {
        return response.json().then(data => {
          const token = data.token;
          const id = data.user_id;
          
          console.log("Logged in ", id);
          localStorage.setItem("session_user_id", id);
          window.location.href = "/"; // Redirect to the home page
        });
      }
    });
  };

  

  return (
    <div className="holder flex justify-center items-center px-16 py-20 text-xl font-bold text-center text-indigo-700 whitespace-nowrap shadow-lg bg-zinc-100 h-[800px] w-[800px] rounded-[90px] max-md:px-5">
      <div className="flex flex-col mt-1.5 max-w-full w-[531px]">
        <div className="self-center text-6xl max-md:text-4xl">Login</div>
        {errors.message && (
          <div className="text-red-500 mt-4 text-center">{errors.message}</div>
        )}
        <div className="self-start mt-16 ml-2.5 tracking-wider uppercase leading-[80%] max-md:mt-10">
          Email
        </div>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} className=" pl-8 shrink-0 mt-1.5 border border-indigo-700 border-solid bg-zinc-50 bg-opacity-0 h-[67px] rounded-[13px] max-md:max-w-full" />
        {errors.fields.email && (
          <div className="text-red-500 mt-1 text-sm ml-2.5">{errors.fields.email}</div>
        )}
        <div className="self-start mt-20 ml-5 tracking-wider uppercase leading-[80%] max-md:mt-10 max-md:ml-2.5">
          PASSWORD
        </div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} className=" pl-7 shrink-0 mt-4 border border-indigo-700 border-solid bg-zinc-50 bg-opacity-0 h-[67px] rounded-[13px] max-md:max-w-full" />
        {errors.fields.password && (
          <div className="text-red-500 mt-1 text-sm ml-2.5">{errors.fields.password}</div>
        )}
        <button onClick={handleSubmit} className="btn justify-center items-start self-center px-16 py-5 mt-24 max-w-full text-xl font-black text-white shadow-lg bg-white-700 bg-opacity-60 rounded-[13px] w-[190px] h-[80px] max-md:pr-5 max-md:pl-6 max-md:mt-10">
          SUBMIT
        </button>
      </div>
    </div>
  );
}

export default LoginWidget;

