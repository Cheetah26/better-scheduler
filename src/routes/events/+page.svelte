<script>
  import { data } from "$lib/data.js";
  import Actions from "$lib/Actions.svelte";

  let search = "";

  const weekdays = ["M", "T", "W", "R", "F"];
  let daysFilter = [];

  function filter(search, daysFilter) {
    let results = data.events;

    results = results.filter((e) =>
      e.name.toUpperCase().includes(search.toUpperCase())
    );

    if (daysFilter.length > 0) {
      results = results.filter((e) => {
        let eventDays = e.times.split(" ")[0].split("");

        return (
          eventDays.length <= daysFilter.length &&
          eventDays.every((d) => daysFilter.includes(d))
        );
      });
    }

    return results;
  }

  $: results = filter(search, daysFilter);
</script>

<h1>Events list</h1>

<section class="filters">
  <label for="search">
    Search event names:
    <input type="text" name="search" id="search" bind:value={search} />
  </label>

  <div class="weekdayFilter">
    Filter by day:
    {#each weekdays as day}
      <label for={day}>
        {day}
        <input type="checkbox" name={day} value={day} bind:group={daysFilter} />
      </label>
    {/each}
  </div>
</section>

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
    {#each results as event}
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
        <td class="center">
          <span>✔</span>
        </td>
        <td class="center">
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

  tbody > tr:hover {
    color: var(--light-text);
    background-color: var(--accent);
  }
  tbody > tr:hover a {
    color: lightgray;
  }

  td.center {
    text-align: center;
  }

  .filters {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    padding: 0.5rem;
  }

  .weekdayFilter label {
    border: 1px solid var(--foreground);
    margin: 0.25rem;
    padding: 0.1rem;
  }
</style>
