import React, { useState } from "react";

const Login = () => {
  const [currentState, setCurrentState] = useState("Sign Up");
  const onSumbitHandler = async (e) => {
    e.preventDefautl;
  };

  return (
    <form
      onSubmit={onSumbitHandler}
      className="flex flex-col items-center w-[90%] sm:max-w-96 m-auto mt-14 gap-4 text-gray-800"
    >
      <div className="inline-flex items-center gap-2 mb-2 mt-10">
        <p className="prata-regular text-3xl">{currentState}</p>
        <hr className="border-none h-[1.5px] w-8 bg-gray-800" />
      </div>
      {currentState === "Sign Up" && (
        <input
          className="w-full px-3 py-2 border border-gray-800"
          type=" requiredxt"
          placeholder="Name"
          required
        />
      )}
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="text"
        placeholder="Email"
        required
      />
      <input
        className="w-full px-3 py-2 border border-gray-800"
        type="Password"
        placeholder="Password"
        required
      />
      <div className="w-full flex justify-between text-sm mt-[-8px]">
        <p className="cursor-pointer">Forgot Password?</p>
        {currentState === "Sign Up" ? (
          <p
            onClick={() => setCurrentState("Login")}
            className="cursor-pointer"
          >
            Login Here
          </p>
        ) : (
          <p
            onClick={() => setCurrentState("Sign Up")}
            className="cursor-pointer"
          >
            Create an account
          </p>
        )}
      </div>
      <button className="bg-black text-white font-light px-8 py-2 mt-4">
        {currentState}
      </button>
    </form>
  );
};

export default Login;
