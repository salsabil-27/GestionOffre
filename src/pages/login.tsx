import React, { useState } from "react";

import axios from "axios";

const Login = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [name, setName] = useState("");
  const [registerTel, setRegisterTel] = useState(0);
  const [registerPoste, setRegisterPoste] = useState("");
  

    
  const handleSignUp = async () => {

    try {
      const newUser = {
        name,
       registerEmail,
         registerPassword,
         registerTel,
         registerPoste,
      };

      const response = await axios.post("http://localhost:8000/api/user", newUser);

      // Handle the response here (e.g., show success message, redirect, etc.)
      console.log(response.data); // The newly created user data from the backend
    } catch (error) {
      // Handle error here (e.g., show error message)
      console.error("Error signing up:", error);
    }
  };

 

  const LoginForm = () => {
    return (
     
      <div className="md:py-8 bg-white rounded-2xl shadow-2xl flex flex-col w-full md:w-1/3 items-center max-w-8xl transition duration-1000 ease-out">
        <h2 className="p-3 text-4xl font-bold  text-blue-400">Sign In!</h2>
        <div className="inline-block border-[1px]   justify-center w-20 border-blue-600 border-solid"></div>

        {/* Inputs */}
        <div className="flex flex-col items-center  m-5 justify-center">
          <input
            type="email"
            className="rounded-2xl px-5 m-2 py-1 w-4/5 md:w-full border-[1px] border-gray-300  focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            placeholder="Email"
            onChange={(e) => setLoginEmail(e.target.value)}
          ></input>
          <input
            type="password"
            className="rounded-2xl px-5 py-1 w-4/5 md:w-full border-[1px] border-gray-300 m-1 focus:shadow-md focus:border-gray-400 focus:outline-none focus:ring-0"
            placeholder="Password"
            onChange={(e) => setLoginPassword(e.target.value)}
          ></input>
          <div className="flex justify-end w-full">
            <p className="text-black underline mb-5 text-sm font-medium cursor-pointer" >
              Forget Password?
            </p>
          </div>
          <button  onClick={handleSignUp} className="rounded-2xl text-white bg-blue-400 w-2/5 px-4 py-2 shadow-md hover:text-blue-600 hover:bg-white transition duration-200 ease-in">
            Sign In
          </button>
        </div>
        <div className="inline-block border-[1px]  mt-1 justify-center w-20 border-blue-600 border-solid"></div>
        <p className="text-black mt-6 text-sm">Don't have an account?</p>
        <p
          className="text-black underline mb-4 text-sm font-medium cursor-pointer"
          onClick={() => setIsLogin(false)}
        >
          Create a New Account?
        </p>
      </div>
    );
  };
  const SignUpForm = () => {
   


    return (
      <div className="bg-blue-400 text-white rounded-2xl shadow-2xl  flex flex-col w-full  md:w-1/3 items-center max-w-4xl transition duration-1000 ease-in">
        <h2 className="p-3 text-4xl font-bold text-white">Sea Electronics</h2>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <h3 className="text-xl font-semibold text-white pt-2">Create Account!</h3>

        {/* Inputs */}
        <div className="flex flex-col items-center justify-center mt-2 ">
          <input
            type="text"
            style={{ color: "#000" }}
            className="rounded-2xl px-5 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Name"
            value={name}
            onChange={(e) =>setName(e.target.value)}
          ></input>
          <input
            type="email"
            style={{ color: "#000" }}
            className="rounded-2xl px-5 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Email"
            value={registerEmail}
            onChange={(e) => setRegisterEmail(e.target.value)}
          ></input>
          <input
            type="password"
            style={{ color: "#000" }}
            className="rounded-2xl px-5 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Password"
            value={registerPassword}
            onChange={(e) => setRegisterPassword(e.target.value)}
          ></input>
          <input
            type="tel"
            style={{ color: "#000" }}
            className="rounded-2xl px-5 py-1 w-4/5 md:w-full border-[1px] border-blue-400 m-1 focus:shadow-md focus:border-pink-400 focus:outline-none focus:ring-0"
            placeholder="Phone Number"
            value={registerTel}
            onChange={(e) => {
              const inputVal = e.target.value;
              const numericVal = parseInt(inputVal);
          
              if (!isNaN(numericVal)) {
                setRegisterTel(numericVal);
              } else {
                setRegisterTel(""); // Reset to empty string if the input is not a valid number
              }
            }}
          ></input>
          
         <select id="postType" value={registerPoste} onChange={(e) =>setRegisterPoste(e.target.value)} style={{ color: 'gray' }} className="rounded-2xl px-5 py-1 w-4/5 md:w-full  focus:border-pink-400  border-[1px] m-1 border-gray-400 " required>
         <option  value="" style={{ color: '#000' }}>Sélectionner un poste</option>
         <option value="developer" style={{ color: '#000' }}>Développeur</option>
         <option value="designer"style={{ color: '#000' }}>Rousource Humaine</option>
         <option value="manager" style={{ color: '#000' }}>Manager</option>
         <option value="other" style={{ color: '#000' }}>Autre</option>
       </select>
     
        
         <button
  className="rounded-2xl mt-2 mb-2 text-blue-400 bg-white w-1/3 px-2 py-2 shadow-md hover:text-white hover:bg-blue-400 transition duration-200 ease-in"
  onClick={handleSignUp}
>
  Sign Up
</button>
        </div>
        <div className="inline-block border-[1px] justify-center w-20 border-white border-solid"></div>
        <p className="text-white mt-6 text-m">Already have an account?</p>
        <p
          className="text-white underline mb-4 text-m font-medium cursor-pointer"
          onClick={() => setIsLogin(true)}
        >
          Sign In
        </p>
      </div>
    );
  };

  return (
   
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      {isLogin ? <LoginForm /> : <SignUpForm />}
    </div>
   
  );
};

export default Login;