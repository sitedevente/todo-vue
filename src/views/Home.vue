<template>
  <div class="home">
      <Todo />
  </div>
</template>

<script>
import Todo from "@/components/Todo/Todo.component.vue";

export default {
  name: "Home",
  components: {
    Todo,
  },
};
</script>

<style lang="scss" scoped>
.home {
  display: flex;
  padding: 100px;
  align-self: center;
}
</style>