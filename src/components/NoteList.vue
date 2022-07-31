<template>
  <div id="list">
    <div v-if="list">
      <ul v-for="note in list" :key="note">
        <li>{{ note }}</li>
      </ul>
    </div>
    <div v-else>No notes</div>
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
  Data() {
    let list = notes;
    return list;
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
