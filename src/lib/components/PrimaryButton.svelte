<script lang="ts">
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	};

	const { children } = $props<Props>();
</script>

<button class="btn btn-primary">
	{#if children}
		{@render children()}
	{/if}
</button>
