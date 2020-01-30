<template>
  <div>
    <h1>Tasks</h1>
    <hr />
    <ul>
      <li v-for="(task, $index) in tasks" :key="$index">{{ task.title }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "AppTaskList",
  props: {
    tasks: {
      type: Array,
      required: true
    }
  }
};
</script>
