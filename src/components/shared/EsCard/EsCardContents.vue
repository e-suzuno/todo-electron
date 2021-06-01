<template>
  <div class="card__contents">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "EsCardContents"
}
</script>

<style scoped>
.card__contents {
  text-align: left;
}
</style>