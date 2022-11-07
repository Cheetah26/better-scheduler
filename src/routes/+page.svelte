<script>
	import Recommendations from "$lib/Recommendations.svelte";
</script>

<svelte:head>
	<title>Home</title>
</svelte:head>

<h1>Better Scheduler</h1>

<div id="content">
	<section>
		<h2>About:</h2>
		<p>The Better Scheduler is your new scheduling best friend.</p>
		<p>
			Your school has decided to make this your one-stop interface for all
			things scheduling.
		</p>
		<p>
			Go to the Events tab and get searching, then once you've selected a few
			courses, take a look at the Schedule tab to see your completed schedule.
		</p>
	</section>

	<section>
		<Recommendations />
	</section>
</div>

<style>
	#content {
		display: flex;
		flex-direction: row;
	}
	#content > * {
		width: 50%;
		margin: 1rem;
		border: 1px solid var(--foreground);
	}

	section {
		padding: 1rem;
	}
</style>
