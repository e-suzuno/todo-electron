<template>
  <div>

    <TodoInput
        @save="onSave"
    />
    <TodoList
        :list="items"
        @delete="onDelete"
    ></TodoList>

  </div>
</template>


<script lang="ts">
import {Component, Prop, Vue} from 'vue-property-decorator';
import TodoInput from '@/components/page/Todo/components/TodoInput.vue';
import {RepositoryFactory} from '@/domain/repositories/RepositoryFactory';
import TodoList from "@/components/page/Todo/components/TodoList.vue";

const TodoRepository = RepositoryFactory.get('todo');

@Component({
  components: {TodoList, TodoInput},
})
export default class TodoPage extends Vue {

  public todo: object = {
    title: '',
    message: '',
  };
  public items: any = [];

  created() {
    // 何か処理
    this.todo = {
      title: 'a',
      message: '',
    };

    this.onLoad()
  }


  public onLoad() {
    TodoRepository.index({})
        .then(response => {
          console.log(response);
          this.items = response;
        })
        .catch(error => {
          console.log(error)
        })
  }

  public onSave(todo: object) {
    //this.todo = todo;
    TodoRepository.store(todo)
        .then(() => {
          this.onLoad();

        })
        .catch(error => {
          console.log(error)
        })
  }

  public onDelete(id: string) {
    TodoRepository.delete(id)
        .then((response) => {
          console.log(response);
          this.onLoad();
        })
        .catch((error) => {
          console.log(error);
        })
  }


}
</script>

<style scoped>

</style>
