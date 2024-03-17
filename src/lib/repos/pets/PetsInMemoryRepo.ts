import type { Pet, PetsRepo } from "./PetsRepoInterface";
import bazaSlika from "$lib/repos/pets/images/macka-PT-HD.jpg?enhanced";
import mamaBeba from "./images/bebaMamaTataRuke-LD.jpg?enhanced";
import doggo from "./images/doggo-PT.jpg?enhanced";
import vjencanje from "./images/vjencanje-5add-OTO-HD.jpg?enhanced";

class PetsInMemoryRepo implements PetsRepo {
	#pets: Pet[] = [
		{
			name: "Mary",
			favoriteActivity: "Running around and barking",
			heroImage: {
				src: bazaSlika,
				alt: "Mary",
			},
		},
		{
			name: "Jane",
			favoriteActivity: "Running around and Panting",
			heroImage: {
				src: mamaBeba,
				alt: "Jane being a chimpanzee",
			},
		},
		{
			name: "Joseph",
			favoriteActivity: "Whaling around and barking",
			heroImage: {
				src: doggo,
				alt: "Joseph being cute",
			},
		},
		{
			name: "Mark",
			favoriteActivity: "Screaming around and barking",
			heroImage: {
				src: vjencanje,
				alt: "Mark being awesome",
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
