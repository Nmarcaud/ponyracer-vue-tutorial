<template>
  <div 
    :class="alertClasses">
    <slot></slot>
    <button 
      v-if="dismissible"
      @click="dismiss()"
      type="button" 
      class="btn-close" 
      aria-label="Close"></button>
  </div>
</template>

<script lang="ts" setup>
import { computed } from 'vue';

const props = defineProps<{
  variant: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
  dismissible?: boolean;
}>();

const emit = defineEmits<{
  (e: 'dismissed'): void;
}>();;

// emet un évènement custom
function dismiss() {
  emit('dismissed');
}

// Prop calculée
const alertClasses = computed(() => `alert alert-${props.variant}${props.dismissible ? ' alert-dismissible' : ''}` as const);

</script>

<style></style>