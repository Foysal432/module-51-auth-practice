import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Main from './Layout/Main';
import Home from './components/Home';
import Register from './components/Register';
import Login from './components/Login';
import AuthProvider from './Privider/Authprovider';
import PrivateRoute from './PrivateRoute';
import Route from './components/Route';
const router = createBrowserRouter([
  {
    path: "/",
    element:<Main></Main>,
    children:[{
      path:'/',
      element:<Home></Home>,
    },
    {
      path:'/register',
      element:<Register></Register>,
    },
    {
      path:'/login',
      element:<Login></Login>
    },
    {
      path:'/Private',
      element:<PrivateRoute>
        <Route></Route>
      </PrivateRoute>
    }
  ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
<AuthProvider>
<RouterProvider router={router} />
</AuthProvider>
  </React.StrictMode>,
)
