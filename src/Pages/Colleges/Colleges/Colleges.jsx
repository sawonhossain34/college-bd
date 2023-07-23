import { Helmet } from 'react-helmet-async';
import useColleges from '../../../hooks/useColleges';
import College from '../../Shared/College/College';


const Colleges = () => {
    const [colleges] = useColleges(); 
    // console.log(colleges.name );
    


    return (
        <section>
            <Helmet>
                <title>CollegeBD || Colleges</title>

            </Helmet>
            <h1 className='text-4xl font-bold m-10 text-center'>
                All Colleges
            </h1>
            
            <div className='grid md:grid-cols-2 mx-auto gap-10'>
                {
                    colleges.map(college => <College
                        key={college.college_id}
                        college={college}
                    ></College>)
                }
            </div>

        </section>
    );
};

export default Colleges;