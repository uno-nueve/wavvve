import { Link, Outlet, useLocation } from "react-router";
import { AuthProvider } from "../components/auth/authProvider";

const Welcome = () => {
    return (
        <div className="h-[calc(100vh-32px)] flex flex-col items-center justify-between py-14">
            <h1>Welcome!</h1>
            <Link to="signin">Start</Link>
        </div>
    );
};

export const Root = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen p-4 min-w-screen font-geist">
            {location.pathname === "/" && <Welcome />}
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </div>
    );
};
