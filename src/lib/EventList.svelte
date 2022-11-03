<script>
  import { data } from "$lib/data.js";

  let search = "";

  $: results = data.events.filter((e) => e.name.includes(search));
</script>

<h1>Events list</h1>

<label for="search">
  Search:
  <input type="text" name="search" id="search" bind:value={search} />
</label>

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
          <span>{event.name}</span>
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
          <span />
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
