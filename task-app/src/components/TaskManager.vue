<template>
  <div>
    <div v-for="task in tasks" v-bind:key="task.id">
      <Task v-bind:task="task" v-on:del-task="$emit('del-task', task.id)"/>
    </div>
  </div>
</template>

<script>
import Task from "@/components/Task";

export default {
  name: 'TaskManager',
  components: {Task},
  props: ["tasks"]
}
</script>

<style>

</style>