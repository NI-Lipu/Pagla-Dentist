import { Link, useLoaderData } from 'react-router-dom'
import SingleService from '../SingelService/SingleService'

const Services = () => {
   const data = useLoaderData()

   return (
      <div className="w-11/12 mx-auto">
         <h2 className="text-center mt-10 mb-5 font-bold text-3xl">Services</h2>
         <div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-4  gap-4">
            {data.slice(0, 4).map((service) => (
               <SingleService
                  key={service.id}
                  service={service}
               ></SingleService>
            ))}
         </div>
         <Link to={'/all-treatments'} className="btn btn-primary my-5">
            All Services
         </Link>
      </div>
   )
}

export default Services
