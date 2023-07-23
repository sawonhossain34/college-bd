import { Link } from "react-router-dom";


const College = (college) => {
    const { college_image, college_name, college_rating, admission_date, research_count } = college;
    console.log(college.college_name);
    return (
        <div className="card w-96 bg-emerald-200 shadow-xl image-full">
             <figure><img src={college_image} alt="college image" /></figure>
             <div className="card-body">
                 <h2 className="card-title">{college_name}</h2>
                 <p>Rating :{college_rating}</p>
                 <p>Admission Date :{admission_date}</p>
                 <p> Research Count{research_count}</p>
                 <div className="card-actions justify-end">
                     <button className="btn bg-primaryColor"><Link to="/">more details</Link></button>
                 </div>
             </div>
         </div>
    );
};

export default College;