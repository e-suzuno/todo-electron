<template>
  <div>
    <input
        class="es-input"
        type="text"
        v-model="title"
    />
    <input
        class="es-input"
        type="text"
        v-model="message"
    />
    <EsButton @click="save">save</EsButton>
  </div>
</template>

<script>

import EsButton from "@/components/shared/EsButton";


export default {
  name: "TodoInput",
  components: {EsButton},
  data() {
    return {
      title: '',
      message: '',
    }
  },
  emits: ['save'],
  created() {
  },
  methods: {
    save: function () {
      let todo = {
        ...{
          title: this.title,
          message: this.message,
        }
      };
      console.log(todo);
      this.$emit('save', todo);

      this.title = '';
      this.message = '';
    }
  }
}
</script>

<style scoped>

.es-input {
  padding: 4px;
}
</style>