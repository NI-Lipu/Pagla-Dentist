import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import AllTreatments from '../pages/AllTreatments'
import Login from '../pages/Login'

const router = createBrowserRouter([
   {
      path: '/',
      element: <HomeLayout></HomeLayout>,
   },
   {
      path: '/all-treatments',
      element: <AllTreatments></AllTreatments>,
   },
   {
      path: '/login',
      element: <Login></Login>,
   },
])

export default router
