<template>
  <button
      @click="click"
      class="es-button">
    <slot></slot>
  </button>
</template>


<script lang="ts">
import {Component, Prop, Emit, Vue} from 'vue-property-decorator';

@Component
export default class EsButton extends Vue {

  @Emit()
  public click(e: MouseEvent) {
  }

}
</script>
<style scoped>

.es-button {
  padding: 4px 16px;
}
</style>