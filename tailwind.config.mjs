/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: 
    {
        extend: {
            fontFamily: {
                codystar: ["Codystar", "sans-serif"],
              },
            colors: {
                transparent: 'transparent',
                current: 'currentColor',
                'pc-coral': '#FF1054',
              },
        },
	},
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ],
}
