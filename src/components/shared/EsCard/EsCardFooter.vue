<template>
  <div class="card__footer">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EsCardFooter"
}
</script>

<style scoped>
.card__footer {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 8px;
}
</style>