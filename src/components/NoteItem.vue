<script>
import { notes } from "@/state/store";

export default {
  name: "NoteItem",
  props: {
    note: String,
  },
  methods: {
    removeNote: (note) => {
      notes.remove(note);
    },
  },
};
</script>

<template>
  <div id="note-item">
    <li>
      <p>{{ note }}</p>
      <button :id="note" @click.prevent="removeNote(this.note)">-</button>
    </li>
  </div>
</template>

<style scoped>
li {
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: left;
  border-bottom: solid 1px white;
}
p {
  padding: 2%;
  width: 90%;
  font-size: 20px;
  font-weight: bold;
}
button {
  width: 10%;
  height: 35px;
  margin: 0;
  padding: 0;
  background-color: #445;
  border: none;
  color: #eefdfe;
  font-size: 24px;
  font-weight: bold;
}
</style>
