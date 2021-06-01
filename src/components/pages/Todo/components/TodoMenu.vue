<template>
  <div class="todo-menu">
    <slot></slot>
  </div>
</template>

<script>


export default {
  name: "TodoMenu",
  components: {},
}
</script>

<style scoped>
.todo-menu{
  text-align: right;
  border-radius: 4px;
  padding: 4px;
  background-color: #a7a7a7;
}

</style>