/* eslint-disable react/no-unescaped-entities */
import { Link } from "react-router-dom";

const AuthLayouts = (props) => {
  const { children, title, type } = props;
  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-xs">
        <h1 className="text-3xl font-bold text-blue-600 mb-2">{title}</h1>
        <p className="font-medium tex-slate-500 mb-8">Welcome, Please enter your detail</p>
        {children}
        <p className="text-center text-slate-500 mt-3">
          {type === "login" ? "Don't have an account? " : "Already have an account? "}

          {type === "login" && (
            <Link to={"/register"} className="font-bold text-blue-600 hover:underline">
              Register
            </Link>
          )}

          {type === "register" && (
            <Link to={"/login"} className="font-bold text-blue-600 hover:underline">
              Login
            </Link>
          )}
        </p>
      </div>
    </div>
  );
};

export default AuthLayouts;
