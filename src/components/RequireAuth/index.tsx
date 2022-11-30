import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const RequireAuth = ({ children }: { children: JSX.Element }) => {
    const { accessToken } = useAuth();
    const location = useLocation();
    if (!accessToken) {
      return <Navigate to="/login" state={{ from: location }} replace />;
    }
  
    return children;
  };
  
  export { RequireAuth };