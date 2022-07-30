import { reactive } from "vue";

export const notes = reactive({
  items: [{ message: "Test 1" }, { message: "Test 2" }],
  add(item) {
    this.items.push(item);
  },
});
