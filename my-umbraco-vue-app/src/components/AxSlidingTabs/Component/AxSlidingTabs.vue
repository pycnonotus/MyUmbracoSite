<script setup lang="ts">
import {ref, onMounted, onUnmounted, computed} from 'vue';
import type {IUmbracoData, TabsSliderProperties} from "../Interfaces/IUmbracoData.ts";
import type {IAxSlidingTabsItem} from "../Interfaces/IAxSlidingTabsItem.ts";
import AxSlidingTabsCollection from "./AxSlidingTabsCollection.vue";
import AxSlidingTabsFigure from "./AxSlidingTabsFigure.vue";


function onChangeIndex(index: number) {
  if (activeItemIndex.value !== index) {
    progress.value = 0;
    activeItemIndex.value = index;
  }else{
    isStopped = !isStopped;

  }
}

const progress = ref(0);

const props = defineProps<{
  tabsSlider: IUmbracoData<TabsSliderProperties>;
}>();

const mapped: Omit<IAxSlidingTabsItem, 'isActive'>[] = props.tabsSlider.properties.tabs.items.map(
    (item) => ({
      isActive: false,
      item: item.content.properties,
    })
);
const tabs = ref(mapped);

let isStopped = false;
let timer: number;
const activeItemIndex = ref(0);
const activeItem = computed(
    () => tabs.value[activeItemIndex.value].item
);

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
  <div
      class="mx-auto w-full max-w-[1920px] flex flex-col gap-3 px-5 lg:flex-row lg:justify-between lg:px-20"
  >
    <h2
        class="text-[#9D5726] text-center font-['Masada',sans-serif]
             text-[22px] font-[550] leading-[110%]
             lg:text-right lg:text-[60px] lg:leading-[66px] lg:w-[335px]"
    >
      {{ props.tabsSlider.properties.mainTitle }}
    </h2>

    <div class="flex flex-col gap-3 max-w-[1323px]">
      <AxSlidingTabsFigure :image="activeItem.image[0]"/>

      <AxSlidingTabsCollection
          :tabs="tabs"
          :activeItemIndex="activeItemIndex"
          :progress="progress"
          @changeIndex="onChangeIndex"
      />

    </div>
  </div>
</template>
