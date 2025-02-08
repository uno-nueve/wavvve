import { House, Library, Search, User } from "lucide-react";
import { NavLink } from "react-router";
import { useAtomValue } from "jotai";
import { ReactNode } from "react";
import { sessionAtom } from "@/atoms";
import { Button } from "@/components";

const NavButton = ({ target, children }: { target: string; children: ReactNode }) => {
    return (
        <NavLink
            to={target}
            className={({ isActive }) => (isActive ? "text-accent" : "text-black")}
        >
            <Button size="icon" variant="ghost">
                {children}
            </Button>
        </NavLink>
    );
};

export const Tapbar = () => {
    const user = useAtomValue(sessionAtom);

    return (
        <footer className="flex justify-center w-screen border-t h-14">
            <div className="flex justify-between w-[280px] self-end h-[50px]">
                <NavButton target="overview">
                    <House />
                </NavButton>
                <NavButton target="search">
                    <Search />
                </NavButton>
                <NavButton target="collection">
                    <Library />
                </NavButton>
                <NavButton target={`${user?.id}`}>
                    <User />
                </NavButton>
            </div>
        </footer>
    );
};
