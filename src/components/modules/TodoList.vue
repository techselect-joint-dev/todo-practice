<template>
  <div>
    <li
      class="row my-1 mx-auto flex w-2/4 items-center justify-between rounded border bg-gray-100 py-1 px-4 text-gray-600"
      v-for="(todo, index) in todos"
      :key="index"
    >
      <TodoItem :todo="todo" :index="index" @remove="remove" />
    </li>
  </div>
</template>

<script>
import { defineComponent } from "vue";
import TodoItem from "./TodoItem.vue";

export default defineComponent({
  name: "TodoList",
  components: { TodoItem },
  props: {
    todos: {
      required: false,
    },
  },
  setup(props) {
    const remove = (index) => {
      //インデックス番目から、1つの要素を削除
      props.todos.splice(index, 1);
      localStorage.removeItem("todoList");
      localStorage.setItem("todoList", JSON.stringify(props.todos));
    };
    return {
      remove,
    };
  },
});
</script>

<style></style>
