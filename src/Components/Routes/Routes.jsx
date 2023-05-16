import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home/Home'
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import MyAppoinment from "../Pages/MyAppoinment/MyAppoinment";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: '/' ,
            element: <Home></Home> ,
            loader: () => fetch('http://localhost:5000/doctors')
        } ,
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
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