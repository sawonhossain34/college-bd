import { Outlet } from "react-router-dom";
import Footer from "../Pages/Shared/Footer/Footer";
import NavigationBer from "../Pages/Shared/NavigationBer/NavigationBer";


const Main = () => {
    return (
        <div>
            <NavigationBer></NavigationBer>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;