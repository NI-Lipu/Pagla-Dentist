import { useContext } from 'react'
import Navbar from '../components/Navbar/Navbar'
import { AuthContext } from '../provider/AuthProvider'

const Register = () => {
   const { registerWithEmailAndPassword, setUser, profileUpdate } =
      useContext(AuthContext)
   const handleSubmit = (e) => {
      e.preventDefault()
      const name = e.target.name.value
      const email = e.target.email.value
      const photo = e.target.photo.value
      const password = e.target.password.value
      registerWithEmailAndPassword(email, password)
         .then((result) => {
            const user = result.user
            setUser(user)
            profileUpdate({ displayName: name, photoURL: photo })
         })
         .catch((error) => {
            const errorMessage = error.message
            console.log(errorMessage)
         })
      console.log(name, email, photo, password)
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
