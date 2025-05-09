import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import AllTreatments from '../pages/AllTreatments'
import Login from '../pages/Login'
import Services from '../components/Services/Services'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout></HomeLayout>,
      children: [
         {
            path: '/',
            element: <Services></Services>,
            loader: () => fetch('/service.json'),
         },
      ],
   },
   {
      path: '/all-treatments',
      element: <AllTreatments></AllTreatments>,
      loader: () => fetch('/service.json'),
   },
   {
      path: '/login',
      element: <Login></Login>,
   },
])

export default router
