<script lang="ts">
	import type { Pet } from "$lib/repos/pets/PetsRepoInterface";

	const { name, heroImage } = $props<Pet>();
	const { src, alt } = heroImage;
</script>

<div class="card glass size-full">
	<figure class="max-h-60">
		<img src={src || ""} alt={alt || ""} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<p class="flex-grow">How to park your car at your garage?</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Learn now!</button>
		</div>
	</div>
</div>
