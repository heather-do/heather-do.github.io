import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	theme: {
		screens: {
			mobile: '768px',
			desktop: '1024px'
		},
		extend: {}
	},

	plugins: []
} satisfies Config;
