import type { LayoutServerLoad } from "./$types";

export type MetaTags = {
	title: string;
	description: string;
	ogImageUrl: string;
};

export const load: LayoutServerLoad = () => {
	const defaultMeta: MetaTags = {
		title: "Paulina Pullers",
		description: "Elevate your coding career",
		ogImageUrl: "https://picsum.photos/200",
	};

	return {
		defaultMeta,
	};
};
