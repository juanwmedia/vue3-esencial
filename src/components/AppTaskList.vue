<template>
  <div>
    <h1>Tasks</h1>
    <hr />
    <h6>Todas las tareas</h6>
    <ul>
      <li v-for="(task, $index) in tasks" :key="$index">{{ task.title }}</li>
    </ul>
    <h6>Tareas completadas</h6>
    <ul>
      <li v-for="(task, $index) in completedTasks" :key="$index">
        {{ task.title }}
      </li>
    </ul>
  </div>
</template>

<script>
import store from "@/store.js";
export default {
  name: "AppTaskList",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  },
  computed: {
    completedTasks() {
      return store.getters.completedTasks;
    }
  }
};
</script>
