<template>
  <div>
    <div v-for="task in allTasks" v-bind:key="task.id">
      <Task v-bind:task="task"/>
    </div>
  </div>
</template>

<script>
import {mapActions, mapGetters} from 'vuex';
import Task from "@/components/Task";

export default {
  name: 'TaskManager',
  components: {Task},
  methods: {
    ...mapActions(['fetchTask'])
  },
  computed: {
    ...mapGetters(['allTasks'])
  }
}
</script>

<style>

</style>