<script setup lang="ts">
import type {ImageItem} from "../Interfaces/IUmbracoData.ts";
import { defineProps } from 'vue';

const props = defineProps<{
  image: ImageItem;
}>();
</script>

<template>
  <figure
      class="relative overflow-hidden flex flex-col gap-2 max-w-[1323px]"
  >
    <img
        :src="props.image.properties.umbracoFile"
        :alt="props.image.properties.alt"
        class="absolute w-[calc(100%-36px)] h-[calc(100%-46px)] object-cover
                 blur-[7px] translate-x-[18px] translate-y-[23px] opacity-60
                 top-0 left-0"
    />
    <img
        :src="props.image.properties.umbracoFile"
        :alt="props.image.properties.alt"
        loading="lazy"
        class="relative w-full min-h-[157px] max-h-[411px] max-w-[1323px] object-cover z-10"
    />
    <figcaption
        class="mt-2 text-[#04283E] text-right font-['SimplerPro',sans-serif]
                 text-[12px] font-normal leading-[120%] opacity-60 relative z-10
                 lg:text-[16px] lg:font-bold lg:leading-[22px]"
    >
      צילום: {{ props.image.properties.credit }}
    </figcaption>
  </figure>
</template>

<style scoped>

</style>