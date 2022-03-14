<template>
  <input type="checkbox" />
  {{ todo.content }}
  <button @click="$emit('remove', index)">削除</button>
  <button @click="edit">編集</button>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "TodoItem",
  props: {
    todo: {
      required: false,
    },
    index: {
      required: false,
    },
  },
  emits: ["remove"],
  setup() {},
});
</script>
