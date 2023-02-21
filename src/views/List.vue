<template>
  <div>
    <div v-for="(task, index) in tasks" :key="index">
      <div class="card container" style="margin-top: 2rem; margin-bottom: 2rem;" >
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
          <button class="btn btn-danger" @click="delet(task, index)">
            Excluir
          </button>
        </div>
      </div>
    </div>
    <div v-if="showModal" class="window">
      <div class="window-header">
        <h2>Exclusão de tarefa</h2>
      </div>
      <div class="window-body">
        Deseja realmente excluir essa tarefa? {{ taskSelected.subject }}
      </div>
        <div class="d-flex justify-content-end" style="margin-right: 2 rem">
          <button style="margin-right: 1rem" @click="cancelTask">
            Cancelar
          </button>
          <button @click="confirmRemoveTask">Excluir</button>
        </div>
    </div>
  </div>
</template>
<script>
import Modal from "../components/modal.vue";

export default {
  name: "list",

  data() {
    return {
      showModal: false,
      tasks: [],
      taskSelected: [],
    };
  },
  created() {
    this.tasks = localStorage.getItem("tasks")
      ? JSON.parse(localStorage.getItem("tasks"))
      : [];
  },
  mounted() {
    // console.log(this.$refs);
  },
  methods: {
    edit(index) {
      this.$router.push({ name: "form", params: { index } });
    },
    delet(task, index) {
      this.taskSelected = task;
      this.taskSelected.index = index;
      this.showModal = true;
    },

    cancelTask() {
      this.showModal = false;
    },
    confirmRemoveTask() {
      this.tasks.splice(this.taskSelected.index, 1);
      localStorage.setItem("tasks", JSON.stringify(this.tasks));
      this.cancelTask();
    },
  },
};
</script>
<style>
/* @media (min-width: 700px) {
      html{
        background-color: red;
      }
    } */

.window {
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 500px;
  max-width: 90%;
  background-color: white;
  padding: 1.2rem;
  border: 1px solid rgba(0, 0, 0, 0.2);
  border-radius: 0.3rem;
}

.window-header {
  margin-bottom: 2rem;
}

.window-body {
  margin-bottom: 2rem;
}
</style>
