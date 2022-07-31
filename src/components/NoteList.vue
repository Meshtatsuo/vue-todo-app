<script>
import { notes } from "../state/store";
import NoteItem from "./NoteItem.vue";
export default {
  name: "NoteList",
  Data() {
    return { notes };
  },
  setup() {
    return { notes };
  },
  components: { NoteItem },
};
</script>

<template>
  <div id="list">
    <div v-if="notes" :key="notes">
      <ul v-for="(item, index) in Object.values(notes.items)" :key="index">
        <NoteItem :note="item" />
      </ul>
    </div>
    <div v-else>No Notes Yet!</div>
  </div>
</template>

<style scoped>
#list {
  background-color: #334;
  color: #eefdfe;
  border-top: solid 2px #eefdfe;
  padding: 1em;
  height: 95vh;
  margin: 0;
  padding: 0;
}

#list li {
  color: white;
}
</style>
