<template>
  <div>
    <form>
      <input v-on:input="updateNoteText" type="text" name="note" />
      <button @click.prevent="onSubmit">+</button>
    </form>
  </div>
</template>

<script>
import { notes } from "../state/store";
let currentNote = "";
export default {
  name: "NoteForm",
  props: {
    message: String,
  },
  methods: {
    onSubmit: () => {
      notes.add({ message: currentNote });
    },
    updateNoteText: (e) => {
      currentNote = e.target.value;
    },
  },
};
</script>

<style scoped>
form {
  display: flex;
}
input {
  padding: 0.5em;
  width: 80%;
  height: 26px;
  font-size: 1.5em;
  background-color: #334;
  border: none #ccdbdc;
  color: #eefdfe;
}
button {
  width: 20%;
  height: 50px;
  background-color: #445;
  border: none #ccdbdc;
  font-weight: bold;
  font-size: 2em;
  color: #eefdfe;
}

button:active {
  background-color: #556;
}
</style>
