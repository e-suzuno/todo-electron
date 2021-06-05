<template>
  <EsCard>
    <EsCardTitle>{{ item.title }}</EsCardTitle>
    <EsCardContents>{{ item.message }}</EsCardContents>
    <EsCardFooter>
      <EsButton @click="onDelete">delete</EsButton>
    </EsCardFooter>
  </EsCard>
</template>


<script lang="ts">

import {Component, Prop, Emit, Vue} from 'vue-property-decorator';
import EsLabel from '@/components/shared/EsLabel/EsLabel.vue';
import EsCard from '@/components/shared/EsCard/EsCard.vue';
import EsCardTitle from '@/components/shared/EsCard/EsCardTitle.vue';
import EsCardContents from '@/components/shared/EsCard/EsCardContents.vue';
import EsCardFooter from '@/components/shared/EsCard/EsCardFooter.vue';
import EsButton from '@/components/shared/EsButton/EsButton.vue';

interface Todo {
  _id: string,
  title: string,
  message: string,
}

@Component({
  components: {EsButton, EsCardFooter, EsCard, EsCardTitle, EsCardContents, EsLabel},
})
export default class TodoItem extends Vue {

  @Prop() private item!: Todo;


  @Emit()
  delete(key: string) {
  }

  public onDelete() {
    this.delete(this.item._id)
  }


}
</script>


<style scoped>
</style>
