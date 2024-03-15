import { petsRepo } from "$lib/repos/pets/PetsInMemoryRepo";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async () => {
	const pets = await petsRepo.getAll();

	return {
		pets,
	};
};
