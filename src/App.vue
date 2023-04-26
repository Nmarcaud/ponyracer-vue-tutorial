<template>
  <Navbar />
  <main class="container" style="margin-top: 70px">
    <h1>Ponyracer</h1>
    <Races />
  </main>
</template>

<script lang="ts" setup>
import Navbar from './components/Navbar.vue';
import Races from '@/views/Races.vue'
</script>

<style></style>