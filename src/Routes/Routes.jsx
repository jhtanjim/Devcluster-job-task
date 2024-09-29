import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import ManageStudent from "../Component/Home/ManageStudent";
import AddStudent from "../Component/Home/AddStudent";
import EditStudent from "../Component/Home/EditStudent";
import Login from "../Component/Login/Login";
import SignIn from "../Component/SignIn/SignIn";



  export const router = createBrowserRouter([
    {
      path: "/",
          element: <Main />,
          children: [
              {
                  path: '/',
                  element:<Home/>
     },
              {
                  path: '/addStudent',
                  element:<AddStudent/>
     },
              {
                  path: '/managedStudent',
                element: <ManageStudent />,
                  loader:()=>fetch('http://localhost:5000/students')
     },
              {
                  path: '/editeddStudent/:id',
                element: <EditStudent />,
                  loader:({params})=>fetch(`http://localhost:5000/students/${params.id}`)
            },
            {
              path: "/login",
              element: <Login />,
            },
      
            {
              path: "/register",
              element: <SignIn />,
            },
             
              
      ]
    },
  ]);