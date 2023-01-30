<template>
  <div>
    <h1>To-do List with Vue</h1>
    <input v-model.trim="task" />
    <Button @click="addTask" type="button">Adicionar</Button>
    <ul>
      <li v-for="task in tasks" :key="task">{{ task }}</li>
    </ul>
  </div>
</template>
<script>
export default {
  name: "TodoList",
  data() {
    return {
      tasks: [],
    };
  },
  methods: {
    addTask() {
      this.tasks.push(this.task);
      this.task = "";
    },
  },
};
</script>
<style></style>
