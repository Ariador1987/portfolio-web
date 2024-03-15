<script>
	import { ThemeToggleIcon } from ".";
</script>

<header class="navbar sticky top-0 z-30 bg-base-100 bg-base-100/50 backdrop-blur">
	<div class="flex-1">
		<a class="btn btn-ghost text-xl" href="/"><h1>Photo Teo</h1></a>
	</div>
	<nav class="flex-none">
		<ul class="menu menu-horizontal items-center px-1">
			<li><a href="/">Home</a></li>
			<li><a href="/contact">Contact</a></li>
			<li><a href="/about">About</a></li>
			<li>
				<button onclick={window.toggleTheme}>
					<ThemeToggleIcon class="w-6" />
				</button>
			</li>
		</ul>
	</nav>
</header>

<style lang="postcss">
	.navbar {
		view-transition-name: main-nav;
	}
</style>
