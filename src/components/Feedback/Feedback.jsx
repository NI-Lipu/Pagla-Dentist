const Feedback = ({ feedback }) => {
   return (
      <div className="card mx-8 card-compact bg-blue-100 w-72 shadow-xl mt-5">
         <figure>
            <img
               src={feedback.image}
               className="h-36 rounded-full mt-5"
               alt="Shoes"
            />
         </figure>
         <div className="card-body">
            <h2 className="card-title font-bold">{feedback.name}</h2>
            <p>
               <span className="font-bold text-lg">Feedback: </span>
               {feedback.feedback}
            </p>
            {/* md */}
            <div className="flex items-center">
               <div className="rating rating-md">
                  <input
                     type="radio"
                     name="rating-7"
                     className="mask mask-star-2 bg-orange-600"
                  />
                  <input
                     type="radio"
                     name="rating-7"
                     className="mask mask-star-2 bg-orange-400"
                     defaultChecked
                  />
                  <input
                     type="radio"
                     name="rating-7"
                     className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                     type="radio"
                     name="rating-7"
                     className="mask mask-star-2 bg-orange-400"
                  />
                  <input
                     type="radio"
                     name="rating-7"
                     className="mask mask-star-2 bg-orange-400"
                  />
               </div>
               <p className="font-bold text-xl ml-4 bg-blue-200 text-center rounded-full">
                  {feedback.rating}
               </p>
            </div>
            <p>
               <span className="font-bold text-lg">Date: </span>
               {feedback.date}
            </p>
         </div>
      </div>
   )
}

export default Feedback
