import { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { AuthContext } from '../provider/AuthProvider'

const Profile = () => {
   const { user, loading } = useContext(AuthContext)
   // const [error, setError] = useState(false)
   // console.log(user)
   return (
      <div>
         <Navbar></Navbar>
         {loading ? (
            <div className="flex items-center justify-center h-96">
               <span className="loading loading-spinner loading-xl "></span>
            </div>
         ) : (
            <div className="card mx-auto mt-10 bg-blue-100 w-96 shadow-xl">
               <figure className="px-10 pt-10">
                  <img
                     src={user?.photoURL}
                     alt="User"
                     className="rounded-full w-16 h-16"
                  />
               </figure>
               <div className="card-body items-center text-center">
                  <h2 className="card-title">{user?.displayName}</h2>
                  <p>{user?.email}</p>
                  <div className="card-actions">
                     <button className="btn btn-primary">
                        Update Profile!
                     </button>
                  </div>
               </div>
            </div>
         )}
      </div>
   )
}

export default Profile
