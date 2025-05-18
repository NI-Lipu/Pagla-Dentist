import React from 'react'

const Register = () => {
   return (
      <div className="hero bg-base-200 min-h-screen">
         <div className="hero-content flex-col">
            <div className="text-center lg:text-left">
               <h1 className="text-5xl font-bold mb-10">Register now!</h1>
            </div>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl px-10 pt-5">
               <form className="card-body">
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
   )
}

export default Register
