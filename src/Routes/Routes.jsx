import {
    createBrowserRouter,
    RouterProvider,
} from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Component/Home/Home";
import ManageStudent from "../Component/Home/ManageStudent";
import AddStudent from "../Component/Home/AddStudent";


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
                  element:<ManageStudent/>
     },
             
              
      ]
    },
  ]);