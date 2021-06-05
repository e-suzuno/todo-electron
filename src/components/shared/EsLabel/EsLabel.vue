<template>
  <label class="es-label">
    <slot></slot>
  </label>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EsLabel extends Vue {
}
</script>

<style scoped>
.es-label {
  display: block;
}
</style>
