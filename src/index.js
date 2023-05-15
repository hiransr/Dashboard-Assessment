import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'
import App from './App'
import reportWebVitals from './reportWebVitals'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { GoogleOAuthProvider } from '@react-oauth/google'
import Dash from './dashboard/Dashboard'
import Profile from './context/Profile'
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [],
  },
  {
    path: '/dashboard',
    element: <Dash />,
    children: [],
  },
])

ReactDOM.render(
  <GoogleOAuthProvider clientId="777999854987-pada20qiv133ad053mc035qb9fnit3mj.apps.googleusercontent.com">
    <React.StrictMode>
      <Profile>
        <RouterProvider router={router} />
      </Profile>
    </React.StrictMode>
  </GoogleOAuthProvider>,
  document.getElementById('root'),
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
