<template>
  <Alert v-if="error" dissmissible="true" variant="danger" @dismissed="error = false">
    An error occurred while loading.
  </Alert>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
  </div>
</template>

<script lang="ts" setup>
/**
 * Imports
 */
import { ref } from "vue";
import Race from "@/components/Race.vue";
import { useRaceService } from "@/composables/RaceService";

/**
 * Variables
 */
const raceService = useRaceService();

const races = ref();
const error= ref(false);

races.value = await raceService.list();
</script>

<style>
</style>