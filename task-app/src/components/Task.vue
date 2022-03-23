<template>
  <div class="task-item" v-bind:class="{'is-complete':task.completed}">
    <input type="checkbox" v-on:change="markComplete">
    {{ task.title }}
    <button @click="$emit('del-task', task.id)">Remove task</button>
  </div>
</template>

<script>
export default {
  name: "Task",
  props: ["task"],
  methods: {
    markComplete() {
      this.task.completed = !this.task.completed;
    }
  }
}
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