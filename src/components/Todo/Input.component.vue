<template>
  <div class="input">
    <input
      @keyup.enter="addTask"
      :placeholder="placeholder"
      v-model.trim="newTask"
    />
  </div>
</template>

<script>
export default {
  name: "Input",
  data() {
    return {
      newTask: "",
    };
  },
  computed: {
    placeholder: {
      get: function () {
        return "Type in a new task and hit enter to add a new task";
      },
    },
  },
  methods: {
    addTask() {
      this.$store.dispatch("addTask", {
        title: this.newTask,
      });

      this.newTask = "";
    },
  },
};
</script>

<style lang="scss" scoped>
.input {
  border-radius: 25px 25px 0 0;
  background-color: #131313;
}

input {
  box-sizing: border-box;
  background-color: transparent;
  border: none;
  margin: 0;
  padding: 5px 15px;
  color: rgba(0, 0, 0, 0.87);
  word-wrap: break-word;
  outline: none;
  -webkit-tap-highlight-color: transparent;
  width: 100%;
  height: 40px;
  color: aqua;
  font-weight: bolder;
  font-size: 1.5em;
}
</style>