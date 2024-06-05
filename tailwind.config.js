/** @type {import('tailwindcss').Config} */
export default {
	darkMode: "class",
	content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
	theme: {
		extend: {
			borderColor: {
				'contact-form-red': 'hsl(0, 66%, 54%)',
				'contact-form-idle': 'hsl(187, 24%, 22%)',
				'contact-form-green-600': 'hsl(169, 82%, 27%)'
			},
			backgroundColor: {
				'contact-form-white': 'hsl(0, 0%, 100%)',
				'contact-form-green-200': 'hsl(148, 38%, 91%)',
				'contact-form-green-600': 'hsl(169, 82%, 27%)'
			},
			textColor: {
				'contact-form-green-600': 'hsl(169, 82%, 27%)',
				'contact-form-grey-500': 'hsl(186, 15%, 59%)',
				'contact-form-grey-900': 'hsl(187, 24%, 22%)',
				'contact-form-red': 'hsl(0, 66%, 54%)'
			},
			ringColor: {
				'contact-form-green-600': 'hsl(169, 82%, 27%)'
			},
			outlineColor: {
				'contact-form-green-600': 'hsl(169, 82%, 27%)'
			}
		},
	},
	plugins: [
		require('@tailwindcss/forms')
	],
};
