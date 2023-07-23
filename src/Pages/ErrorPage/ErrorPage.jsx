import { Link } from "react-router-dom";
import errorImg from "../../assets/images/errorImage.jpg";
import { FaArrowLeft } from 'react-icons/fa';

const ErrorPage = () => {
    return (
        <div>
            <img src={errorImg} alt="" />
            <div className='flex text-5xl font-bold text-center mt-5 gap-4 '>
                <FaArrowLeft></FaArrowLeft>
                <button className='bg-primaryColor  px-4 p-2 rounded-lg' > <Link to='/'>Back To Home</Link></button>

            </div>
        </div>
    );
};

export default ErrorPage;