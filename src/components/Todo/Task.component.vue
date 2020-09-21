<template>
  <li class="task">
    <div class="label">{{title}}</div>
    <div class="actions">
      <div class="action" @click="doAction('Deleted this task')">X</div>
      <div class="action" @click="doAction('Marked this task as done')">Done</div>
      <div class="action" @click="doAction('Raised priority level of this task')">Up</div>
      <div class="action" @click="doAction('Lowered priority level of this task')">Down</div>
    </div>
  </li>
</template>

<script>
export default {
  name: "Task",
  props: {
    title: {
      type: String,
      required: true,
    },
  },
  methods: {
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