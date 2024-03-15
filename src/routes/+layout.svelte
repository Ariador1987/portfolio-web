<script lang="ts">
	import "../app.pcss";
	import { Footer, Head, Header } from "$components";
	import { type Snippet } from "svelte";
	import { onNavigate } from "$app/navigation";

	type Props = {
		children: Snippet;
	};

	let { children } = $props<Props>();

	onNavigate((navigation) => {
		if (
			document?.startViewTransition &&
			navigation.from?.url.href !== navigation.to?.url.href
		) {
			if (navigation.delta && navigation.delta < 0) {
				document.documentElement.dataset.back = "true";
			} else {
				document.documentElement.removeAttribute("data-back");
			}

			return new Promise((resolve) => {
				document.startViewTransition &&
					document.startViewTransition(async () => {
						resolve();
						await navigation.complete;
					});
			});
		}
	});

	$effect(() => {
		document.documentElement.dataset.testid = "hydrated";
	});
</script>

<Head />

<Header />
{@render children()}
<Footer />
