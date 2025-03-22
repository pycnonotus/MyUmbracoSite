<script setup lang="ts">
import type {IAxSlidingTabsItemCollection} from "../Interfaces/IAxSlidingTabsItem.ts";
import AxSlidingTabsItem from "./AxSlidingTabsItem.vue";

const emit = defineEmits<{
  (e: 'changeIndex'): number;
}>();
const props = defineProps < {
  tabs: IAxSlidingTabsItemCollection,
  activeItemIndex: number,
  progress: number,
}>();
</script>

<template>
  <div class="flex flex-col gap-6 lg:flex-row lg:gap-10">
    <AxSlidingTabsItem
        v-for="(tab, index) in props.tabs"
        :key="index"
        :isActive="activeItemIndex === index"
        :progress="progress"
        :item="tab.item"
        :class="activeItemIndex === index
                    ? 'flex-grow transition-[width] duration-300 ease-in-out'
                    : 'flex-grow-0 flex-shrink-0 cursor-pointer'"
        @pressed="() => emit('changeIndex', index)"
    />
  </div>
</template>

<style scoped>

</style>