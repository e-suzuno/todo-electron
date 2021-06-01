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
              v-model="title"
          />
        </div>
        <div>
          <EsLabel>内容</EsLabel>
          <textarea
              class="es-input"
              type="text"
              v-model="message"
          />
        </div>
      </EsCardContents>
      <EsCardFooter>
        <EsButton @click="save">save</EsButton>
      </EsCardFooter>
    </EsCard>
  </div>
</template>

<script>

import EsButton from "@/components/shared/EsButton/EsButton";
import EsCard from "@/components/shared/EsCard/EsCard";
import EsCardTitle from "@/components/shared/EsCard/EsCardTitle";
import EsCardContents from "@/components/shared/EsCard/EsCardContents";
import EsCardFooter from "@/components/shared/EsCard/EsCardFooter";
import EsLabel from "@/components/shared/EsLabel/EsLabel";


export default {
  name: "TodoInput",
  components: {EsLabel, EsCardFooter, EsCardContents, EsCardTitle, EsCard, EsButton},
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

      this.$emit('save', todo);

      this.title = '';
      this.message = '';
    }
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