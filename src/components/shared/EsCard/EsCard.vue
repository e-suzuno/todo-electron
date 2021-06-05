<template>
  <div class="card">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EsCard extends Vue {
}
</script>

<style scoped>
.card {
  min-width: 200px;
  padding: 8px;
  border: 1px solid #888;
  border-radius: 4px;
}
</style>