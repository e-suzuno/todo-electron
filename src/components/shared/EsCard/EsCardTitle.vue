<template>
  <div class="card__title">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EsCardTitle"
}
</script>

<style scoped>

.card__title {
  font-size: 1.5rem;
  padding: 8px;
}

</style>