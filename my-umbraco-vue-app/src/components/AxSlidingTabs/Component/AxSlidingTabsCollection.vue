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
        :isActive="props.activeItemIndex === index"
        :progress="progress"
        :item="tab.item"
        :class="props.activeItemIndex === index
                    ? 'flex-grow-1'
                    : 'flex-shrink-0'"
        @pressed="() => emit('changeIndex', index)"
    />
  </div>
</template>

<style scoped>

</style>