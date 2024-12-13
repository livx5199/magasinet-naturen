/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
        colors: {
        transparent: "transparent",
        current: "currentColor",
        "green-950": "rgba(22, 41, 0, 1)",
        "green-900": "rgba(43, 77, 0, 1)",
        "green-800": "rgba(83, 154, 1, 1)",
        "green-700": "rgba(128, 235, 1, 1)",
        "green-600": "rgba(165, 255, 56, 1)",
        "green-500": "rgba(200, 255, 133, 1)",
        "green-400": "rgba(212, 255, 157, 1)",
        "green-300": "rgba(223, 255, 184, 1)",
        "green-200": "rgba(231, 255, 203, 1)",
        "green-100": "rgba(244, 255, 229, 1)",
        "green-50": "rgba(250, 255, 245, 1)",
        "darkgreen-900": "rgba(12, 22, 23, 1)",
        "darkgreen-950": "rgba(5, 10, 10, 1)",
        "darkgreen-800": "rgba(23, 45, 43, 1)",
        "darkgreen-700": "rgba(35, 67, 66, 1)",
        "darkgreen-600": "rgba(47, 87, 86, 1)",
        "darkgreen-500": "rgba(56, 109, 110, 1)",
        "darkgreen-400": "rgba(80, 155, 154, 1)",
        "darkgreen-300": "rgba(121, 185, 185, 1)",
        "darkgreen-200": "rgba(164, 208, 209, 1)",
        "darkgreen-100": "rgba(211, 233, 231, 1)",
        "darkgreen-50": "rgba(232, 243, 243, 1)",
        "purple-50": "rgba(232, 233, 243, 1)",
        "purple-100": "rgba(208, 211, 231, 1)",
        "purple-200": "rgba(158, 163, 203, 1)",
        "purple-300": "rgba(111, 119, 180, 1)",
        "purple-400": "rgba(75, 83, 144, 1)",
        "purple-500": "rgba(50, 56, 96, 1)",
        "purple-600": "rgba(40, 45, 76, 1)",
        "purple-700": "rgba(29, 33, 58, 1)",
        "purple-800": "rgba(20, 22, 37, 1)",
        "purple-900": "rgba(11, 12, 20, 1)",
        "purple-950": "rgba(5, 6, 10, 1)",
        "redwine-50": "rgba(242, 231, 244, 1)",
        "redwine-100": "rgba(227, 203, 230, 1)",
        "redwine-200": "rgba(201, 151, 205, 1)",
        "redwine-300": "rgba(174, 98, 182, 1)",
        "redwine-400": "rgba(133, 64, 139, 1)",
        "redwine-500": "rgba(83, 41, 86, 1)",
        "redwine-600": "rgba(66, 32, 69, 1)",
        "redwine-700": "rgba(49, 25, 52, 1)",
        "redwine-800": "rgba(32, 16, 35, 1)",
        "redwine-900": "rgba(16, 8, 17, 1)",
        "redwine-950": "rgba(10, 5, 10, 1)",
        "bordeaux-50": "rgba(243, 226, 228, 1)",
        "bordeaux-100": "rgba(232, 200, 205, 1)",
        "bordeaux-200": "rgba(212, 146, 155, 1)",
        "bordeaux-300": "rgba(189, 88, 101, 1)",
        "bordeaux-400": "rgba(141, 57, 68, 1)",
        "bordeaux-500": "rgba(86, 35, 42, 1)",
        "bordeaux-600": "rgba(69, 28, 33, 1)",
        "bordeaux-700": "rgba(51, 20, 25, 1)",
        "bordeaux-800": "rgba(36, 15, 18, 1)",
        "bordeaux-900": "rgba(18, 8, 8, 1)",
        "bordeaux-950": "rgba(8, 3, 4, 1)",
        "brown-50": "rgba(241, 241, 237, 1)",
        "brown-100": "rgba(227, 225, 222, 1)",
        "brown-200": "rgba(201, 196, 187, 1)",
        "brown-300": "rgba(173, 166, 154, 1)",
        "brown-400": "rgba(147, 138, 119, 1)",
        "brown-500": "rgba(114, 108, 91, 1)",
        "brown-600": "rgba(92, 83, 73, 1)",
        "brown-700": "rgba(67, 63, 54, 1)",
        "brown-800": "rgba(45, 42, 35, 1)",
        "brown-900": "rgba(22, 21, 18, 1)",
            "brown-950": "rgba(11, 11, 9, 1)"
        
        },

        fontFamily: {
            display: ["social-gothic", "sans-serif"],
            standard: ["Roboto Serif", "serif"] /* eksempel på ekstra font */,
        },
        
        fontSize: {
            xsmall: ["0.7rem", { lineHeight: "0.9rem" }],
            small: ["0.8rem", { lineHeight: "1.1rem" }],
            medium: ["1.3rem", { lineHeight: "1.5rem" }],
            large: ["1.9rem", { lineHeight: "2.2rem" }],
            xlarge: ["2.488rem", { lineHeight: "2.6rem" }],
            xxlarge: ["2.986rem", { lineHeight: "3rem" }],
        },
        
        borderRadius: {
            rounded: "10px"
        },
        
        boxShadow: {
            drop25: "4px 4px 4px 0 rgb(0 0 0 / 0.25)" /* x y blur spread farve / opacity */,
          },
    },
    extend: {
            
        spacing: {
            small: "1rem",
            medium: "2rem",
            large: "3rem",
            xlarge: "4rem",
        },
        height: {
            card1: "5rem",
          },

        },
	}
	plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/aspect-ratio'),
        require('@tailwindcss/container-queries'),
    ]

