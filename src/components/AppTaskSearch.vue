<template>
  <div>
    <h2>Search tasks</h2>
    <hr />
    <input
      type="search"
      :value="search"
      @input="$emit('input', $event.target.value)"
      placeholder="Start searching..."
    />
  </div>
</template>

<script>
export default {
  name: "AppTaskSearch",
  props: ["search"]
};
</script>
