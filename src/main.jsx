import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import AuthProvider from "./Component/Provider/AuthProvider.jsx";
import './index.css'

import {
  
  RouterProvider,
} from "react-router-dom";
import { router } from './Routes/Routes.jsx';
createRoot(document.getElementById('root')).render(
  <StrictMode>
  <AuthProvider>
    {" "}
    <RouterProvider router={router} />{" "}
  </AuthProvider>
</StrictMode>
)
