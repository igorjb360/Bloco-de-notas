<template>
  <div>
  <div v-for="(task, index) in tasks" :key="index">
    <div class="card container" style="width: 100rem; margin-bottom: 2rem">
      <div class="card-body">
        <h5 class="card-title">{{ task.subject }}</h5>
        <p class="card-text">{{ task.description }}</p>
        <button
          class="btn btn-secondary"
          style="margin-right: 1rem"
          @click="edit(index)"
        >
          Editar
        </button>
        <button class="btn btn-danger" @click="delet()">Excluir</button>
      </div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  name: "list",

  data() {
    return {
      tasks: [],
    };
  },
  created() {
    console.log()
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  },
  mounted() {
   console.log(this.$route.params);
},
  methods: {
    edit(index) {
      this.$router.push({ name: "form", params: { index } });
      console.log("aqui deu boa ")
    },
    delet() {},
  },
};
</script>
<style>

    
    /* @media (min-width: 700px) {
      html{
        background-color: red;
      }
    } */
</style>
