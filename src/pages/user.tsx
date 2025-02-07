import { sessionAtom } from "@/atoms/session";
import { sdk } from "@/services/auth/auth";
import { useAtom } from "jotai";

export const UserPage = () => {
    const [user, setUser] = useAtom(sessionAtom);

    const logout = () => {
        sdk.logOut();
        setUser(null);
    };

    return <div>{user && <button onClick={logout}>Logout</button>}</div>;
};
