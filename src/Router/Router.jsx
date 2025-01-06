import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import OurMenus from "../Pages/OurMenuPage/OurMenus/OurMenus";



  const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children: [
        {
            path: '/',
            element: <Home></Home>
        },
        {
          path:'/our-menu',
          element: <OurMenus></OurMenus>
        }
      ]
    },
  ]);

  export default router;