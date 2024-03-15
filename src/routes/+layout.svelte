<script lang="ts">
	import "../app.pcss";
	import { Footer, Head, Header } from "$components";
	import type { Snippet } from "svelte";

	type Props = {
		children: Snippet;
	};

	let { children } = $props<Props>();
</script>

<Head />

<Header />
{@render children()}
<Footer />
