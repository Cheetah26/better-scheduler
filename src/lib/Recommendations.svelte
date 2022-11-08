<script>
  import { store } from "$lib/store.js";

  let events = [...$store.events]
    .filter((e) => !$store.selected.includes(e.id))
    .sort(() => 0.5 - Math.random())
    .slice(0, 5);
</script>

<div>
  <h2>Recommended Events:</h2>
  <ul>
    {#each events as event}
      <li><a href="/events/event-{event.name}">{event.name}</a></li>
    {/each}
  </ul>
</div>
