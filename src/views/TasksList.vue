
<template>

  <div class="tasks">
  <div class="card" style="width: 24rem;">
    <div class="card-header">
        Tasks
    </div>
    <TaskCard v-for="task in tasks" :key="task.id" :task="task"/>
    </div>
  </div>

</template>

<script>
// @ is an alias to /src
import TaskCard from '@/components/TaskCard.vue'
// import axios from 'axios'
import TasksService from '@/services/TasksService.js'

export default {
  name: 'TasksList',
  data () {
    return {
      tasks: null /* [
        {
          id: 1,
          title: 'Task 1',
          description: 'Description for task 1',
          location: 'Valletta',
          date: '1st of Jan',
          time: '12.00'
        },
        {
          id: 2,
          title: 'Task 2',
          description: 'Description for task 2',
          location: 'Valletta',
          date: '1st of Jan',
          time: '12.00'
        },
        {
          id: 3,
          title: 'Task 3',
          description: 'Description for task 3',
          location: 'Valletta',
          date: '1st of Jan',
          time: '12.00'
        }
      ] */
    }
  },
  created () {
    // axios.get('http://my-json-server.typicode.com/mamc003/MyJSONServer/tasks')
    TasksService.getTasks()
      .then(response => {
        // console.log('tasks: ', response.data)
        this.tasks = response.data
      })
      .catch(error => {
        console.log('ERRRORS' + error)
      })
  },

  components: {
    TaskCard
  }
}
</script>

<style scoped>

.card{
  margin:auto;
}
</style>
