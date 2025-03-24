<script setup lang="ts">
import AxAboutMandelUnitsItem from "./AxAboutMandelUnitsItem.vue";
import type {AboutMandelFooterItemProperties} from "../interfaces/IAxAboutMandel.ts";

const props = defineProps<{
  item: AboutMandelFooterItemProperties[];
}>();

</script>

<template>
  <div class="about-mandel-units">

    <AxAboutMandelUnitsItem v-for="(unit, index) in props.item"
                            :key="unit.title"
                            :item="unit"
                            :index="index"
                            :total-items="props.item.length"

    />
  </div>
</template>

<style scoped>
.about-mandel-units {
  width: 100%;
  max-width: 1920px;
  aspect-ratio: 1920 / 735;
  margin: 0 auto;
  overflow: hidden;
  background-color: #f5f5f5;
  display: flex;
  position: relative;
}

@media (max-width: 991px) {
  .about-mandel-units {
    flex-direction: column;
    aspect-ratio: unset;
  }
}

</style>
