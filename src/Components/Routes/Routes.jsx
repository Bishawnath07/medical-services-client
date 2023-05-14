import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from '../Pages/Home/Home/Home'
import Appointment from "../Pages/Appointment/Appointment";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main> ,
      children: [
        {
            path: '/' ,
            element: <Home></Home>
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
        }
       
      ]
    },
  ]);

  export default router;