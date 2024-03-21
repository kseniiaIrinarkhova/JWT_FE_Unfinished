import { Outlet } from "react-router-dom";
import { useAuth } from "../../contexts/auth/auth_context";

const ProtectedRoutes = () => {
    const {cookies} = useAuth();

  return (
    cookies.token ? <Outlet /> : <h1>You are not authorized to view this page</h1>
  )
}

export default ProtectedRoutes