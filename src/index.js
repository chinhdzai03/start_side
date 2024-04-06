import React from 'react';
import ReactDOM from 'react-dom/client';
import SignInSide from './Sign_in_side';
import SignUpSide from './Sign_up_side';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import { Outlet, Link } from "react-router-dom";

const router = createBrowserRouter([
  {
    path:"/",
    element: <SignInSide/>
  },
  {
    path:"/sign-up",
    element: <SignUpSide/>
  }

])

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
