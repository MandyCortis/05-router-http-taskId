<template>
      <ul class="list-group list-group-flush">
        <!--<router-link to="/tasks/123">-->
        <router-link class="task-link" :to="{name: 'TaskDetails', params:{id: task.id}}">
        <li class="list-group-item"><b>{{task.title}}</b> on the {{task.date}} @ {{task.time}}</li>
        </router-link>
      </ul>
</template>

<script>
export default {
  name: 'Task Card',

  props: {
    task: Object
  }

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.task-link{
  text-decoration:none;
  color: #2c3e50
}

.list-group-item:hover{
  transform:scale(1.01);
  box-shadow: 0 3px 12px 0;
  margin: 5px

}
</style>
