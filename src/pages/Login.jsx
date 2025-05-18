import { FcGoogle } from 'react-icons/fc'
import { Link } from 'react-router-dom'

const Login = () => {
   return (
      <div className="hero bg-base-200 min-h-screen">
         <div className="hero-content flex-col">
            <div className="text-center">
               <h1 className="text-5xl font-bold mb-10">Login now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
               <form className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Email</span>
                     </label>
                     <input
                        type="email"
                        placeholder="email"
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
                        placeholder="password"
                        className="input input-bordered"
                        required
                     />
                     <label className="label">
                        <a href="#" className="label-text-alt link link-hover">
                           Forgot password?
                        </a>
                     </label>
                  </div>
                  <p className="font-medium">
                     New in this website? Please{'   '}
                     <Link
                        to="/register"
                        className="text-green-500 cursor-pointer underline text-lg"
                     >
                        Register.
                     </Link>
                  </p>
                  <div className="form-control mt-6">
                     <button className="btn w-full btn-primary">Login</button>
                  </div>
               </form>

               <div>
                  <p className="text-center text-lg mb-3 font-bold">or</p>
                  <button className="block text-3xl mx-auto">
                     <FcGoogle />
                  </button>
                  <p className="text-center mb-10 mt-2">Login with google</p>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Login
