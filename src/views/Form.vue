<template>
  <div class="container">
    <form>
    <label for="subject" class="form-label">Titulo</label>
    <input
      class="form-control"
      id="subject"
      v-model="form.subject"
      type="text"
      placeholder="EX: Levar o lixo"
      required
      autocomplete="off"
    />

    <label for="description" class="form-label">Descrição</label>
    <textarea
      class="form-control"
      id="description"
      v-model="form.description"
      placeholder="EX: Preciso Tirar os Lixos"
      type="text"
      required
      autocomplete="off"
    ></textarea>
    <button type="submit" class="btn btn-primary" style="margin-top: 2rem;" @click="saveTask">
      Salvar
    </button>
  </form>
  </div>
</template>
<script>
export default {
  name: "form",

  data() {
    return {
      form: {
        subject: "",
        description: ""
      },
      methodSave: "new"
    };
  },

  created() {
    if(this.$route.params.index === 0 || this.$route.params.index !== undefined){
      this.methodSave = "update";
      let tasks = JSON.parse(localStorage.getItem("tasks"));
      this.form = tasks[this.$route.params.index];
    }
  },

//   mounted() {
//    console.log(this.$route.params.index);
// },

  methods: {
    saveTask() {
      if(this.methodSave === "update"){
        let tasks = JSON.parse(localStorage.getItem("tasks"));
        tasks[this.$route.params.index] = this.form;
        localStorage.setItem("tasks", JSON.stringify(tasks));
        this.$router.push({ name: "list" });
        return;
      }

      let tasks = localStorage.getItem("tasks")
        ? JSON.parse(localStorage.getItem("tasks"))
        : [];
      tasks.push(this.form);
      localStorage.setItem("tasks", JSON.stringify(tasks));
      this.$router.push({ name: "list" });
    },
  },
};
</script>
<style>
.form-label {
  font-size: 1.25rem;
}
</style>
