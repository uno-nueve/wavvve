import { Outlet } from "react-router";
import { AuthProvider } from "../components/auth/authProvider";

export const Root = () => {
    return (
        <div className="bg-red-500 min-w-screen min-h-screen">
            <AuthProvider>
                <Outlet />
            </AuthProvider>
        </div>
    );
};
