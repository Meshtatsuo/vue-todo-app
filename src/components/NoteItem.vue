<script>
export default {
  name: "NoteItem",
  props: {
    note: String,
  },
};
</script>

<template>
  <div id="note-item">
    <li>{{ note }}</li>
  </div>
</template>

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
