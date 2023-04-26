<template>
  <div v-for="race in races" :key="race.id">
    <Race :raceModel="race" />
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

onMounted(async() => {
  races.value = await raceService.list()
})

</script>

<style>
</style>