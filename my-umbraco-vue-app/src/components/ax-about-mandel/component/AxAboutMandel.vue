<script setup lang="ts">
import type { AboutMandelFooterItemProperties, IAxAboutMandel } from "../interfaces/IAxAboutMandel.ts";
import AxAboutMandelInformation from "./AxAboutMandelInformation.vue";
import AxAboutMandelUnits from "./AxAboutMandelUnits.vue";
import { computed } from "vue";
import type { ComputedRef } from "@vue/reactivity";

const props = defineProps<{
  item: IAxAboutMandel;
}>();

const units: ComputedRef<AboutMandelFooterItemProperties[]> = computed(() =>
    props.item.properties.units.items.map((item) => item.content.properties)
);
</script>

<template>
  <section class="w-full max-w-[120rem] mx-auto">
    <div class="flex flex-col items-center justify-center gap-[3.6875rem]">
      <AxAboutMandelInformation :item="props.item" />
      <AxAboutMandelUnits :item="units" />
    </div>
  </section>
</template>
