<template>
  <div class="task-list">
    <ol v-if="tasks.length > 0" class="task-list">
      <Task v-for="(task, index) in tasks" :key="index" :index="index" :title="task.title" />
    </ol>
    <div v-else class="task-list">
      Aucune tâche crée pour le moment:
      <div class="danger">Creez en une nouvelle en moins d'une minute</div>
    </div>
  </div>
</template>

<script>
import Task from "./Task.component.vue";
import { EventBus } from "../../EventBus";

export default {
  name: "TaskList",
  components: { Task },
  data() {
    return {
      tasks: [],
    };
  },
  mounted() {
    this.tasks = [
      {
        title: "Wash the dishes",
      },
      {
        title: "Swipe the floor",
      },
      {
        title: "Call a dentist",
      },
      {
        title: "Finish watching react ( and end up Redux ) courses",
      },
      ...this.tasks,
    ];

    EventBus
      .$on("saveTask", (task) => {
        this.tasks = [
          {
            title: task,
          },
          ...this.tasks,
        ];
      })
      .$on("deleteTask", (index) => {
        this.tasks.splice(index, 1);
      });
  },
};
</script>

<style lang="scss" scoped>
.task-list {
  margin: 0;
}
</style>