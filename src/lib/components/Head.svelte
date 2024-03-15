<script lang="ts">
	import { page } from "$app/stores";
</script>

<svelte:head>
	<title>{$page?.data?.defaultMeta?.title ?? "Photo Teo"}</title>
	<meta
		property="og:description"
		content={$page.data.defaultMeta?.description ?? "Awesome description"}
	/>
	<meta
		property="description"
		content={$page.data.defaultMeta?.description ?? "Awesome description"}
	/>
	<meta
		property="og:image"
		content={$page.data.defaultMeta?.ogImageUrl ?? "Awesome description"}
	/>
</svelte:head>
