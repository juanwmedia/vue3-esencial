<template>
  <div>
    <h2>Search tasks</h2>
    <hr />
    <input
      type="search"
      :value="search"
      @input="input($event.target.value)"
      placeholder="Start searching..."
    />
  </div>
</template>

<script>
export default {
  name: "AppTaskSearch",
  props: ["search"],
  methods: {
    input(value) {
      this.$emit("input", value);
    }
  }
};
</script>
