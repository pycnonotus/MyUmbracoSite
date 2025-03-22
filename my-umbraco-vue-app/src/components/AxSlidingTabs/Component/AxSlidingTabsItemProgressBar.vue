<script setup lang="ts">
import {defineProps} from "vue";

const props = defineProps<{
  progress: number;
}>();

</script>

<template>
  <div
      class="progress-bar"
  >
    <div
        class="progress-bar-inner"
        :style="{ '--progress': `${props.progress}%` }"
    ></div>
  </div>
</template>

<style scoped>
:host {
  --progress: 0;
}

.progress-bar {
  flex-basis: 3px;
  background-color: #9D57264C;
  flex-grow: 1;
  overflow: hidden;
  border-radius: 999px;
  display: flex;
  transition: all 0.3s ease-in-out;
}

@media (min-width: 991px) {
  .progress-bar-inner {
    flex-direction: column;
    height: 6px !important;
    width: var(--progress) !important;
  }
}


.progress-bar-inner {
  width: 3px;
  background-color: #9D5726;
  border-radius: 999px;
  height: var(--progress);
  transition: height 0.01s linear;
}
</style>