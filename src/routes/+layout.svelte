<script>
	import "./styles.css";
	import logo from "$lib/images/Design_Designs_2.0.png";
</script>

<div class="app">
	<header>
		<img
			src={logo}
			alt="Design Designs Logo"
			style="width: auto; height: 100%;"
		/>
		<nav>
			<a href="/">Home</a>
			<a href="/schedule">Schedule</a>
			<a href="/events">Events</a>
			<div class="spacer" />
			<a href="/logout">Logout</a>
		</nav>
	</header>

	<main>
		<slot />
	</main>

	<footer>
		<p>Better Scheduler &copy; DesignDesigns - 2022</p>
	</footer>
</div>

<style>
	header {
		height: 3rem;
		display: flex;
		flex-direction: row;
	}
	nav {
		display: flex;
		flex-direction: row;

		background-color: var(--foreground);
		padding: 0.5rem;
		flex-grow: 1;
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
