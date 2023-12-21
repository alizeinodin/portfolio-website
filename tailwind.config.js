// tailwind.config.js
module.exports = {
    content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                vazir: ['vazir', 'sans-serif'],
            },
        },
        boxShadow: {
            'shadow-1': '3px 3px 13px 0 rgba(0, 0, 0, 0.1)'
        }
    },
    variants: {
        extend: {},
    },
    plugins: [],
}