<script lang="ts">
	type Props = {
		name: string;
	};

	const { name } = $props<Props>();
</script>

<div class="card glass w-full">
	<figure>
		<img
			src="https://daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg"
			alt="car!"
		/>
	</figure>
	<div class="card-body">
		<h2 class="card-title">{name}</h2>
		<p>How to park your car at your garage?</p>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Learn now!</button>
		</div>
	</div>
</div>
