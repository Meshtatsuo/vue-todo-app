<template>
  <div id="list">
    <div :v-if="data">
      <ul :v-for="note in data" :key="note">
        <NoteItem :note="note" />
      </ul>
    </div>
  </div>
</template>

<script>
import { notes } from "../state/store";
import NoteItem from "./NoteItem.vue";
const data = Object.values(notes.items);

export default {
  name: "NoteList",
  methods: {},
  Data() {
    return data;
  },
  components: { NoteItem },
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
