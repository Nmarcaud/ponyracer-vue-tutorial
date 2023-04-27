<template>
  <figure class="card card-body p-4 border-0 shadow" @click="clicked()">
    <img class="img-fluid" :src="ponyImageUrl" :alt="ponyModel.name"/>
    <figcaption class="text-center mt-3">{{ ponyModel.name }}</figcaption>
  </figure>
</template>

<script lang="ts" setup>

// Imports
import { computed } from 'vue';

// Props
const props = defineProps(['ponyModel'])

// Image computed
const ponyImageUrl = computed(() => `/images/pony-${props.ponyModel.color.toLowerCase()}.gif`);

// Define les évènements
const emit = defineEmits(['ponySelected'])

// Emet l'évènement
function clicked() {
  emit('ponySelected');
}
</script>

<style>
figure {
  margin: 3px;
  padding: 3px;
  font-size: 12px;
}

img {
  height: 50px;
}
</style>