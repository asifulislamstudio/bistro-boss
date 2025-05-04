import { createBrowserRouter } from "react-router-dom";
import Root from "../Layout/Root";
import Home from "../Pages/Home/Home";
import Menu from "../Pages/Menu/Menu";
import Shop from "../Pages/Shop/Shop";
import Login from "../Pages/Login/Login";
import Signup from "../Pages/SignUP/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Contact from "../Pages/Contact/Contact";
import Dashboard from "../Layout/Dashboard";
import Cart from "../Pages/Dashboard/Cart";
import AllUsers from "../Pages/Dashboard/AllUsers";
import AddItems from "../Pages/Dashboard/AddItems";
import AdminRoutes from "./AdminRoutes";
import MangeItems from "../Pages/ManageItems/MangeItems";
import Edititems from "../Pages/Dashboard/Edititems";
import Payment from "../Pages/Dashboard/Payment";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
            path: "/",
            element: <Home></Home>
        },
        {
            path: "/menu",
            element: <PrivateRoutes> <Menu></Menu> </PrivateRoutes>
        },
        {
            path : "/shop",
            element: <Shop></Shop>
        },
        {
          path: "/shop/:category",
          element: <Shop></Shop>
        },
        {
          path: "/login",
          element: <Login></Login>
        },
        {
          path: "/signup",
          element: <Signup></Signup>
        },
        {
          path: "/contact",
          element: <Contact></Contact>
        }
      ]
    },
    {
      path: 'dashboard',
      element: <PrivateRoutes><Dashboard></Dashboard></PrivateRoutes>,
      children: [
        {
          path: 'cart',
          element: <Cart></Cart>
        },
        {
          path: 'payment',
          element: <Payment></Payment>
        },
        // Admin Routes

        {
          path: 'users',
          element: <AdminRoutes><AllUsers></AllUsers></AdminRoutes>
        },
        {
          path: 'addItems',
          element: <AdminRoutes><AddItems></AddItems></AdminRoutes>
        },
        {
          path: 'manageItems',
          element: <AdminRoutes><MangeItems></MangeItems></AdminRoutes>
        },
        {
          path: 'editItem/:id',
          element: <AdminRoutes><Edititems></Edititems></AdminRoutes>,
          loader: ({params}) => fetch(`http://localhost:8000/menu/${params.id}`)
        },
        {
          path: 'paymenthistory',
          element: <PaymentHistory></PaymentHistory>
        }

      ]
    }
  ]);

export default router;