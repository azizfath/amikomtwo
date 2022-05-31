<script>
	import { Clock } from 'svelte-loading-spinners';
</script>

<div class="sv-loading">
	<div class="flex flex-col justify-center items-center">
		<Clock size="100" color="#fff" unit="px" />
		<p class="text-white">Mohon menunggu</p>
	</div>
</div>

<style type="scss">
	.sv-loading {
		position: fixed;
		z-index: 4;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		background-color: rgba(0, 0, 0, 0.7);
		font-weight: bold;
		display: flex;
		justify-content: center;
		align-items: center;
	}
</style>
