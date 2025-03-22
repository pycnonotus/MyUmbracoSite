<script setup lang="ts">
import { defineProps } from 'vue';
import type { TabItemProperties } from "../Interfaces/IUmbracoData.ts";
import AxSlidingTabsItemActive from "./AxSlidingTabsItemActive.vue";
import AxSlidingTabsItemNotActive from "./AxSlidingTabsItemNotActive.vue";
import AxSlidingTabsItemProgressBar from "./AxSlidingTabsItemProgressBar.vue";

const emit = defineEmits<{
  (e: 'button-pressed'): void;
  (e: 'title-pressed'): void;
}>();

const props = defineProps<{
  isActive: boolean;
  progress: number;
  item: TabItemProperties;
}>();

function onButtonPressed(e: Event) {
  e.stopPropagation();
  emit('button-pressed');
}

function onTitlePressed() {
  console.log('onTitlePressed');
  emit('title-pressed');
}
</script>

<template>
  <div @click="onTitlePressed" class="flex gap-7 lg:flex-col">
    <!-- Progress Bar Container -->
    <div class="flex flex-col gap-2.5 items-center w-6 cursor-pointer lg:flex-row lg:w-full lg:h-12 lg:gap-6">
      <button
          v-if="props.isActive"
          @click.stop="onButtonPressed"
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
    <AxSlidingTabsItemActive v-if="props.isActive" :item="props.item" />
    <AxSlidingTabsItemNotActive v-else :title="props.item.title" />
  </div>
</template>
