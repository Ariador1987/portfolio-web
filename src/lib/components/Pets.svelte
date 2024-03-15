<script lang="ts">
	import { PetCard } from ".";
	import type { Pet } from "$lib/repos/pets/PetsRepoInterface";

	type Props = {
		pets: Array<Pet>;
	};

	const { pets } = $props<Props>();
</script>

<section class="container py-12">
	<h2 class="mb-6 text-4xl">Highligted pets</h2>
	<ul class="grid items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each pets as pet}
			{@const { name, heroImage } = pet}
			<li class="size-full">
				<PetCard {name} {heroImage} />
			</li>
		{/each}
	</ul>
</section>
