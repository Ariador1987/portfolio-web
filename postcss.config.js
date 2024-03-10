// const tailwindcss = require("tailwindcss");
// const autoprefixer = require("autoprefixer");

// const config = {
// 	plugins: [
// 		//Some plugins, like tailwindcss/nesting, need to run before Tailwind,
// 		tailwindcss(),
// 		//But others, like autoprefixer, need to run after,
// 		autoprefixer,
// 	],
// };

// export default {
// 	plugins: [require("tailwindcss"), require("autoprefixer")],
// };

// module.exports = config;

export default {
	plugins: {
		"tailwindcss/nesting": {},
		tailwindcss: {},
		autoprefixer: {},
	},
};
