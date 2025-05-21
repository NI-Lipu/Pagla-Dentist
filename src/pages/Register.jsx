import { useContext, useState } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { AuthContext } from '../provider/AuthProvider'
import { useNavigate } from 'react-router-dom'

const Register = () => {
   const { registerWithEmailAndPassword, setUser, profileUpdate } =
      useContext(AuthContext)
   const navigate = useNavigate()
   const [error, setError] = useState('')
   console.log(error)
   const handleSubmit = (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const photo = e.target.photo.value
      const password = e.target.password.value

      // Password validation
      if (password.length < 6) {
         setError('Password Should be at least 6 characters')
         return
      }
      registerWithEmailAndPassword(email, password)
         .then((result) => {
            const user = result.user
            setUser(user)
            profileUpdate({ displayName: name, photoURL: photo })
            setUser(null)
            navigate('/login')
            setError('')
         })
         .catch((error) => {
            const errorMessage = error.message
            if (
               errorMessage === 'Firebase: Error (auth/email-already-in-use).'
            ) {
               setError('The email has already been used.')
               return
            }
            setError(errorMessage)
         })
   }
   return (
      <>
         <Navbar></Navbar>
         <div className="hero mt-10">
            <div className="hero-content flex-col">
               <div className="text-center lg:text-left">
                  <h1 className="text-5xl font-bold mb-10">Register now!</h1>
               </div>
               <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-10 pt-5">
                  <form className="card-body" onSubmit={handleSubmit}>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Name</span>
                        </label>
                        <input
                           type="text"
                           name="name"
                           placeholder="name"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Email</span>
                        </label>
                        <input
                           type="email"
                           name="email"
                           placeholder="email"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Photo-URL</span>
                        </label>
                        <input
                           type="url"
                           name="photo"
                           placeholder="photo"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div className="form-control">
                        <label className="label">
                           <span className="label-text">Password</span>
                        </label>
                        <input
                           type="password"
                           name="password"
                           placeholder="password"
                           className="input input-bordered"
                           required
                        />
                     </div>
                     <div>
                        {error && (
                           <p className="text-red-600 text-lg font-medium">
                              {error}
                           </p>
                        )}
                     </div>
                     <div className="form-control mt-6">
                        <button className="btn btn-primary w-full">
                           Register
                        </button>
                     </div>
                  </form>
               </div>
            </div>
         </div>
      </>
   )
}

export default Register
