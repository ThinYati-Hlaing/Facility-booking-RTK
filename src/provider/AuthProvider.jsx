import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { ROUTE_PATHS } from "../constant/route";

export default function AuthProvider({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();
    useEffect(() => {
        if (isAuthenticated) {
            navigate(ROUTE_PATHS.HOME);
        }
    }, [isAuthenticated, navigate]);
    return <>{!isAuthenticated && children}</>;
}
