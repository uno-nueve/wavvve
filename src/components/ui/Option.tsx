import { ReactNode } from "react";

type OptionProps = {
    children: ReactNode;
    onClick: () => void;
};

export const Option = ({ children, onClick }: OptionProps) => {
    return (
        <div className="cursor-pointer" onClick={onClick}>
            {children}
        </div>
    );
};
