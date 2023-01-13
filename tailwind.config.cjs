const { fontFamily } = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
const config = {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		extend: {
			fontFamily: {
				sans: ['SUIT Variable', ...fontFamily.sans]
			}
		}
	},

	plugins: []
};

module.exports = config;
