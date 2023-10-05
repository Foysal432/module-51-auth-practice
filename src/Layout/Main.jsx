
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { Toaster } from 'react-hot-toast';

const Main = () => {
    return (
        <>
       <NavBar></NavBar>
       <Outlet></Outlet>
       <Toaster/>
       </>
    );
};

export default Main;