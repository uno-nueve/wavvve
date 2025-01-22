import { cn } from "@/utils/cn";
import { cva, VariantProps } from "class-variance-authority";
import { forwardRef, HTMLAttributes } from "react";

const buttonVariants = cva(
    "inline-flex items-center justify-center gap-2 whitespace-nowrap text-sm font-medium transition-colors",
    {
        variants: {
            variant: {
                default: "bg-primary text-primary-foreground hover:bg-primary-hover",
                secondary: "",
                outline: "",
                ghost: "bg-transparent hover:bg-secondary-hover",
                destructive: "",
            },
            size: {
                default: "px-4 py-2 h-10",
                sm: "p-2 h-10",
                lg: "",
                icon: "h-10 w-10 gap-0",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends HTMLAttributes<HTMLButtonElement>,
        VariantProps<typeof buttonVariants> {}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, ...props }, ref) => {
        return (
            <button
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
