<template>
  <div class="task-list">
    <ol v-if="tasks.length > 0" class="task-list">
      <Task
        v-for="(task, index) in tasks"
        :key="index"
        :index="index"
        :task="task"
      />
    </ol>
    <div v-else class="task-list">
      Aucune tâche crée pour le moment:
      <div class="danger">Creez en une nouvelle en moins d'une minute</div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";
import Task from "./Task.component.vue";

export default {
  name: "TaskList",
  components: { Task },
  computed: {
    ...mapState(["tasks", "done"]),
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  margin: 0;
}
</style>