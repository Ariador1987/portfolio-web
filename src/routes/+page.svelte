<script lang="ts">
	import { Hero, Pets } from "$lib/components";

	const pets = [
		{ name: "Mary" },
		{ name: "Jane" },
		{ name: "Joseph" },
		{ name: "Mary" },
		{ name: "Garfield" },
	];
</script>

<Hero />
<Pets {pets} />
