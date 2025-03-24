<script setup lang="ts">
import type {AboutMandelFooterItemProperties, IAxAboutMandel} from "../interfaces/IAxAboutMandel.ts";
import AxAboutMandelInformation from "./AxAboutMandelInformation.vue";
import AxAboutMandelUnits from "./AxAboutMandelUnits.vue";
import {computed} from "vue";
import type {ComputedRef} from "@vue/reactivity";

const props = defineProps<{
  item: IAxAboutMandel;
}>();

const units: ComputedRef<AboutMandelFooterItemProperties[]> = computed(() => props.item.properties.units.items.map((item) => item.content.properties));

</script>

<template>
  <section>
    <div class="about-mandel">
      <AxAboutMandelInformation :item="props.item" />
      <AxAboutMandelUnits :item="units" />
    </div>
  </section>
</template>

<style scoped>
section {
  width: 100%;
  max-width: 1920px;

  margin: 0 auto;
}

.about-mandel {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 59px;
}

</style>