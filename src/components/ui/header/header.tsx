import { ChevronLeft } from "lucide-react";
import { Button } from "@/components";
import { useLocation, useNavigate } from "react-router";

export const Header = ({ label }: { label: string }) => {
    const location = useLocation();
    const navigate = useNavigate();

    return (
        <header className="relative flex items-center justify-center w-screen border-b h-14">
            {location.pathname === "/app" || location.pathname === "/app/overview" ? (
                <></>
            ) : (
                <Button
                    className="absolute left-0"
                    size="sm"
                    variant="ghost"
                    onClick={() => navigate(-1)}
                >
                    <ChevronLeft />
                    Back
                </Button>
            )}
            <h1 className="font-bold">{label}</h1>
        </header>
    );
};
