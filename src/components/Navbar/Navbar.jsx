import { useContext } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AuthContext } from '../../provider/AuthProvider'

const Navbar = () => {
   const { user, logOut } = useContext(AuthContext)
   const links = (
      <>
         <li>
            <NavLink to={'/'}>Home</NavLink>
         </li>
         <li>
            <NavLink to={'/all-treatments'}>All Treatments</NavLink>
         </li>
         <li>
            <NavLink to={'/appointment'}>My Appointments</NavLink>
         </li>
         <li>
            <NavLink to={'/profile'}>Profile</NavLink>
         </li>
      </>
   )
   return (
      <div className="navbar bg-blue-950 text-white w-11/12 mx-auto">
         <div className="navbar-start">
            <div className="dropdown">
               <div
                  tabIndex={0}
                  role="button"
                  className="btn btn-ghost lg:hidden"
               >
                  <svg
                     xmlns="http://www.w3.org/2000/svg"
                     className="h-5 w-5"
                     fill="none"
                     viewBox="0 0 24 24"
                     stroke="currentColor"
                  >
                     <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h8m-8 6h16"
                     />
                  </svg>
               </div>
               <ul
                  tabIndex={0}
                  className="menu menu-sm dropdown-content bg-blue-950 rounded-box z-[1] mt-3 w-52 p-2 shadow"
               >
                  {links}
               </ul>
            </div>
            <a className="btn btn-ghost text-xl">Pagla Dentist</a>
         </div>
         <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
         </div>
         <div className="navbar-end">
            {user ? (
               <Link to={'/'} onClick={logOut} className="btn">
                  Log Out
               </Link>
            ) : (
               <Link to={'/login'} className="btn">
                  Login
               </Link>
            )}
         </div>
      </div>
   )
}

export default Navbar
