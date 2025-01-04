import { sdk } from "../services/auth/auth";
import { useAtom } from "jotai";
import { sessionAtom } from "../atoms/session";
import { Link, Navigate, Outlet } from "react-router";

export const Dashboard = () => {
    const [user, setUser] = useAtom(sessionAtom);

    const logout = () => {
        sdk.logOut();
        setUser(null);
    };

    if (!user) return <Link to="/signin">Login</Link>;

    return (
        <>
            <button onClick={logout}>Logout</button>
            {user && <Navigate to={`${user.id}`} replace={true} />}
            <Outlet />
        </>
    );
};
