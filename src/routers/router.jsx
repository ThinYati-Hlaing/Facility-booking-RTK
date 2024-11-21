import { Route, Routes } from "react-router-dom";
import { route_configs } from "./config";

export default function RouteList () {
    return (
        <Routes>
            {route_configs.map(({path,element,access_type},index) => {
                return (
                    <Route
                        key={index}
                        path={path}
                        element={element}
                        access_type={access_type}
                    />
                )
            })}
        </Routes>
    )
}