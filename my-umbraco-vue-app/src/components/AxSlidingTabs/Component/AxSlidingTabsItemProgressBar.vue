<template>
  <div class="basis-[3px] bg-[#9D57264C] grow overflow-hidden rounded-full flex transition-all duration-300 ease-in-out">
    <div
        :style="{ '--progress': `${props.progress}%` }"
        class="bg-[#9D5726] rounded-full transition-[height] duration-[10ms] ease-linear
             w-[3px] h-[var(--progress)]
             lg:h-[6px] lg:w-[var(--progress)]"
    ></div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from "vue";

const props = defineProps<{
  progress: number;
}>();
</script>
