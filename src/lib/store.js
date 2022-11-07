import { writable } from "svelte/store";
import { data } from './data.js';

function createStore() {
  const { subscribe, set, update } = writable(data);

  let current;
  subscribe(c => current = c);

  return {
    subscribe,
    selectEvent: (id) => update(current => {
      if (!current.selected.includes(id)) current.selected.push(id)
      return current
    }),
    deselectEvent: (id) => update(current => {
      let idx = current.selected.indexOf(id);
      if (idx > -1) current.selected.splice(idx, 1);
      return current
    }),
    getSelected: () => current.selected.map(s => current.events.find(e => e.id == s)),
  }
}

export const store = createStore();