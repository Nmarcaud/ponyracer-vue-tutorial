<template>
  <h2>{{ raceModel.name }}</h2>
  <p>{{ startInstant }}</p>
  <ul v-for="pony in raceModel.ponies" :key="pony.id">
    <li>{{ pony.name }}</li>
  </ul>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import fromNow from '@/utils/FromNow';

const props = defineProps(["raceModel"]);

const startInstant = computed(() => fromNow(props.raceModel.startInstant))
</script>

<style>
</style>