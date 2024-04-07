import { ReactNode } from "react";

type ListProps = {
    children: ReactNode;
    variant: "col" | "grid";
};

export const List = ({ children, variant }: ListProps) => {
    return (
        <div className="w-full md:w-[37rem]">
            {variant === "col" ? (
                <ul className="list-none">{children}</ul>
            ) : (
                <ul className="grid grid-cols-2 gap-3 list-none">{children}</ul>
            )}
        </div>
    );
};
