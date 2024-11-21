import { useNavigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import { useEffect } from "react";
import { ROUTE_PATHS } from "../constant/route";

export default function RouteProvider({ children }) {
    const { isAuthenticated } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        if (!isAuthenticated) {
            navigate(ROUTE_PATHS.LOGIN);
        }
    }, [isAuthenticated, navigate]);
    return <>{isAuthenticated && children}</>;
}
