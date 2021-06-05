<template>
  <div class="todo-input">
    <EsCard>
      <EsCardTitle>add todo</EsCardTitle>
      <EsCardContents>
        <div>
          <EsLabel>タイトル</EsLabel>
          <input
              class="es-input"
              type="text"
              v-model="todo.title"
          />
        </div>
        <div>
          <EsLabel>内容</EsLabel>
          <textarea
              class="es-input"
              type="text"
              v-model="todo.message"
          />
        </div>
      </EsCardContents>
      <EsCardFooter>
        <EsButton @click="save">save</EsButton>
      </EsCardFooter>
    </EsCard>
  </div>
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
export default class TodoInput extends Vue {
  public todo: Todo = {
    _id: '',
    title: '',
    message: '',
  };

  @Prop() private item!: object;


  @Emit()
  save() {
    let data = {...this.todo};
    this.todo = {
      _id: '',
      title: '',
      message: '',
    };
    return data;
  }


}
</script>


<style scoped>
.todo-input {
  margin: 8px auto;
  max-width: 600px;
}

.es-input {
  padding: 4px;
}
</style>