<script>
  import { store } from "$lib/store.js";
  import Actions from "../../lib/Actions.svelte";

  $: selected = $store.selected.map((s) =>
    $store.events.find((e) => e.id == s)
  );
</script>

<h1>Schedule</h1>
<p>Here you can find all of your currently selected events</p>

<table>
  <thead class="list-header">
    <tr>
      <th>
        <span>Event Name</span>
      </th>
      <th>
        <span>Description</span>
      </th>
      <th>
        <span>Times</span>
      </th>
      <th>
        <span>Conflict Check</span>
      </th>
      <th>
        <span>Actions</span>
      </th>
    </tr>
  </thead>
  <tbody>
    {#each selected as event}
      <tr>
        <td>
          <a href="/events/event-{event.name}">{event.name}</a>
        </td>
        <td>
          <span>{event.desc}</span>
        </td>
        <td>
          <span>{event.times}</span>
        </td>
        <td>
          <span>✔</span>
        </td>
        <td>
          <span><Actions eventID={event.id} /></span>
        </td>
      </tr>
    {/each}
  </tbody>
</table>

<style>
  table {
    width: 100%;
    border-collapse: collapse;
  }

  thead {
    background-color: var(--foreground);
    color: var(--light-text);
  }

  tr {
    border-bottom: 1px solid var(--foreground);
  }
</style>
