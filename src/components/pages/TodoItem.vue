<template>
  <div class="card">
    <div class="card__title">
      {{ item.title }}
    </div>
    <div class="card__body">
      {{ item.message }}
    </div>
    <div class="card__buttons">
      <EsButton @click="$emit('delete' , item._id)">delete</EsButton>
    </div>
  </div>
</template>

<script>
import EsButton from "@/components/shared/EsButton";
export default {
  name: "TodoItem",
  components: {EsButton},
  props: {item: Object},
  emits: ['delete']
}
</script>

<style scoped>
.card {
  min-width: 300px;

  padding: 8px;
  border: 1px solid #888;
  border-radius: 4px;
}


.card__title {

}

.card__body {
  text-align: left;
}

.card__buttons {
  text-align: center;
  border-top: 1px solid #eee;
  padding: 8px;
}

</style>