<template>
  <div class="card__footer">
    <slot></slot>
  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';

@Component
export default class EsCardFooter extends Vue {
}
</script>

<style scoped>
.card__footer {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 8px;
}
</style>