import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './layout/Root';
import Home from './pages/Home/Home';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ErrorPage from './pages/ErrorPage/ErrorPage';
import AllTouristsSpot from './pages/AllTouristsSpot/AllTouristsSpot';
import AddTouristsSpot from './pages/AddTouristsSpot/AddTouristsSpot';
import MyList from './pages/MyList/MyList';
import AuthProvider from './providers/AuthProvider/AuthProvider';
import PrivateRoute from './routes/PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/all-tourists-spot",
        element: <PrivateRoute><AllTouristsSpot /></PrivateRoute>
      },
      {
        path: "/add-tourists-spot",
        element: <AddTouristsSpot />
      },
      {
        path: "/my-list",
        element: <MyList />
      },
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/login",
        element: <Login />
      },
      {
        path: "/register",
        element: <Register />
      },
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
