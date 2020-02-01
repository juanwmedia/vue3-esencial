<template>
  <div>
    <h2>Search tasks</h2>
    <hr />
    <input
      @input="input($event.target.value)"
      placeholder="Start searching..."
    />
  </div>
</template>

<script>
export default {
  name: "AppTaskSearch",
  setup(props, context) {
    function input(value) {
      context.emit("input", value);
    }
    return { input };
  }
  // Vue 2
  // methods: {
  //   input(value) {
  //     this.$emit("input", value);
  //   }
  // }
};
</script>
