<template>
  <div class="task-item" v-bind:class="{ 'is-complete': task.completed }">
      <input type="checkbox" v-on:change="markComplete" />
      {{ task.title }}
      <button @click="deleteTask">Remove task</button>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Task",
  props: ["task"],
  methods: {
    ...mapActions(["removeTask", "updateTask"]),
    markComplete() {
      const updatedTask = {
        id: this.task.id,
        name: this.task.name,
        completed: !this.task.completed,
      };
      this.updateTask(updatedTask);
    },
    deleteTask() {
      this.removeTask(this.task);
    },
  },
};
</script>

<style>
.task-item {
  background: #f4f4f4;
  padding: 10px;
  border-bottom: 1px #ccc dotted;
}

.is-complete {
  text-decoration: line-through;
}
</style>