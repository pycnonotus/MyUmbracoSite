<script setup lang="ts">
import AxAboutMandelUnitsItem from "./AxAboutMandelUnitsItem.vue";
import type { AboutMandelFooterItemProperties } from "../interfaces/IAxAboutMandel.ts";

const props = defineProps<{
  item: AboutMandelFooterItemProperties[];
}>();
</script>

<template>
  <div class="w-full max-w-[120rem] h-auto lg:aspect-[1920/735] mx-auto overflow-hidden bg-gray-100 flex flex-col lg:flex-row relative">
    <AxAboutMandelUnitsItem
        v-for="(unit, index) in props.item"
        :key="unit.title"
        :item="unit"
        :index="index"
        :total-items="props.item.length"
    />
  </div>
</template>
