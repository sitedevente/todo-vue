<template>
  <div class="todo">
    <Input @addNewTask="pushNewTask" />
    <TaskList :tasks="this.tasks" />
  </div>
</template>

<script>
import Input from "@/components/Todo/Input.component.vue";
import TaskList from "@/components/Todo/TaskList.component.vue";

export default {
  name: "Todo",
  components: { Input, TaskList },
  methods: {
    pushNewTask(task) {
      this.tasks = [
        {
          title: task,
        },
        ...this.tasks,
      ];
    },
    deleteAsk() {
      console.log("task deleted: ");
    },
  },
  data() {
    return {
      tasks: [],
    };
  },
  created() {
    console.log("todo components has been created !");
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
  },
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