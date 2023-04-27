<template>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
  </div>
  <div 
    v-if="error"
    class="alert alert-danger d-flex justify-content-between"
  >
    An error occurred while loading.
    <button 
      @click="error = false"
      type="button" 
      class="btn-close" 
      aria-label="Close"></button>
  </div>
</template>

<script lang="ts" setup>
/**
 * Imports
 */
import { onMounted, ref } from "vue";
import Race from "@/components/Race.vue";
import { useRaceService } from "@/composables/RaceService";

/**
 * Variables
 */
const raceService = useRaceService();

const races = ref();
const error= ref(false);

onMounted(async() => {
  try {
    races.value = await raceService.list();
  } catch (e) {
    error.value = true
  }
})

</script>

<style>
</style>