import {
    createBrowserRouter,
  } from "react-router-dom";
import MainLayout from "../MainLayout/MainLayout";
import Home from "../Pages/HomePage/Home/Home";
import OurMenus from "../Pages/OurMenuPage/OurMenus/OurMenus";
import OurShop from "../Pages/OurShopPage/OurShop/OurShop";
import SignIn from "../Pages/SignInPage/SignIn/SignIn";
import Register from "../Pages/RegisterPage/Register/Register";
import Dashboard from "../Pages/DashBoardPage/Dashboard/Dashboard";
import UserHome from "../Pages/DashBoardPage/UserHome/UserHome";
import MyCart from "../Pages/DashBoardPage/MyCart/MyCart";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import AllUsers from "../Pages/DashBoardPage/AllUsers/AllUsers";
import AddItems from "../Pages/DashBoardPage/AddItems/AddItems";
import AdminPrivate from "./AdminPrivate";
import ManageItems from "../Pages/DashBoardPage/ManageItems/ManageItems";
import UpdateMenu from "../Pages/DashBoardPage/UpdateMenu/UpdateMenu";
import Payment from "../Pages/DashBoardPage/Payment/Payment";
import PaymentHistory from "../Pages/DashBoardPage/Payment/PaymentHistory";



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
        },
        {
          path:'/our-shop',
          element: <OurShop></OurShop>
        },
        {
          path:'/sign-in',
          element: <SignIn></SignIn>
        },
        {
          path: '/register',
          element: <Register></Register>
        }
      ]
    },
    {
      path: '/dashboard',
      element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute>,
      children: [
       {
        path: 'home',
        element: <UserHome></UserHome>
       },
       {
        path: 'cart',
        element: <MyCart></MyCart>
       },
       {
        path: 'payment',
        element: <Payment></Payment>
       },
       {
        path: 'payment-history',
        element: <PaymentHistory></PaymentHistory>
       },
      //  for admin routes
       {
        path: 'all-users',
        element: <AdminPrivate><AllUsers></AllUsers></AdminPrivate>
       },
       {
        path: 'add-items',
        element: <AdminPrivate><AddItems></AddItems></AdminPrivate>
       },
       {
        path: 'manage-items',
        element: <AdminPrivate><ManageItems></ManageItems></AdminPrivate>,
       },
       {
        path: 'update-items/:id',
        element: <AdminPrivate><UpdateMenu></UpdateMenu></AdminPrivate>,
        loader: ({params}) => fetch(`http://localhost:5000/menu/${params.id}`)
      }
      ]
    }
  ]);

  export default router;