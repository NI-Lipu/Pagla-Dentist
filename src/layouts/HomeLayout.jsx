import React from 'react'
import Navbar from '../components/Navbar/Navbar'
import Banner from '../components/Banner/Banner'
import { Outlet } from 'react-router-dom'

const HomeLayout = () => {
   return (
      <div>
         <header>
            <Navbar></Navbar>
            <Banner></Banner>
         </header>
         <main>
            <section>
               <Outlet></Outlet>
            </section>
            <section></section>
         </main>
      </div>
   )
}

export default HomeLayout
