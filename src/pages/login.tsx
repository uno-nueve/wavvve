import { useAtomValue } from "jotai";
import { sessionAtom } from "../atoms/session";
import { useNavigate } from "react-router";

export const Login = () => {
    const user = useAtomValue(sessionAtom);
    const navigate = useNavigate();

    if (user?.id) navigate(`/app/${user.id}`);

    return <></>;
};
