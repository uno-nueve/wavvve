/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                geist: ["Geist", "sans-serif"],
            },
            colors: {
                primary: "hsl(var(--primary))",
                "primary-foreground": "hsl(var(--primary-foreground))",
                "primary-hover": "hsl(var(--primary-hover))",
                "primary-disabled": "hsl(var(--primary-disabled))",
                secondary: "hsl(var(--secondary))",
                "secondary-foreground": "hsl(var(--secondary-foreground))",
                "secondary-hover": "hsl(var(--secondary-hover))",
                disabled: "hsl(var(--disabled))",
                "disabled-foreground": "hsl(var(--disabled-foreground))",
                "outline-disabled-foreground": "hsl(var(--outline-disabled-foreground))",
                border: "hsl(var(--border))",
                ring: "hsl(var(--ring))",
                destructive: "hsl(var(--destructive))",
                "destructive-foreground": "hsl(var(--destructive-foreground))",
                "destructive-hover": "hsl(var(--destructive-hover))",
                "destructive-ring": "hsl(var(--destructive-ring))",
                accent: "hsl(var(--accent))",
            },
        },
    },
    plugins: [],
};
