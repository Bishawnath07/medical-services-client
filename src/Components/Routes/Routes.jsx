import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home/Home'
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import MyAppoinment from "../Pages/MyAppoinment/MyAppoinment";
import PrivateRoute from "./PrivateRoute";
import SignUp from "../Pages/SignUp/SignUp";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: '/' ,
            element: <Home></Home> ,
           
          } ,
        {
          path:'/login',
          element: <Login></Login> ,
        },
        {
            path: '/signup',
            element: <SignUp></SignUp>
        },
        {
          path:'/appointment/:id' ,
          element: <Appointment></Appointment> ,
          loader: ({params})=> fetch(`http://localhost:5000/doctors/${params.id}`)
        } ,
        {
          path: 'appointments',
          element:<PrivateRoute> <MyAppoinment></MyAppoinment></PrivateRoute>
        }
       
      ]
    },
  ]);

  export default router;