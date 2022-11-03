<script>
	import "./styles.css";
</script>

<div class="app">
	<nav>
		<a href="/">Home</a>
		<a href="/schedule">Schedule</a>
		<a href="/events">Events</a>
		<div class="spacer" />
		<a href="/logout">Logout</a>
	</nav>

	<main>
		<slot />
	</main>

	<footer>
		<p>Better Scheduler &copy; DesignDesigns - 2022</p>
	</footer>
</div>

<style>
	nav {
		display: flex;
		flex-direction: row;

		background-color: var(--foreground);
		padding: 0.5rem;
	}

	a {
		background-color: var(--accent);
		border: none;
		margin: 0 0.5em;

		text-decoration: none;
		color: var(--light-text);
		padding: 0.25em;
	}

	a:hover {
		background-color: var(--highlight);
	}

	footer {
		margin: 0 auto;
		text-align: center;
	}
</style>
