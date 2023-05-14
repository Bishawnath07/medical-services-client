import { Outlet } from "react-router-dom";
import NavBer from '../Pages/Shared/NavBer/NavBer'
const Main = () => {
    return (
        <div className="max-w-6xl mx-auto">
            <NavBer></NavBer>
            <Outlet></Outlet>
        </div>
    );
};

export default Main;