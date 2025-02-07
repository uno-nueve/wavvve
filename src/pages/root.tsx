import { Link, Outlet, useLocation } from "react-router";
import { AuthProvider } from "../components/auth/authProvider";

const Welcome = () => {
    return (
        <div className="h-[calc(100vh-32px)] flex flex-col items-center justify-between py-14 px-4">
            <h1>Welcome!</h1>
            <Link to="signin">Start</Link>
        </div>
    );
};

export const Root = () => {
    const location = useLocation();

    return (
        <div className="min-h-screen text-sm min-w-screen md:text-base font-geist-mono">
            {location.pathname === "/" && <Welcome />}
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </div>
    );
};
