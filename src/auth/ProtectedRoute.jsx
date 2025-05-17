import { useContext } from "react";
import { Navigate } from "react-router-dom";
import  {Authcontext}  from "./Authcontext";

export const ProtectedRoute = ({ children, requiredRole }) => {
    const [userdata] = useContext(Authcontext);

    if (!userdata.role) {
        return <Navigate to="/login" replace />;
    }
    
    if (requiredRole && userdata.role !== requiredRole) {
        return <Navigate to="/" replace />;
    }

    return children; 
};

