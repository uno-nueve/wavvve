import { Link, Outlet, useLocation } from "react-router";
import { AuthProvider } from "../components/auth/authProvider";

export const Root = () => {
    const location = useLocation();

    return (
        <div className="bg-red-500 min-w-screen min-h-screen">
            {location.pathname === "/" && <Link to="signin">Start</Link>}
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </div>
    );
};
