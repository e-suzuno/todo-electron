<template>
  <button class="es-button"
          v-bind="$attrs">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: "EsButton"
}
</script>

<style scoped>

.es-button {
  padding: 4px 16px;
}
</style>