<script>
  import { page } from "$app/stores";
  import { data } from "$lib/data.js";

  let error = false;
  let event = data.events.find((e) => e.name == $page.params.name);
  if (event == null) {
    error = true;
  }
</script>

{#if error}
  <h2>Error</h2>
  <p>We couldn't find the requested event</p>
{:else}
  <div>
    <h2>Event: {event.name}</h2>
    <div class="actions" style="float: right">
      <button>Add to schedule</button>
    </div>
    <h3>Description:</h3>
    <p>{event.desc}</p>
    <h3>When:</h3>
    <p>{event.times}</p>
    <h3>Detailed Info:</h3>
    <p>{event.info}</p>
  </div>
{/if}

<style>
  button {
    background-color: var(--accent);
    border: none;
    margin: 0 0.5em;

    color: var(--light-text);
    padding: 0.25em;
  }

  button:hover {
    cursor: pointer;
  }

  .actions {
    background-color: var(--foreground);
    padding: 10px;
  }
</style>
