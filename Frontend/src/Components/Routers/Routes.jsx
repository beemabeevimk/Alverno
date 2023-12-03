// App.js (or your root component)
import React from "react";
import { createBrowserRouter} from "react-router-dom";
import LoginPage from "../LoginPage/LoginPage";
import SignupPage from "../SignupPage/SignupPage";
import HomePage from "../HomePage/HomePage";
import AdminLogin from "../AdminSignup/AdminLogin";
// import PrivateRoutesUser from "../PrivateRoutesUser"



const router = createBrowserRouter([
  { path: "/login", element: <LoginPage /> },
  { path: "/", element: <HomePage/> },
  { path: "/logout", element: <LoginPage/> },
  { path: "/signup", element: <SignupPage /> },
  { path: "/adminLogin", element: <AdminLogin/> },
  
]);


export default router;
