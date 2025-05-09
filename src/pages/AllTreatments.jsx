import { Link, useLoaderData } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import SingleService from '../components/SingelService/SingleService'

const AllTreatments = () => {
   const data = useLoaderData()
   return (
      <div>
         <Navbar></Navbar>
         <div className="w-11/12 mx-auto">
            <h2 className="text-center mt-10 mb-5 font-bold text-3xl">
               All Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4">
               {data.map((service) => (
                  <SingleService
                     key={service.id}
                     service={service}
                  ></SingleService>
               ))}
            </div>
            <Link to={'/'} className="btn btn-primary my-5">
               Go Back
            </Link>
         </div>
      </div>
   )
}

export default AllTreatments
