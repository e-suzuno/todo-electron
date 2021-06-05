<template>
  <div class="card__title">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EsCardTitle extends Vue {
}
</script>

<style scoped>

.card__title {
  font-size: 1.5rem;
  padding: 8px;
}

</style>