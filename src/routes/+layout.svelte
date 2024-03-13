<script lang="ts">
	import "../app.pcss";
	import { Head, Header } from "$components";
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	};

	let { children } = $props<Props>();
</script>

<Head />
<Header />
<!-- <slot /> -->
{@render children()}
