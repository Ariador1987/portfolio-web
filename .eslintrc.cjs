/** @type { import("eslint").Linter.Config } */
module.exports = {
	root: true,
	extends: [
		"eslint:recommended",
		"plugin:@typescript-eslint/recommended",
		"plugin:svelte/recommended",
		"prettier",
	],
	parser: "@typescript-eslint/parser",
	plugins: ["@typescript-eslint"],
	parserOptions: {
		sourceType: "module",
		ecmaVersion: 2020,
		extraFileExtensions: [".svelte"],
	},
	env: {
		browser: true,
		es2017: true,
		node: true,
	},
	overrides: [
		{
			files: ["*.svelte"],
			parser: "svelte-eslint-parser",
			parserOptions: {
				parser: "@typescript-eslint/parser",
			},
		},
	],
	rules: {
		"@typescript-eslint/ban-ts-comment": ["warn"],
		"@typescript-eslint/no-var-require": ["off"],
		"@typescript-eslint/no-unused-vars": ["warn"],
		"no-constant-condition": ["off"],
		"svelte/no-at-html-tags": ["off"],
		"svelte/invalid-css-identifier": ["off"],
	},
};
