import { Navigate } from "react-router-dom";
import useAuth from "./components/hooks/useAuth";

const PrivateRoute = ({children}) => {
    const {user,loading}=useAuth()

// we have to wait here
if (loading) {
    return <span className="loading loading-dots loading-lg"></span>
}
// we have to wait here
    
    if (!user?.email) {
        return <Navigate to='/login'></Navigate>
    }
    return children
};

export default PrivateRoute;