import { reactive } from "vue";

export const notes = reactive({
  items: [],
  add(item) {
    this.items.push(item);
    localStorage.setItem("Notes", JSON.stringify(this.items));
    return notes;
  },
  remove(item) {
    const index = this.items.indexOf(item);
    this.items.splice(index, 1);
    localStorage.setItem("Notes", JSON.stringify(this.items));
    return notes;
  },
});
