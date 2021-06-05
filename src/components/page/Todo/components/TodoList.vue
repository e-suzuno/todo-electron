<template>
  <ul class="list-container">

    <li
        class="list-container__item"
        v-for="item in list"
        :key="item._id"
    >
      <TodoItem
          :item="item"
          @delete="onDelete"></TodoItem>
    </li>

  </ul>
</template>

<script lang="ts">

import {Component, Prop, Emit, Ref, Vue} from 'vue-property-decorator';
import TodoItem from "@/components/page/Todo/components/TodoItem.vue";

@Component({
  components: {TodoItem}
})
export default class TodoList extends Vue {

  @Prop() private list!: any;


  @Emit()
  delete(id: string) {
  }

  public onDelete(id: string) {
    this.delete(id)
  }


}
</script>


<style scoped>
.list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  width: 100%;
  min-width: 640px;
  padding: 0;
  margin: 0 auto;
}

.list-container__item {
  display: grid;

  list-style: none;
  padding: 0;
  margin: 16px auto;
}

</style>