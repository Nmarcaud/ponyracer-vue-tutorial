<template>
  <div class="text-center" style="margin-top: 100px">
    <div>
      <h1>Ponyracer <small>Always a pleasure to bet on ponies</small></h1>
    </div>

    <div>
      <RouterLink class="btn btn-primary" to="/races">Races</RouterLink>
    </div>
  </div>
</template>

<script lang="ts" setup>

import { ref } from "vue";
import { useRaceService } from "@/composables/RaceService";

const raceService = useRaceService();

const races = ref();

races.value = await raceService.list();
</script>

<style>
</style>