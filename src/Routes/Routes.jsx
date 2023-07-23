import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Colleges from "../Pages/Colleges/Colleges/Colleges";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Admission from "../Pages/Admission/Admission";
import MyCollege from "../Pages/MyCollege/MyCollege";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path:'/',
            element: <Home></Home>
        },
        {
          path: '/colleges',
          element: <Colleges></Colleges>
        },
        {
          path: '/admission',
          element: <Admission></Admission>
        },
        {
          path: '/mycollege',
          element: <MyCollege></MyCollege>
        },
      ]
    },
  ]);