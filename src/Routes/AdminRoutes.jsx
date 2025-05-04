
import useAdmin from "../hooks/useAdmin";
import useAuth from "../hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";


const AdminRoutes = ({children}) => {
    const location = useLocation()
    const {user, loading} = useAuth();
    const [isAdmin, isAdminLoading] = useAdmin();

    if(loading || isAdminLoading) {
        return <div className="w-10 h-10 animate-[spin_1s_linear_infinite] rounded-full border-4 border-r-sky-900 border-sky-400"></div>
    }
    
    if(user && isAdmin) {
        return children
    }
    return <Navigate to='/' state={{from: location}} replace></Navigate>
};

export default AdminRoutes;