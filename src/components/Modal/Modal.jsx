const Modal = () => {
   return (
      <dialog
         id="my_modal_5"
         className="modal modal-bottom sm:modal-middle overflow-hidden"
      >
         <div className="modal-box">
            <div className="card bg-base-100 max-w-sm shrink-0">
               <form className="card-body">
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">First Name</span>
                     </label>
                     <input
                        type="text"
                        placeholder="first-name"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Last Name</span>
                     </label>
                     <input
                        type="text"
                        placeholder="last-name"
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
                        placeholder="email"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Phone Number</span>
                     </label>
                     <input
                        type="number"
                        placeholder="phone"
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Appointment Date</span>
                     </label>
                     <input
                        type="date"
                        placeholder=""
                        className="input input-bordered"
                        required
                     />
                  </div>
                  <div className="form-control">
                     <label className="label">
                        <span className="label-text">Address</span>
                     </label>
                     <input
                        type="text"
                        placeholder="address"
                        className="input input-bordered"
                        required
                     />
                  </div>

                  <div className="modal-action form-control overflow-hidden">
                     <form method="dialog">
                        <button className="btn btn-primary">
                           Make Appointment
                        </button>
                     </form>
                  </div>
               </form>
            </div>
         </div>
      </dialog>
   )
}

export default Modal
