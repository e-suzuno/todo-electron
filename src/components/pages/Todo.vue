<template>
  <div>
    <h1>Todo</h1>

    <TodoInput @save="onSave"></TodoInput>

    <EsButton @click="show">bbb</EsButton>
    <EsButton @click="load">load</EsButton>

    <TodoList
        :list="items"
        @delete="onDelete"
    ></TodoList>
  </div>
</template>

<script>
import TodoList from "@/components/pages/TodoList";
import {RepositoryFactory} from '@/components/repositories/RepositoryFactory';
import TodoInput from "@/components/pages/TodoInput";
import EsButton from "@/components/shared/EsButton";

const TodoRepository = RepositoryFactory.get('todo');


export default {
  name: "Todo",
  components: {EsButton, TodoInput, TodoList},
  data() {
    return {
      items: []
    }
  },
  created() {
    this.load();
  },
  methods: {
    load: function () {
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

</style>