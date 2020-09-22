<template>
  <div class="todo">
    <Input />
    <TaskList />
  </div>
</template>

<script>
import Input from "@/components/Todo/Input.component.vue";
import TaskList from "@/components/Todo/TaskList.component.vue";

export default {
  name: "Todo",
  components: { Input, TaskList },
};
</script>

<style scoped lang="scss">
.todo {
  width: 790px;
  margin: 0 auto;

  border-radius: 25px 25px 0 0;
  box-shadow: 3px 3px 10px 0px;
  border: none;
}

.danger {
  color: maroon;
  font-size: 2em;
  font-weight: bolder;
}
</style>