<template>
  <div class="todo-page">

    <TodoInput @save="onSave"></TodoInput>
    <TodoMenu>
      <EsButton @click="omReload">reload</EsButton>
    </TodoMenu>

    <TodoList
        :list="items"
        @delete="onDelete"
    ></TodoList>
  </div>
</template>

<script>
import {RepositoryFactory} from '@/components/repositories/RepositoryFactory';
import TodoList from "@/components/pages/Todo/components/TodoList";
import TodoInput from "@/components/pages/Todo/components/TodoInput";
import EsButton from "@/components/shared/EsButton/EsButton";
import TodoMenu from "@/components/pages/Todo/components/TodoMenu";

const TodoRepository = RepositoryFactory.get('todo');


export default {
  name: "Todo",
  components: {TodoMenu, EsButton, TodoInput, TodoList},
  data() {
    return {
      items: []
    }
  },
  created() {
    this.load();
  },
  methods: {
    omReload: function () {
      TodoRepository.index({})
          .then(response => {

            console.log(response);
            this.items = response;
          })
          .catch(error => {
            console.log(error)
          })
    },
    show: function () {
      TodoRepository.show(1)
          .then((response) => {
            console.log(response);
          })
          .catch((error) => {
            console.log(error);
          })
    },
    onSave: function (todo) {

      console.log(todo)
      TodoRepository.store(todo)
          .then(() => {
            console.log(this);
            this.load();
          })
          .catch(error => {
            console.log(error)
          })
    },
    onDelete: function (key) {
      TodoRepository.delete(key)
          .then((response) => {
            console.log(response);
            this.load();
          })
          .catch((error) => {
            console.log(error);
          })
    }
  }
}
</script>

<style scoped>
.todo-page{
  max-width: 800px;
  margin: 0 auto;
}

</style>