// eslint-disable-next-line
// const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	darkMode: false, // or 'media' or 'class'
	theme: { fontFamily: { sans: ['PT Sans'] } },
	variants: { extend: {} },
	plugins: [],
	mode: 'jit',
	purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}']
};
