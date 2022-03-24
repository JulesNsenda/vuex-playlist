<template>
  <div>
    <form @submit="onSubmit">
      <input type="text" v-model="title" name="title" placeholder="Add Task">
      <input type="submit" value="Add Task">
    </form>
  </div>
</template>

<script>
import {mapActions} from "vuex";
import {v4 as uuidv4} from 'uuid';

export default {
  name: 'AddTask',
  data() {
    return {
      title: '',
    }
  },
  methods: {
    ...mapActions(['addTask']),
    onSubmit(e) {
      e.preventDefault();
      const task = {
        id: uuidv4(),
        title: this.title,
        completed: false
      }
      this.addTask(task);
    }
  }
}
</script>
<style>

</style>