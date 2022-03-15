<template>
  <div>
    <li
      class="row my-1 mx-auto flex w-2/4 items-center justify-between rounded border bg-gray-100 py-1 px-4 text-gray-600"
      v-for="(todo, index) in todos"
      :key="index"
    >
      <TodoItem :todo="todo" :index="index" @remove="remove" @edit="edit" />
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
      props.todos.splice(index, 1);
      localStorage.removeItem("todoList");
      localStorage.setItem("todoList", JSON.stringify(props.todos));
    };

    const edit = (index) => {
      // props.todos.splice(index,1)
      let contents = window.prompt("タスクを入力してください", "");
      props.todos.splice(index,1,{content:contents, isDone:false})
      localStorage.removeItem("todoList");
      localStorage.setItem("todoList", JSON.stringify(props.todos));
    }
    return {
      remove,
      edit,
    };
  },
});
</script>

<style></style>
