<script setup lang="ts">
import { defineProps } from 'vue';
import type { TabItemProperties } from "../Interfaces/IUmbracoData.ts";
import AxSlidingTabsItemContent from "./AxSlidingTabsItemContent.vue";
import AxSlidingTabsItemProgressBar from "./AxSlidingTabsItemProgressBar.vue";

const emit = defineEmits<{
  (e: 'pressed'): void;
}>();

const props = defineProps<{
  isActive: boolean;
  progress: number;
  item: TabItemProperties;
}>();


function onPressed() {
  emit('pressed');
}
</script>

<template>
  <div @click="onPressed" class="flex gap-7 lg:flex-col">
    <div class="flex flex-col gap-2.5 items-center w-6 cursor-pointer lg:flex-row lg:w-full lg:h-12 lg:gap-6">
      <button
          v-if="props.isActive"
          class="flex items-center justify-center w-6 h-6 lg:w-12 lg:h-12 !p-0 !m-0 border-0 bg-transparent appearance-none"
      >
        <img
            src="/src/assets/images/pause.svg"
            loading="lazy"
            alt="pause"
            class="w-full h-full object-cover block"
        />
      </button>
      <AxSlidingTabsItemProgressBar :progress="props.isActive ? props.progress : 0" class="grow" />
    </div>
    <AxSlidingTabsItemContent :is-active="props.isActive" :item="props.item" />
  </div>
</template>
