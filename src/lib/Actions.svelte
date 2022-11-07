<script>
  import { store } from "$lib/store.js";
  export let eventID;

  $: selected = $store.selected.includes(eventID);
</script>

<div>
  <button on:click={store.selectEvent(eventID)} disabled={selected}>+</button>
  <button on:click={store.deselectEvent(eventID)} disabled={!selected}>-</button
  >
</div>
