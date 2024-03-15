<script lang="ts">
	import { Hero, Pets } from "$lib/components";

	const { data } = $props();
	const { pets } = data;
</script>

<Hero />
<Pets {pets} />
