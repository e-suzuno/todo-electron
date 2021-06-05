<template>
  <div class="home">
    <TodoPage/>
  </div>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator';
import TodoPage from '@/components/page/Todo/TodoPage.vue'; // @ is an alias to /src

@Component({
  components: {
    TodoPage,
  },
})
export default class Home extends Vue {
}
</script>
