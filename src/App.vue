<template>
  <div id="app">
    <AppTaskSearch v-model="search" />
    <AppTaskList :tasks="filteredTasks" />
    <AppTaskAdd @addTask="addTask" />
  </div>
</template>

<script>
import taskList from "./api/tasks.js";
import AppTaskList from "./components/AppTaskList.vue";
import AppTaskSearch from "./components/AppTaskSearch.vue";
import AppTaskAdd from "./components/AppTaskAdd.vue";
import { computed, watch, reactive, toRefs } from "@vue/composition-api";
export default {
  name: "app",
  setup() {
    const tasksData = reactive({
      tasks: taskList,
      search: "",
      filteredTasks: computed(() => {
        return tasksData.tasks.filter(task =>
          task.title.includes(tasksData.search)
        );
      })
    });

    function addTask(task) {
      tasksData.tasks.push({
        title: task,
        completed: false
      });
    }

    const { tasks, search } = toRefs(tasksData);

    watch(() => {
      console.log(tasks.value.length);
    });

    watch(search, (newSearch, oldSearch) => {
      console.log(`Antes buscabas ${oldSearch} y ahora buscas ${newSearch}`);
    });

    // const tasks = ref(taskList);
    // const search = ref("");

    // const filteredTasks = computed(() => {
    //   return tasks.value.filter(task => task.title.includes(search.value));
    // });

    return { ...toRefs(tasksData), addTask };
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
