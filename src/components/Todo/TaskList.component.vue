<template>
  <div class="task-list">
    <ol v-if="tasks.length > 0" class="task-list">
      <Task v-for="(task, index) in tasks" :key="index" :title="task.title" />
    </ol>
    <div v-else class="task-list">
      Aucune tâche crée pour le moment:
      <div class="danger">Creez en une nouvelle en moins d'une minute</div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.component.vue";

export default {
  name: "TaskList",
  components: { Task },
  props: {
    tasks: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  margin: 0;
}
</style>