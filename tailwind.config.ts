import daisyui from "daisyui";
import themes from "daisyui/src/theming/themes";
import defaultTheme from "tailwindcss/defaultTheme";
import type { Config } from "tailwindcss";

const themeOverrides = {
	"--rounded-box": "var(--radius)",
	"--rounded-btn": "var(--radius)",
	"--tab-radius": "var(--radius)",
	"--rounded-badge": "calc(var(--radius) * 2)",
};

const config: Config = {
	content: ["./src/**/*.{html,svelte,ts}"],

	darkMode: ["class", '[data-theme="dark"]'],

	theme: {
		fontFamily: {
			sans: ["var(--font-sans)", ...defaultTheme.fontFamily.sans],
			fancy: ["var(--font-fancy)", ...defaultTheme.fontFamily.serif],
		},
		container: {
			center: true,
			padding: "var(--padding-inline)",
		},
		extend: {
			boxShadow: {
				sm: "var(--shadow-1)",
				DEFAULT: "var(--shadow-2)",
				md: "var(--shadow-3)",
				lg: "var(--shadow-4)",
				xl: "var(--shadow-5)",
				"2xl": "var(--shadow-6)",
			},
			padding: {
				inline: "var(--padding-inline)",
			},
		},
	},
	daisyui: {
		themes: [
			{ light: { ...themes.retro, ...themeOverrides } },
			{ dark: { ...themes.coffee, ...themeOverrides } },
		],
	},
	plugins: [daisyui],
};

export default config;
