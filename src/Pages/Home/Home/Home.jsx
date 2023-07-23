import Colleges from "../../Colleges/Colleges/Colleges";
import Banner from "../Banner/Banner";
import NewEvent from "../NewEvent/NewEvent";
import SchoolTime from "../SchoolTime/SchoolTime";


const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <NewEvent></NewEvent>
            <SchoolTime></SchoolTime>
            <Colleges></Colleges>
        </div>
    );
};

export default Home;