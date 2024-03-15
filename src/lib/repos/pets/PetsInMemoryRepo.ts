import type { Pet, PetsRepo } from "./PetsRepoInterface";

class PetsInMemoryRepo implements PetsRepo {
	#pets: Pet[] = [
		{
			name: "Mary",
			favoriteActivity: "Running around and barking",
			heroImage: {
				src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
				alt: "Mary",
			},
		},
		{
			name: "Jane",
			favoriteActivity: "Running around and Panting",
			heroImage: {
				src: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				alt: "Jane being a chimpanzee",
			},
		},
		{
			name: "Joseph",
			favoriteActivity: "Whaling around and barking",
			heroImage: {
				src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
				alt: "Joseph being cute",
			},
		},
		{
			name: "Mark",
			favoriteActivity: "Screaming around and barking",
			heroImage: {
				src: "https://images.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
				alt: "Mark being awesome",
			},
		},
		{
			name: "Garfield",
			favoriteActivity: "Crying around and barking",
			heroImage: {
				src: "https://images.pexels.com/photos/45201/kitty-cat-kitten-pet-45201.jpeg",
				alt: "Garfield playing around as usual",
			},
		},
	];

	async add(pet: Pet): Promise<void> {
		this.#pets.push(pet);
	}

	async getAll(): Promise<Pet[]> {
		return this.#pets;
	}
}

export const petsRepo = new PetsInMemoryRepo();
