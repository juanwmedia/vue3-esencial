<template>
  <div id="app">
    <AppTaskSearch v-model="search" />
    <AppTaskList :tasks="filteredTasks" />
    <AppTaskAdd @addTask="addTask" />
  </div>
</template>

<script>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
  onActivated,
  onDeactivated,
  onErrorCaptured
} from "@vue/composition-api";
import useTasksSpace from "./use/tasksSpace.js";
import AppTaskList from "./components/AppTaskList.vue";
import AppTaskSearch from "./components/AppTaskSearch.vue";
import AppTaskAdd from "./components/AppTaskAdd.vue";

export default {
  name: "app",
  setup() {
    onBeforeMount(() => {
      console.log("Before Mount!");
    });
    onMounted(() => {
      console.log("Mounted!");
    });
    onBeforeUpdate(() => {
      console.log("Before Update!");
    });
    onUpdated(() => {
      console.log("Updated!");
    });
    onBeforeUnmount(() => {
      console.log("Before Unmount!");
    });
    onUnmounted(() => {
      console.log("Unmounted!");
    });
    onActivated(() => {
      console.log("Activated!");
    });
    onDeactivated(() => {
      console.log("Deactivated!");
    });
    onErrorCaptured(() => {
      console.log("Error Captured!");
    });
    return { ...useTasksSpace() };
  },
  components: {
    AppTaskList,
    AppTaskSearch,
    AppTaskAdd
  }
  // Vue2
  // created() {
  //   this.tasks = tasks;
  // },
  // data() {
  //   return {
  //     tasks: [],
  //     search: ""
  //   };
  // },
  // methods: {
  //   addTask(task) {
  //     this.tasks.push({
  //       title: task,
  //       completed: false
  //     });
  //   }
  // },
  // computed: {
  //   filteredTasks() {
  //     return this.tasks.filter(task => task.title.includes(this.search));
  //   }
  // },
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
