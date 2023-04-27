<template>
  <h2>{{ raceModel.name }}</h2>
  <p>{{ startInstant }}</p>
  <div class="row">
    <div class="col-6 col-sm-4 col-md-3 col-lg-2 d-flex" v-for="pony in raceModel.ponies" :key="pony.id">
      <Pony :ponyModel="pony" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import { computed } from "vue";
import fromNow from '@/utils/FromNow';
import Pony from "@/components/Pony.vue"

const props = defineProps(["raceModel"]);

const startInstant = computed(() => fromNow(props.raceModel.startInstant))
</script>

<style>
</style>