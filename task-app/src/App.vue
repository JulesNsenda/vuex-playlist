<template>
  <div id="app">
    <Header/>
    <AddTask/>
    <TaskManager/>
  </div>
</template>

<script>

import TaskManager from "@/components/TaskManager";
import Header from "@/components/layout/Header";
import AddTask from "@/components/AddTask";

export default {
  name: 'App',
  components: {
    AddTask,
    Header,
    TaskManager
  },
}
</script>

<style>

</style>
