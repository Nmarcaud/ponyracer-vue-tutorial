<template>
  <h2>{{ raceModel.name }}</h2>
  <ul v-for="pony in raceModel.ponies" :key="pony.id">
    <li>{{ pony.name }}</li>
  </ul>
</template>

<script lang="ts" setup>
const props = defineProps(["raceModel"]);
</script>

<style>
</style>