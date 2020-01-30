<template>
  <div id="app">
    <AppTaskSearch v-model="search" />
    <AppTaskList :tasks="filteredTasks" />
    <AppTaskAdd @addTask="addTask" />
  </div>
</template>

<script>
import tasks from "./api/tasks.js";
import AppTaskList from "./components/AppTaskList.vue";
import AppTaskSearch from "./components/AppTaskSearch.vue";
import AppTaskAdd from "./components/AppTaskAdd.vue";
export default {
  name: "app",
  created() {
    this.tasks = tasks;
  },
  data() {
    return {
      tasks: [],
      search: ""
    };
  },
  methods: {
    addTask(task) {
      this.tasks.push({
        title: task,
        completed: false
      });
    }
  },
  components: {
    AppTaskList,
    AppTaskSearch,
    AppTaskAdd
  },
  computed: {
    filteredTasks() {
      return this.tasks.filter(task => task.title.includes(this.search));
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

ul {
  text-align: left;
}
</style>
