/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {
			colors: {
				primary: '#002236',
				delete: '#780000',
				deleteHover: '#5c0000',
				hover: '#003049',
				text: '#002236',
			},
		},
	},
	plugins: [],
};
