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
            loader: async () => {
               const servicesRes = await fetch('/service.json')
               const servicesData = await servicesRes.json()

               const feedbackRes = await fetch('/feedback.json')
               const feedbackData = await feedbackRes.json()
               return { servicesData, feedbackData }
            },
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
