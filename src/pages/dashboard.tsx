import { sdk } from "../services/auth/auth";
import { useAtom } from "jotai";
import { sessionAtom } from "../atoms/session";
import { Link, Outlet } from "react-router";
import { Header } from "@/components/ui/header/header";
import { Tapbar } from "@/components/ui/tapbar/tapbar";

export const Dashboard = () => {
    const [user, setUser] = useAtom(sessionAtom);

    const logout = () => {
        sdk.logOut();
        setUser(null);
    };

    if (!user) return <Link to="/signin">Login</Link>;

    return (
        <div className="py-4">
            <Header label="Saved albums" />
            <div className="p-4">
                <button onClick={logout}>Logout</button>
                <Outlet />
            </div>
            <Tapbar />
        </div>
    );
};
