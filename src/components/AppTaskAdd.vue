<template>
  <div>
    <h2>Add tasks</h2>
    <hr />
    <form @submit.prevent="addTask">
      <input type="text" v-model="task" placeholder="Insert task" />
      <input type="submit" value="Add task" />
    </form>
  </div>
</template>

<script>
export default {
  name: "AppTaskAdd",
  data() {
    return {
      task: ""
    };
  },
  methods: {
    addTask() {
      this.$emit("addTask", this.task);
      this.task = "";
    }
  }
};
</script>
