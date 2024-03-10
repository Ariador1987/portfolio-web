<script lang="ts">
	import { PetCard } from ".";

	type Props = {
		pets: Array<{ name: string }>;
	};

	const { pets } = $props<Props>();
</script>

<section>
	<h2 class="mb-6 text-4xl">Highligted pets</h2>
	<ul class="grid items-center justify-center gap-8 md:grid-cols-2 lg:grid-cols-3">
		{#each pets as pet}
			{@const { name } = pet}
			<li>
				<PetCard {name} />
			</li>
		{/each}
	</ul>
</section>
