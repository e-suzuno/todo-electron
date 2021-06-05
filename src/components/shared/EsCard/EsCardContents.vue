<template>
  <div class="card__contents">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EsCardContents extends Vue {
}
</script>

<style scoped>
.card__contents {
  text-align: left;
}
</style>