<template>
  <div>
    <li
      class="row my-1 mx-auto flex w-2/4 items-center justify-between rounded border bg-gray-100 py-1 px-4 text-gray-600"
      v-for="(todo, index) in todos"
      :key="index"
    >
      <input type="checkbox" />
      {{ todo.content }}
      <button>削除</button>
    </li>
  </div>
</template>

<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoList",
  props: {
    todos: {
      required: false,
    },
  },
  setup() {
    return {
    };
  },
});
</script>

<style></style>
