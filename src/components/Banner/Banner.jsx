import img from '../../assets/banner-dentist.jpg'
const Banner = () => {
   return (
      <div className="hero bg-blue-200 w-11/12 mx-auto pt-5 pb-3">
         <div className="hero-content flex-col md:flex-row-reverse">
            <div className="w-[100%]">
               <img src={img} className=" rounded-lg shadow-2xl" />
            </div>
            <div className="">
               <h1 className="text-5xl font-bold">Pagla Dentist!</h1>
               <p className="py-6">
                  Provident cupiditate voluptatem et in. Quaerat fugiat ut
                  assumenda excepturi exercitationem quasi. In deleniti eaque
                  aut repudiandae et a id nisi.
               </p>
               <button className="btn btn-primary">Get Started</button>
            </div>
         </div>
      </div>
   )
}

export default Banner
