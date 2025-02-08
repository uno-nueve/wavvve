import { sessionAtom } from "@/atoms";
import { useAtomValue } from "jotai";
import { useNavigate } from "react-router";

export const Login = () => {
    const user = useAtomValue(sessionAtom);
    const navigate = useNavigate();

    if (user?.id) navigate(`/app`, { replace: true });

    return <></>;
};
