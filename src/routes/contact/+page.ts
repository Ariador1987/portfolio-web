import type { MetaTags } from "../proxy+layout.server";
import type { PageLoad } from "./$types";

export const load: PageLoad = () => {
	const defaultMeta: MetaTags = {
		title: "Paulina Pullers",
		description: "Elevate your coding career",
		ogImageUrl: "https://picsum.photos/200",
	};

	return {
		defaultMeta,
	};
};
