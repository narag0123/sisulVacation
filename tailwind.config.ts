import type { Config } from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        screens: {
            "2xl": { max: "1535px" },
            // => @media (max-width: 1535px) { ... }

            xl: { max: "1279px" },
            // => @media (max-width: 1279px) { ... }

            lg: { max: "1023px" },
            // => @media (max-width: 1023px) { ... }

            md: { max: "767px" },
            // => @media (max-width: 767px) { ... }

            sm: { max: "639px" },
            // => @media (max-width: 639px) { ... }
        },
        colors: {
            black100: "#171717",
            black80: "#434343",
            black60: "#707070",
            black40: "#9c9c9c",
            black20: "#c9c9c9",

            primary100: "#c8ff00",
            primary80: "#d5ff3c",
            primary60: "#ddfe65",
            primary40: "#edffaa",
            primary20: "#f6ffd6",

            point: "#1B5FEB",
            point80: "#729BEF",

            bg: "#e9e9e9",
        },
        fontFamily: {
            ProximaNova: ["'ProximaNova'"],
        },
        extend: {
            backgroundImage: {
                "gradient-radial":
                    "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
                "gradient-filter-btn":
                    "linear-gradient(135deg, #ffffff, #e9e9e9)",
                "gradient-filter-btn-reverse":
                    "linear-gradient(315deg, #ffffff, #e9e9e9)",
            },
            boxShadow: {
                inner: "inset 3px 3px 1px rgba(0, 0, 0, 0.25)",
            },
        },
    },
    plugins: [],
};
export default config;
