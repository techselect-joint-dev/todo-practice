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
    const todos = ref([
      { content: "Todo1", isDone: false },
      { content: "Todo2", isDone: true },
      { content: "Todo3", isDone: false },
    ]);
    return { newTodo, todos };
  },
};
</script>
