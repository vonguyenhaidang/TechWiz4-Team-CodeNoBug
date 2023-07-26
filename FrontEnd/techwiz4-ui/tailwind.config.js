/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            width: {
                'custom-width-item': '40rem',

                // Add more custom widths as needed
            },
            height: {
                'custom-height-item': '52rem',
            },
            maxWidth: {
                'custom-max-width': '1440px',
            },
        },
    },
    plugins: [],
};
