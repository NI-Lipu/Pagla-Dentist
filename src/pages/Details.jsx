import { useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'

const Details = () => {
   const data = useLoaderData()
   const { id, treatmentName, description, image, cost } = data

   return (
      <>
         {' '}
         <Navbar></Navbar>
         <h2 className="text-center mt-10 mb-8 font-bold text-3xl">Details</h2>
         <div className="card bg-blue-100 w-11/12 mx-auto">
            <figure className="px-10 pt-10">
               <img
                  src={image}
                  className="rounded-xl  h-[400px] object-cover"
               />
            </figure>
            <div className="card-body items-center text-center">
               <h2 className="card-title font-bold">{treatmentName}</h2>
               <p>{description}</p>
               <div className="card-actions mt-3">
                  <button className="btn btn-primary">Book appointment</button>
               </div>
            </div>
         </div>
      </>
   )
}

export default Details
