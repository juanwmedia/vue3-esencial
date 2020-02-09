import taskList from "@/api/tasks.js";
import Vuex from "@/Vuex.js";

const store = new Vuex.Store({
  state: {
    tasks: []
  },
  mutations: {
    addTask(state, task) {
      state.tasks.push(task);
    },
    setTasks(state, tasks) {
      state.tasks = tasks;
    }
  },
  actions: {
    checkTaskProfanity(context, payload) {
      return new Promise((resolve, reject) => {
        if (!payload.title.includes("fuck")) {
          resolve(context.commit("addTask", payload));
        } else {
          reject(Error("Palabra prohibida encontrada"));
        }
      });
    }
  },
  getters: {
    completedTasks(state) {
      return [...state.tasks].filter(task => task.completed);
    }
  }
});

store.commit("setTasks", taskList);

export default store;
