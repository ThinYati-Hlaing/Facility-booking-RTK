
import { ROUTE_ACCESS, ROUTE_PATHS } from "../constant/route";
import AuthProvider from "../provider/AuthProvider";
import RouteProvider from "../provider/RouteProvider";
import LoginPage from "../screens/auth/LoginPage";
import HomePage from "../screens/home/HomePage";

export const route_configs = [
    {
        path: ROUTE_PATHS.HOME,
        element: <RouteProvider>
            <HomePage />,
        </RouteProvider>,
        access_type: ROUTE_ACCESS.special_access
    },
    {
        path: ROUTE_PATHS.LOGIN,
        element: <AuthProvider>
            <LoginPage />
        </AuthProvider>
    }
]