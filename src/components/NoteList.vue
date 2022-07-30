<template>
  <div id="list">
    <div v-if="notes">
      <ul v-for="note in notes?.items" :key="note.message">
        <li>{{ note.message }}</li>
      </ul>
    </div>
  </div>
</template>

<script>
import { notes } from "../state/store";

export default {
  name: "NoteList",
  props: {
    notes: [],
  },
  methods: {},
  data() {
    console.log(notes.items[0].message);
    return notes;
  },
};
</script>

<style scoped>
#list {
  background-color: #334;
  color: #eefdfe;
  border-top: solid 2px #eefdfe;
  padding: 1em;
  height: 95vh;
}

#list li {
  color: white;
}
</style>
