<template>
  <NoteForm />
  <NoteList />
</template>

<script>
import NoteForm from "./components/NoteForm.vue";
import NoteList from "./components/NoteList.vue";
import { notes } from "./state/store";

export default {
  name: "App",
  components: {
    NoteForm,
    NoteList,
  },
  created() {
    let items = localStorage.getItem("Notes");
    items = JSON.parse(items);
    items.forEach((item) => {
      notes.add(item);
    });
  },
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background-color: #112121;
  height: 100vh;
}
</style>
