<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import AxSlidingTabsItem from "./AxSlidingTabsItem.vue";
import type { IUmbracoData, TabsSliderProperties } from "../Interfaces/IUmbracoData.ts";
import type { IAxSlidingTabsItem } from "../Interfaces/IAxSlidingTabsItem.ts";

function onChildButtonPressed() {
  isStopped = !isStopped;
}

function onTitlePressed(index: number) {
  if (activeItemIndex.value !== index) {
    progress.value = 0;
  }
  activeItemIndex.value = index;
}

const progress = ref(0);

const props = defineProps<{
  tabsSlider: IUmbracoData<TabsSliderProperties>;
}>();

const mapped: Omit<IAxSlidingTabsItem, 'isActive'>[] = props.tabsSlider.properties.tabs.items.map((item) => {
  return {
    isActive: false,
    item: item.content.properties
  };
});
const tabs = ref(mapped);

let isStopped = false;
let timer: number;
const activeItemIndex = ref(0);
const activeItem = computed(() => {
  return tabs.value[activeItemIndex.value].item;
});

onMounted(() => {
  const totalDurationMs = 1000 * 4;
  const intervalDurationMs = 50;
  const step = (intervalDurationMs / totalDurationMs) * 100;

  timer = window.setInterval(() => {
    if (isStopped) return;
    progress.value += step;
    if (progress.value < 100) return;
    activeItemIndex.value = (activeItemIndex.value + 1) % tabs.value.length;
    progress.value = 0;
  }, intervalDurationMs);
});

onUnmounted(() => {
  clearInterval(timer);
});
</script>

<template>
  <!-- Outer container: flex column on mobile, row on large screens with responsive padding -->
  <div class="mx-auto w-full max-w-[1920px] flex flex-col gap-3 px-5 lg:flex-row lg:justify-between lg:px-20">
    <!-- Title -->
    <h2 class="text-[#9D5726] text-center font-['Masada',sans-serif] text-[22px] font-[550] leading-[110%] lg:text-right lg:text-[60px] lg:leading-[66px] lg:w-[335px]">
      {{ props.tabsSlider.properties.mainTitle }}
    </h2>
    <!-- Tabs Items Container -->
    <div class="flex flex-col gap-3 max-w-[1323px]">
      <!-- Figure with image -->
      <figure
          :style="{ '--img-src': `url(${activeItem.image[0].properties.umbracoFile})` }"
          class="overflow-hidden max-w-[1323px] flex flex-col gap-[7px] relative lg:gap-[11px]"
      >
        <picture>
          <source :srcset="activeItem.image[0].properties.umbracoFile" />
          <img
              :src="activeItem.image[0].properties.umbracoFile"
              loading="lazy"
              :alt="activeItem.image[0].properties.alt"
              class="w-full min-h-[157px] max-w-[1323px] max-h-[411px] box-border object-cover relative z-10"
          />
        </picture>
        <figcaption class="mt-[7px] text-[#04283E] text-right font-['SimplerPro',sans-serif] text-[12px] font-normal leading-[120%] opacity-60 relative z-10 lg:text-[16px] lg:font-bold lg:leading-[22px]">
          <span class="block lg:hidden">קרדיט</span>
          צילום: {{ activeItem.image[0].properties.credit }}
        </figcaption>
      </figure>
      <!-- Tabs Items -->
      <div class="flex flex-col gap-6 lg:flex-row lg:gap-10">
        <AxSlidingTabsItem
            v-for="(tabb, index) in tabs"
            :key="index"
            :isActive="activeItemIndex === index"
            :progress="progress"
            :item="tabb.item"
            :class="activeItemIndex === index
                    ? 'flex-grow transition-[width] duration-300 ease-in-out'
                    : 'flex-grow-0 flex-shrink-0 cursor-pointer'"
            @button-pressed="onChildButtonPressed"
            @title-pressed="() => onTitlePressed(index)"
        />
      </div>
    </div>
  </div>
</template>
