<template>
  <!-- ルーティングの確認のため一応残している -->
  <!-- <ul>
      <li class="text-sky-400/100 underline">
        <router-link :to="{ path: '/' }">HOME</router-link>
      </li>
      <li class="text-sky-400/100 underline">
        <router-link :to="{ name: 'About' }">About</router-link>
      </li>
    </ul>
    <router-view></router-view> -->
  <!-- ここからToDoを実装していく -->
  <div class="container mx-auto py-10">
    <div class="mx-auto flex w-2/4">
      <input
        type="text"
        class="w-85 hadow focus:shadow-outline mr-3 flex-1 appearance-none rounded border py-2 leading-tight text-gray-700 focus:outline-none"
        v-model="task"
      />
      <button class="w-15 flex rounded border border-gray-400 bg-white py-2 px-4 font-semibold text-gray-800" @click="addTodo">追加</button>
    </div>
    <TodoList :todos="todos" />
  </div>
</template>

<script>
import { ref } from "vue";
import TodoList from "./components/modules/TodoList.vue";

export default {
  name: "App",
  components: { TodoList },
  setup() {
    const newTodo = ref("");
    const todos = ref();

    const task = ref();

    const addTodo = () => {
      todos.value.push({ content: task.value, isDone: false });
      localStorage.setItem("todoList", JSON.stringify(todos.value));
      console.log(todos.value);
      console.log("local:", localStorage);
    };
    return { newTodo, todos, task, addTodo };
  },
  mounted() {
    this.todos = JSON.parse(localStorage.getItem("todoList")) || [];
  },
};
</script>
