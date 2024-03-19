import { useState } from "react";

const Login = () => {
  const [login, setLogin] = useState(false);

  return (
    <div className="w-full h-[100vh] bg-pink-200 pt-[5%] max-lg:pt-[50px] sm:h-[56vh]">
      <div className="w-[600px] h-[550px] bg-white py-[5%] px-[7%] m-auto max-lg:w-auto max-lg:max-w-[500px] max-lg:max-h-[500px] sm:h-[410px] sm:py-[8px] sm:px-[4%] xs:py-[3%] xs:px-[3%] ">
        <h2 className="font-bold text-3xl max-lg:my-[10px]">{login ? "Login" : "Sign up"}</h2>
        <div className="flex flex-col gap-8 mt-4 max-lg:gap-[20px] max-lg:mt-[20px]  ">
          <input
            className={`border-[1px] h-[45px] pl-3 max-lg:w-[95%] max-lg:h-[40px]  ${login ? "hidden" : ""}`}
            type="text"
            placeholder="Your Name"
          />
          <input
            className="border-[1px] h-[45px] pl-3 max-lg:w-[95%] max-lg:h-[40px]"
            type="email"
            placeholder="Your email"
          />
          <input
            className="border-[1px] h-[45px] pl-3 max-lg:w-[95%] max-lg:h-[40px]"
            type="password"
            placeholder="Your Password"
          />
        </div>
        <button className="w-full bg-red-500 mt-6 h-[40px] text-white font-semibold rounded-xl sm:text-[16px] xs:text-[14px]">
          Continue
        </button>
        <p className="mt-4 font-medium text-[18px] sm:text-[16px] xs:text-[14px] ">
          {login ? "don`t have a account ?" : "leardy have a account? "}
          <span
            onClick={() => setLogin(!login)}
            className="text-red-500 font-bold cursor-pointer "
          >
            {login ? "Sign Up" : "Login here"}
          </span>
        </p>
        <div className="flex mt-4 items-center gap-2">
          <input type="checkbox" name="" id="" />
          <p className="sm:text-[16px] xs:text-[14px] ">By continuing, i aggre to terms</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
