import { ReactNode, useState } from "react";

type TooltipProps = {
    text: string;
    children: ReactNode;
};

export const Tooltip = ({ text, children }: TooltipProps) => {
    const [showTooltip, setShowTooltip] = useState(false);

    function handleMouseEnter() {
        setShowTooltip(true);
    }

    function handleMouseLeave() {
        setShowTooltip(false);
    }

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            {children}
            {showTooltip && <div>{text}</div>}
        </div>
    );
};
