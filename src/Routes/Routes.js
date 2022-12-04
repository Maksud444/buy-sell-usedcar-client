
import { createBrowserRouter } from "react-router-dom";
import Home from "../Pages/Home/Home";
import Main from "../Layout/Main";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/Login/SignUp";
import Allcar from "../Pages/Home/Allcar/Allcar";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoutes";
import MyOrders from "../Pages/Dashboard/MyOrders/MyOrders";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import SellerRoutes from "./SellerRoutes";
import MyProducts from "../Pages/Dashboard/MyProducts/MyProducts";
import AddProducts from "../Pages/Dashboard/AddProducts/AddProducts";
import ManageProducts from "../Pages/Dashboard/ManageProducts/ManageProducts";
import Payment from "../Pages/Dashboard/Payment/Payment";
import Blog from "../Blog/Blog";
import ErrorPage from "../Pages/Shared/ErrorPage/ErrorPage";
import Report from "../Pages/Dashboard/Report/Report";



 const router = createBrowserRouter([
    {
        path:'/',
        element:<Main></Main>,
        errorElement: <ErrorPage />,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/blog',
                element:<Blog></Blog>
            },
           
            {
                path:'/signup',
                element:<SignUp></SignUp>
            },
          {
            path:'/car/:id',
            element: <PrivateRoute><Allcar></Allcar></PrivateRoute>,
            loader:({params}) => fetch(`http://localhost:5000/allcar/${params.id}`)
          }
        ]
    },
    {
        path: '/dashboard',
        element: <PrivateRoute> <DashboardLayout></DashboardLayout></PrivateRoute>,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/dashboard',
                element: <MyOrders></MyOrders>
            },
            {
                path:'/dashboard/allusers',
                element:<AdminRoutes><AllUsers></AllUsers></AdminRoutes>
            },
            {
                path:'/dashboard/ayproducts',
                element:<SellerRoutes><MyProducts></MyProducts></SellerRoutes>
            },
            {
                path:'/dashboard/addproducts',
                element:<SellerRoutes><AddProducts></AddProducts></SellerRoutes>
            },
            {
                path:'/dashboard/manageproducts',
                element:<SellerRoutes><ManageProducts></ManageProducts></SellerRoutes>
            },
            {
                path:'/dashboard/payment/:id',
                element:<PrivateRoute><Payment></Payment></PrivateRoute>,
                loader: ({params}) => fetch(`http://localhost:5000/orders/${params.id}`)
            },
            {
                path:'/dashboard/report',
                element:<AdminRoutes><Report></Report></AdminRoutes>
            },
           
        ]
    }
])
    // dashboard
    

export default router;