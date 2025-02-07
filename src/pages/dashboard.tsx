import { useAtomValue } from "jotai";
import { sessionAtom } from "../atoms/session";
import { Link, Outlet } from "react-router";
import { Header } from "@/components/ui/header/header";
import { Tapbar } from "@/components/ui/tapbar/tapbar";

export const Dashboard = () => {
    const user = useAtomValue(sessionAtom);

    if (!user) return <Link to="/signin">Login</Link>;

    return (
        <div className="py-4">
            <Header label="Saved albums" />
            <div className="p-4 h-[calc(100vh-144px)] overflow-hidden">
                <Outlet />
            </div>
            <Tapbar />
        </div>
    );
};
