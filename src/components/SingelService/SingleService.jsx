import React from 'react'
import { NavLink } from 'react-router-dom'

const SingleService = ({ service }) => {
   const { id, cost, description, image, treatmentName } = service
   return (
      <div className="card bg-base-100 shadow-md">
         <figure>
            <img src={image} className="h-36 w-full object-cover" alt="Shoes" />
         </figure>
         <div className="card-body">
            <h2 className="card-title">
               {treatmentName}
               <div className="bg-blue-200 px-2 py-1 rounded-xl">${cost}</div>
            </h2>
            <p title={description}>{description.slice(0, 70)}.....</p>
            <NavLink to={`/detail/${id}`}>
               <button className="btn btn-primary">Checkout More</button>
            </NavLink>
         </div>
      </div>
   )
}

export default SingleService
