<template>
  <div class="card">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EsCard"
}
</script>

<style scoped>
.card {
  min-width: 300px;
  padding: 8px;
  border: 1px solid #888;
  border-radius: 4px;
}
</style>