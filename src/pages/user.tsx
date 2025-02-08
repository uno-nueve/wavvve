import { sessionAtom } from "@/atoms";
import { sdk } from "@/services";
import { useAtom } from "jotai";

export const UserPage = () => {
    const [user, setUser] = useAtom(sessionAtom);

    const logout = () => {
        sdk.logOut();
        setUser(null);
    };

    return <div>{user && <button onClick={logout}>Logout</button>}</div>;
};
