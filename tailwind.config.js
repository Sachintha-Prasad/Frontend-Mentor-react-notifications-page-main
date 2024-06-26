/** @type {import('tailwindcss').Config} */
export default {
    content: ["./index.html", "./src/**/*.{js,jsx}"],
    theme: {
        extend: {
            fontFamily: {
                jakarta: "'Plus Jakarta Sans', sans-serif"
            },
            colors: {
                red: "hsl(1, 90%, 64%)",
                blue: "hsl(219, 85%, 26%)",
                white: "hsl(0, 0%, 100%)",
                "very-light-grayish-blue": "hsl(210, 60%, 98%)",
                "light-grayish-blue": {
                    1: "hsl(211, 68%, 94%)",
                    2: "hsl(205, 33%, 90%)"
                },
                "grayish-blue": " hsl(219, 14%, 63%)",
                "dark-grayish-blue": "hsl(219, 12%, 42%)",
                "very-dark-blue": "hsl(224, 21%, 14%)"
            },
            container: {
                center: true,
                padding: "2rem"
            }
        }
    },
    plugins: []
}
