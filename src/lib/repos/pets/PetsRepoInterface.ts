export type Pet = {
	name: string;
	heroImage: {
		src: string;
		alt: string;
	};
};

export interface PetsRepo {
	getAll(): Promise<Pet[]>;
}
