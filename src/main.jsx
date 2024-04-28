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
import TouristSpotDetails from './components/TouristSpotDetails/TouristSpotDetails';
import UpdateTourists from './pages/UpdateTourists/UpdateTourists';
// import AddCountries from './pages/AddCountries/AddCountries';
import CountrySpots from './components/CountrySpots/CountrySpots';
import UpdateProfile from './pages/UpdateProfile/UpdateProfile';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        loader: () => fetch('http://localhost:4000/tourists')
      },
      {
        path: "/all-tourists-spot",
        element: <PrivateRoute><AllTouristsSpot /></PrivateRoute>,
        loader: () => fetch('http://localhost:4000/tourists')
      },
      {
        path: "/add-tourists-spot",
        element: <PrivateRoute><AddTouristsSpot /></PrivateRoute>
      },
      {
        path: "/tourist-spot-details/:id",
        element: <PrivateRoute><TouristSpotDetails /></PrivateRoute>,
        loader: () => fetch('http://localhost:4000/tourists')
      },
      {
        path: "/update-tourists/:id",
        element: <PrivateRoute><UpdateTourists /></PrivateRoute>,
        loader: ({params}) => fetch(`http://localhost:4000/tourists/${params.id}`)
      },
      {
        path: "/my-list",
        element: <PrivateRoute><MyList /></PrivateRoute>
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
      {
        path: "/update-profile",
        element: <UpdateProfile />
      },
      {
        path: "/country-spots/:countryName",
        element: <CountrySpots />,
        loader: () => fetch('http://localhost:4000/tourists'),
      },
      // {
      //   path: "/add-countries",
      //   element: <AddCountries />
      // },
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
