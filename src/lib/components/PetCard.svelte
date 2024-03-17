<script lang="ts">
	import type { Pet } from "$lib/repos/pets/PetsRepoInterface";

	const { name, heroImage, favoriteActivity } = $props<Pet>();
	const { src, alt } = heroImage;
</script>

<div class="card glass size-full">
	{#if src}
		<figure>
			<enhanced:img {src} {alt} class="block max-h-full max-w-full object-cover" />
		</figure>
	{/if}
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<p class="flex-grow">{favoriteActivity}</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Learn now!</button>
		</div>
	</div>
</div>
