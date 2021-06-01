<template>
  <EsCard>
    <EsCardTitle>{{ item.title }}</EsCardTitle>
    <EsCardContents>{{ item.message }}</EsCardContents>
    <EsCardFooter>
      <EsButton @click="$emit('delete' , item._id)">delete</EsButton>
    </EsCardFooter>
  </EsCard>
</template>

<script>
import EsButton from "@/components/shared/EsButton/EsButton";

import EsCardTitle from "@/components/shared/EsCard/EsCardTitle";
import EsCardFooter from "@/components/shared/EsCard/EsCardFooter";
import EsCardContents from "@/components/shared/EsCard/EsCardContents";
import EsCard from "@/components/shared/EsCard/EsCard";

export default {
  name: "TodoItem",
  components: {EsCard, EsCardContents, EsCardFooter, EsCardTitle, EsButton},
  props: {item: Object},
  emits: ['delete']
}
</script>

<style scoped>

</style>