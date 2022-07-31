import { reactive } from "vue";

export const notes = reactive({
  items: ["hi", "hello"],
  add(item) {
    this.items.push(item);
  },
});
