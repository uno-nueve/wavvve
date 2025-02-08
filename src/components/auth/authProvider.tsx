import { ReactNode, useEffect } from "react";
import { useAtom } from "jotai";
import { useLocation } from "react-router";
import { sessionAtom } from "@/atoms";
import { sdk } from "@/services";

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

    return <>{children}</>;
};
