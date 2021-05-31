<template>
  <ul class="list-container">

    <li
        class="list-container__item"
        v-for="item in list"
        :key="item._id"
        :ref="setItemRef">
      <TodoItem
          :item="item"
          @delete="onDelete"></TodoItem>
    </li>

  </ul>
</template>

<script>
import TodoItem from "@/components/pages/TodoItem";

export default {
  name: "TodoList",
  components: {TodoItem},
  props: {
    list: Array
  },
  emits: ['delete'],
  data() {
    return {
      itemRefs: []
    }
  },
  methods: {
    setItemRef(el) {
      if (el) {
        this.itemRefs.push(el)
      }
    },
    onDelete: function (_id) {
      this.$emit('delete', _id);
    },
    beforeUpdate() {
      this.itemRefs = []
    },
    updated() {
      console.log(this.itemRefs)
    }
  },
}
</script>

<style scoped>
.list-container {
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;


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