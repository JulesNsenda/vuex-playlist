<template>
  <div>
    <form @submit="addTask">
      <input type="text" v-model="title" name="title" placeholder="Add Task">
      <input type="submit" value="Add Task">
    </form>
  </div>
</template>
<script>
import {v4 as uuidv4} from 'uuid';

export default {
  name: 'AddTask',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    addTask(e) {
      e.preventDefault();
      const task = {
        id: uuidv4,
        title: this.title,
        completed: false
      };
      this.$emit('add-task', task);
    }
  }
}
</script>
<style>

</style>