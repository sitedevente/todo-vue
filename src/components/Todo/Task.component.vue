<template>
  <li class="task">
    <div class="label">{{ task.title }}</div>
    <div class="actions">
      <div class="action" @click="deleteTask(index)">X</div>
      <div class="action" @click="markAsDone({ task, index })">Done</div>
      <div
        class="action"
        @click="doAction('Raised priority level of this task')"
      >
        Up
      </div>
      <div
        class="action"
        @click="doAction('Lowered priority level of this task')"
      >
        Down
      </div>
    </div>
  </li>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Task",
  props: {
    task: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  methods: {
    ...mapActions(["deleteTask", "markAsDone"]),
    doAction(msg) {
      console.log(msg);
    },
  },
};
</script>

<style lang="scss" scoped>
.task {
  padding: 15px 0;
  text-align: left;
  background-color: inherit;
  display: flex;

  .label {
    flex-grow: 1;
  }

  &:hover {
    background-color: #a1a1a163;
    -webkit-transition: background-color 300ms ease-out;
    -ms-transition: background-color 300ms ease-out;
    transition: background-color 300ms ease-out;
  }
}

.actions {
  display: flex;

  .action {
    flex-grow: 1;
    padding: 0 10px;

    &:hover {
      color: red;
      transform: scaleY(1.2);
    }
  }
}
</style>