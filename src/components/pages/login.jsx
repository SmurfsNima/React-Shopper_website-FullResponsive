import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="w-full h-[100vh] bg-pink-200 pt-[5%]">
      <div className="w-[600px] h-[550px] bg-white py-[5%] px-[7%] m-auto">
        <h2 className="font-bold text-3xl">{login ? "Login" : "Sign up"}</h2>
        <div className="flex flex-col gap-8 mt-4  ">
          <input
            className={`border-[1px] h-[45px] pl-3  ${login ? "hidden" : ""}`}
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border-[1px] h-[45px] pl-3"
            type="email"
            placeholder="Your email"
          />
          <input
            className="border-[1px] h-[45px] pl-3"
            type="password"
            placeholder="Your Password"
          />
        </div>
        <button className="w-full bg-red-500 mt-6 h-[40px] text-white font-semibold rounded-xl">
          Continue
        </button>
        <p className="mt-4 font-medium text-[18px]">
          {login ? "don`t have a account ?" : "aleardy have a account? "}
          <span
            onClick={() => setLogin(!login)}
            className="text-red-500 font-bold cursor-pointer "
          >
            {login ? "Sign Up" : "Login here"}
          </span>
        </p>
        <div className="flex mt-4 items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p>By continuing, i aggre to terms</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
