import { ReactNode, useEffect } from "react";
import { useAtom } from "jotai";
import { sessionAtom } from "../../atoms/session";
import { sdk } from "../../services/auth/auth";
import { useLocation } from "react-router";

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useAtom(sessionAtom);
    const location = useLocation();
    const target = location.pathname === "/signin";

    useEffect(() => {
        const getUser = async () => {
            const res = await sdk.currentUser.profile();
            setUser({ ...res });
        };
        if (location.pathname !== "/") {
            if (!user) getUser();
        }
    }, [target]);

    console.log("FROM PROVIDER:", user);
    console.log("TARGET:", target);

    return <>{children}</>;
};
