<template>
  <header>
    <Navbar/>
  </header>
  <RouterView />
</template>

<style scoped>
</style>

<script setup>
import { RouterView } from "vue-router";
import Navbar from "./components/Navbar.vue"
</script>
