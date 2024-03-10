// const daisyui = require("daisyui");

/** @type {import('tailwindcss').Config}*/
// const config = {
// 	content: ["./src/**/*.{html,js,svelte,ts}"],

// 	theme: {
// 		extend: {},
// 	},

// 	plugins: [daisyui],
// };
/** @type {import('tailwindcss').Config}*/
export default {
	content: ["./src/**/*.{html,js,svelte,ts}"],

	theme: {
		extend: {},
	},

	plugins: [require("daisyui")],
};
