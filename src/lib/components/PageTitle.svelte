<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children?: Snippet;
	};

	const { children } = $props<Props>();
</script>

<h2 class="font-fancy text-4xl font-bold underline underline-offset-4">
	{#if children}
		{@render children()}
	{:else}
		Find me on socials
	{/if}
</h2>
