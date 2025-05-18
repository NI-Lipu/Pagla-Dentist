import React from 'react'
import { createBrowserRouter } from 'react-router-dom'
import HomeLayout from '../layouts/HomeLayout'
import AllTreatments from '../pages/AllTreatments'
import Login from '../pages/Login'
import Services from '../components/Services/Services'
import Details from '../pages/Details'
import Register from '../pages/Register'
import Profile from '../pages/Profile'

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
      path: '/detail/:id',
      element: <Details></Details>,
      loader: async ({ params }) => {
         const allServices = await fetch('/service.json')
         const allServicesData = await allServices.json()

         const singleData = allServicesData.find((d) => d.id == params.id)
         return singleData
      },
   },
   {
      path: '/profile',
      element: <Profile></Profile>,
   },

   {
      path: '/login',
      element: <Login></Login>,
   },
   {
      path: '/register',
      element: <Register></Register>,
   },
])

export default router
