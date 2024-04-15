import { ReactNode } from "react";

type ListProps = {
    children: ReactNode;
    variant: "col" | "grid";
};

export const List = ({ children, variant }: ListProps) => {
    return (
        <div className="w-full">
            {variant === "col" ? (
                <ul className="w-full px-3 pb-3 list-none bg-[#313030] border-x-2 border-b-2 border-[#4B4848] rounded-b-xl h-full md:h-[380px] overflow-y-scroll">
                    {children}
                </ul>
            ) : (
                <ul className="w-full pb-3 list-none md:gap-3 md:grid md:grid-cols-3">
                    {children}
                </ul>
            )}
        </div>
    );
};
